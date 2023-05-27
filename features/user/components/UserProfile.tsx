'use client';

import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export function UserProfile() {
  const { data, status } = useSession();

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'authenticated') {
    return (
      <div className="space-y-8">
        <pre className="bg-slate-100 p-8 rounded-lg">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>

        <SignOutButton />
      </div>
    );
  }

  return <SignInButton />;
}

export const Loading = () => <>loading...</>;

export const SignOutButton = () => {
  return (
    <button className="text-red-500 underline" onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const SignInButton = () => (
  <button className="text-blue-500 underline" onClick={() => signIn()}>
    Sign In
  </button>
);
