declare module "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js" {
    export function initializeApp(config: any): any;
}
declare module "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js" {
    export class GoogleAuthProvider {
        constructor();
    }
    export function signInWithPopup(auth: any, provider: any): Promise<any>;
    export function getAuth(app?: any): any;
    export function signInWithEmailAndPassword(auth: any, email: string, password: string): Promise<any>;
    export function createUserWithEmailAndPassword(auth: any, email: string, password: string): Promise<any>;
    export function sendPasswordResetEmail(auth: any, email: string): Promise<any>;
    export function signOut(auth: any): Promise<any>;
    export function onAuthStateChanged(auth: any, next: (user: any) => void, error?: (err: any) => void): any;
}
