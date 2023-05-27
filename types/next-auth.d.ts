/**
 * Module Augmentation:
 * https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
import { DefaultSession } from 'next-auth';

enum Role {
  USER,
  ADMIN
}

// thanks: https://reacthustle.com/blog/extend-user-session-nextauth-typescript
declare module 'next-auth' {
  interface User {
    role?: Role;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}
