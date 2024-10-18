// const admin = require('firebase-admin');

// // Initialize Firebase Admin SDK
// const serviceAccount = require('./serviceAccountKey.json'); // i have to place path to my service account file

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

// // assign 'superuser' role to a user
// const setSuperUserClaim = async (uid) => {
//     await admin.auth().setCustomUserClaims(uid, { role: 'superuser' });
//     console.log(`Superuser role assigned to user with UID: ${uid}`);
// };

// // usage
// setSuperUserClaim('Abc123'); //i have to replace with uid
