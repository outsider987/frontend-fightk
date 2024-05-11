'use client'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();

  const { data: session, status } = useSession();
  

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className='text-black' onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <main className="flex  flex-col items-center justify-between text-black">
        Not signed in <br />
        {status}
      <button onClick={() => router.push('http://localhost:3000/auth/google')}>Sign in</button>
    </main>
  );
}
