import UserCard from '@/components/UserCard/UserCard';
import styles from './page.module.css';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import AuthCheck from '@/components/AuthCheck';
import { authOptions } from "./api/auth/[...nextauth]/route"

export default async function Users() {
  const users = await prisma.user.findMany();

  const session = await getServerSession(authOptions);
  if (!session) {
    // redirect('/api/auth/signin');
    return <div>You must sign in to see content...</div>;
  }

  return (
    <AuthCheck>

      <div className={styles.grid}>
        {users.map((user) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </div>
    </AuthCheck>

  );
}
