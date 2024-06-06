import mongoose from 'mongoose';
import env from './env';

const {MONGODB_DATABASE_URL} = env;

async function connectToDb() {
  try {
    await mongoose.connect(MONGODB_DATABASE_URL);
    console.log('DB Connected');
  } catch (error) {
    console.log(error);
  }
}

connectToDb();
