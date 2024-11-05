const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
 
const app = express(); 
const PORT = 5000; 
 
app.use(cors()); 
app.use(bodyParser.json()); 
 
const mockCabData = [ 
    { service: "Service A", price: 10, distance: 5 },
    { service: "Service B", price: 12, distance: 6 },
    { service: "Service C", price: 8, distance: 4 },
    { service: "Service D", price: 9, distance: 3.5 },
    { service: "Service E", price: 11, distance: 5.5 },
    { service: "Service F", price: 13, distance: 7 },
    { service: "Service G", price: 7, distance: 2 },
    { service: "Service H", price: 14, distance: 8 },
    { service: "Service I", price: 15, distance: 9 },
    { service: "Service J", price: 10, distance: 5 },
    { service: "Service K", price: 16, distance: 10 },
    { service: "Service L", price: 17, distance: 10.5 },
    { service: "Service M", price: 18, distance: 11 },
    { service: "Service N", price: 19, distance: 12 },
    { service: "Service O", price: 20, distance: 13 },
    { service: "Service P", price: 21, distance: 14 },
    { service: "Service Q", price: 22, distance: 15 },
    { service: "Service R", price: 23, distance: 16 },
    { service: "Service S", price: 24, distance: 17 },
];

app.post('/compare', (req, res) => { 
    res.json(mockCabData); 
}); 
 
app.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`); 
});
