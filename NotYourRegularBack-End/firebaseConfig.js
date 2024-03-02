// firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('./private-key-file.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Access Firestore using admin.firestore()
const db = admin.firestore();

// Export both 'admin' and 'db'
module.exports = {
    admin: admin,
    db: db,
  };
