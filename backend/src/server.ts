import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import './config/db';
import routes from './routes';

const app = express();
const bodyParser = express.json;
const urlDecoder = express.urlencoded;

// !cors
app.use(cors());
// !For accepting post form data
app.use(bodyParser());
// !For decoding post form data
app.use(urlDecoder({extended: true}));
// !For logging all requests
app.use(morgan('tiny'));
// !Registering routes
app.use(routes);

export default app;
