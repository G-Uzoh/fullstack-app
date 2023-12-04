import express from 'express';
import { port, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// app.listen(port, () => console.log(`App is listening to port: ${port}`));

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).send('Welcome to backend');
});

app.use('/books', booksRoute); // endpoint

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to the MongoDB database');
        app.listen(port, () => console.log(`App is listening to port: ${port}`));
    })
    .catch((error) => {
        console.log(error);
    });