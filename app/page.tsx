import Image from 'next/image'
import { Roboto } from 'next/font/google'
import styles from './page.module.css'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    // redirect('/api/auth/signin');
    console.log(session);
    return <div>You must be signed in...</div>
  } 
    
  return (
    <main className={styles.main}>
      {{ session }}
    </main>
  )
    
}
  