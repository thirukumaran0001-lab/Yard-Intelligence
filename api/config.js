export default function handler(req, res) {
  // Set headers to prevent caching sensitive configurations locally, but allow temporary Edge caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Content-Type', 'application/json');

  let firebaseConfig = null;

  // Try parsing full JSON config if provided
  if (process.env.FIREBASE_CONFIG) {
    try {
      firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
    } catch (e) {
      console.error("Failed to parse FIREBASE_CONFIG env variable:", e);
    }
  }

  // Fallback to individual variables if full config is missing or invalid
  if (!firebaseConfig) {
    firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY || "",
      authDomain: process.env.FIREBASE_AUTH_DOMAIN || "",
      projectId: process.env.FIREBASE_PROJECT_ID || "",
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
      appId: process.env.FIREBASE_APP_ID || ""
    };
  }

  res.status(200).json({
    firebaseConfig: firebaseConfig.apiKey && firebaseConfig.projectId ? firebaseConfig : null,
    geminiApiKey: process.env.GEMINI_API_KEY || ""
  });
}
