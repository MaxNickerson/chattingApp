const admin = require('firebase-admin');

// Path to your Firebase service account key file
// Make sure to replace 'path-to-your-service-account-key.json' with the correct path
const serviceAccount = require('../database-chatting-app-a928494373d5.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };
