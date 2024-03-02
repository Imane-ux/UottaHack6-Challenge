const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // port can be defined node later on

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
