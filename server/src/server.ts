import express from 'express';
import './database/connection';

const app = express();

app.use(express.json());

app.post('/', () => {});

app.listen(3333);