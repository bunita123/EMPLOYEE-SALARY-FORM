const express = require('express'); const bodyParser = require('body-parser'); 
const fs = require('fs'); const app = express(); const PORT = 3000; 
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/index.html'); 
}); 
app.post('/submit', (req, res) => {     const employee = {         name: req.body.name,         id: req.body.id, 
        designation: req.body.designation,         salary: req.body.salary, 
    }; 
    const data = JSON.stringify(employee) + '\n';     fs.appendFile('employeeData.txt', data, (err) => { 
        if (err) throw err;         console.log('Data saved.'); 
        res.send('Employee data saved!'); 
    }); 
}); 
app.listen(PORT, () => { 
  console.log(`Server running on http://localhost:${PORT}`);}); 
