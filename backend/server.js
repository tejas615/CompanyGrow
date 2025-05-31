const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/badges', require('./routes/badgeRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));
app.use('/api/uploads', require('./routes/uploadRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));