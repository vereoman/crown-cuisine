// src/auth/auth.ts
import { betterAuth } from "better-auth";

// Configure Better Auth with your Google OAuth credentials
export const auth = betterAuth({
    // Optionally, add other configuration (e.g., database, session settings, plugins)
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            // Optionally, you can specify additional options like scopes or custom mapping:
            // scope: "email profile https://www.googleapis.com/auth/calendar.readonly",
            // mapProfileToUser: (profile) => ({
            //   firstName: profile.given_name,
            //   lastName: profile.family_name,
            //   email: profile.email,
            //   image: profile.picture,
            // }),
        },
    },
});
