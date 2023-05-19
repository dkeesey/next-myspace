import { getServerSession } from 'next-auth';
import FollowClient from './FollowClient';
import { authOptions } from '../../app/api/auth/[...nextauth]/route'

// import { prisma } from '@/lib/prisma';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


interface Props {
  targetUserId: string;
}



export default function FollowButton({ targetUserId }: Props) {
  const handleFollowButton = async () => {
    const session = await getServerSession(authOptions);
    const currentUserId = await prisma.user
      .findFirst({ where: { email: session?.user?.email! } })
      .then((user) => user?.id!);

    const isFollowing = await prisma.follows.findFirst({
      where: { followerId: currentUserId, followingId: targetUserId },
    });

    // Rest of your code

    return (
      <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
    );
  };

  return <button onClick={handleFollowButton}>Follow</button>;
}