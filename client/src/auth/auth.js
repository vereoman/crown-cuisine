// src/auth/auth.js
import { createAuthClient } from "better-auth/client";

// Create an instance of the auth client
const authClient = createAuthClient();

// Export a function to trigger the Google OAuth flow
export const signInWithGoogle = async () => {
    try {
        const response = await authClient.signIn.social({
            provider: "google",
        });
        console.log("Google sign-in successful:", response);
        // You can now redirect the user or handle the response as needed.
    } catch (error) {
        console.error("Error during Google sign-in:", error);
    }
};
