import { UserProfile } from 'features/user';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <UserProfile />
      </div>
    </main>
  );
}
