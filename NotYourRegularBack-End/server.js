const express = require('express');
const { admin, db } = require('./firebaseConfig.js'); //admin is an instance of the Firebase Admin SDK, and db is an instance of the Firestore database

const app = express();
const PORT = process.env.PORT || 3000; // port can be defined node later on

// Define a basic route
/*app.get('/', async (req, res) => {
  try{
  const data = await db.collection('test').get();
  const documents = data.docs.map(doc => doc.data());
    
    //res.json({ success: true, documents });
    res.json(documents);;
  }catch(error)
    { console.error( "Fetching data", error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});*/

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
