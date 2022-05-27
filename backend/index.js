import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5000;

// Configura JSON response
app.use(express.json());

// Resolve cors
app.use(cors({credentials: true, origin: 'http://localhost:3000' }));

// Public folder for images
app.use(express.static('public'));

// Routes


app.listen(PORT, () => {  
    console.log(`Server running on port ${PORT}`);
}
);
