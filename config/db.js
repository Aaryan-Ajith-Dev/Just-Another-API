import env from 'dotenv'
import mongoose from 'mongoose'

env.config()

const DB = process.env.DB;
const PORT = 5000;
const app = express();

mongoose.connect(DB);
console.log("Connected to db");