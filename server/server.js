const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Enable CORS

const allowedOrigins = [
    //deploment url
    'https://agri-connect-mern1.vercel.app',
    //localhost for local development testing
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3000'
];

const corsOptions = {
  // Use the origin function to dynamically check if the origin is allowed
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, postman, or curl)
    // OR if the origin is in our list of allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  // Set to true if your API uses cookies, sessions, or authorization headers
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

// Middleware - Apply the configured CORS options
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Sucessfully......✈️'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/listings', require('./routes/listings'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'AgriConnect API is running' });
});
// Start the server  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
