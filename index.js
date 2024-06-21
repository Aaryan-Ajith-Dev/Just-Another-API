import express from 'express'
import cors from 'cors'
import AuthRouter from './routers/AuthRouter.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', AuthRouter)

db();

app.get('/', (req, res) => {
  res.send("App is working");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

