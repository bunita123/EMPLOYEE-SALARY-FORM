const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static HTML file
app.use(express.static(__dirname));

// Handle the form submission and save data to a file
app.post('/submit', (req, res) => {
  const { username, email, password } = req.body;
  const userData = `Username: ${username}, Email: ${email}, Password: ${password}\n`;

  // Save the data to a file called 'users.txt'
  fs.appendFile('users.txt', userData, (err) => {
    if (err) {
      return res.status(500).send('Error saving data.');
    }
    res.send('Signup successful! Data saved to file.');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
