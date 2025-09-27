import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGDB_ATLAS_CONNECTION_STRING || ' ';

const connectDB = async () => {
    try {

        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB connected successfully');
    
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');});

export default connectDB;
