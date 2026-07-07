import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut as firebaseSignOut,
    onAuthStateChanged as firebaseOnAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

let appInstance: any = null;
let authInstance: any = null;

/**
 * Initializes the Firebase Application and Auth service if not already initialized.
 * @param firebaseConfig The Firebase project configuration object.
 * @returns An object containing the initialized Firebase App and Auth instances.
 */
export function initializeAuth(firebaseConfig: any) {
    if (!appInstance) {
        appInstance = initializeApp(firebaseConfig);
        authInstance = getAuth(appInstance);
    }
    return { app: appInstance, auth: authInstance };
}

/**
 * Retrieves the active Auth instance. Throws an error if not initialized.
 */
export function getAuthInstance() {
    if (!authInstance) {
        throw new Error("Authentication has not been initialized yet. Please call initializeAuth(config) first.");
    }
    return authInstance;
}

/**
 * Sign in a user with email and password.
 */
export async function signIn(email: string, password: string): Promise<any> {
    const auth = getAuthInstance();
    return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Create a new user account with email and password.
 */
export async function signUp(email: string, password: string): Promise<any> {
    const auth = getAuthInstance();
    return createUserWithEmailAndPassword(auth, email, password);
}

/**
 * Send a password reset email.
 */
export async function sendPasswordReset(email: string): Promise<any> {
    const auth = getAuthInstance();
    return sendPasswordResetEmail(auth, email);
}

/**
 * Log out the currently authenticated user.
 */
export async function signOut(): Promise<any> {
    const auth = getAuthInstance();
    return firebaseSignOut(auth);
}

/**
 * Listen to authentication state changes.
 */
export function onAuthStateChanged(callback: (user: any) => void): () => void {
    const auth = getAuthInstance();
    return firebaseOnAuthStateChanged(auth, callback);
}
