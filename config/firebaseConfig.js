// /config/firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('../../database manager/database-chatting-app-dc0895893908.json');  // Adjust the path as necessary

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { admin, db };
