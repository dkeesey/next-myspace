'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
    const { data: session, status } = useSession();
    console.log(session, status);

    if (status === 'loading') {
        return <>...</>;
    }

    if (status === 'authenticated') {
        return (
            <Link href="/dashboard">
                <Image
                    src={session.user?.image ?? '/mememan.webp'}
                    alt="Profile Picture"
                    width={64}
                    height={64}
                />
            </Link>
        );
    }


    return <button onClick={() => signIn()} >Sign In</button>;
}

export function SignOutButton() {
    const { data: session, status } = useSession();
    if (status === 'authenticated') {
        return (<button onClick={() => signOut()} >
            Sign Out
        </button>);
    }

    return null; 
}