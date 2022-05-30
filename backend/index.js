const express = require('express');
const cors = require('cors');
const UserRoutes = require('./routes/UserRoutes.js');

const app = express();

const PORT = 5000;

// Configura JSON response
app.use(express.json());

// Resolve cors
app.use(cors({credentials: true, origin: 'http://localhost:3000' }));

// Public folder for images
app.use(express.static('public'));

// Routes
app.use('/users', UserRoutes);

app.listen(PORT, () => {  
    console.log(`Server running on port ${PORT}`);
}
);
