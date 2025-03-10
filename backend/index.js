import express from 'express';
import dotenv from 'dotenv';
import mongoose, { connect } from 'mongoose';
import bookRouter from './routes/book.route.js';
import cors from 'cors';
import userRoute from './routes/user.route.js'

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect mongoDB
try {
     mongoose.connect(URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
     });
     console.log("connected to mongoDB");
     
} catch (error) {
     console.log("error", error);
     
}

//definding routers
app.use("/book", bookRouter);
app.use("/user", userRoute);

app.listen(PORT, () => {
     console.log(`Server started on Port ${PORT}`)
});