import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import errorMiddleware from './middlewares/errorMiddleware';
import routes from './routes';
import config from './config';

const app: Application = express();
const port = config.port || 3000;
const address = '127.0.0.1:3000';
// cors
app.use(cors());
// handle request data
app.use(express.json());
// middleware logs
app.use(morgan('common'));
// protect express
app.use(helmet());
// protect server
app.use(
	rateLimit({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
		standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
		legacyHeaders: false, // Disable the `X-RateLimit-*` headers
		message: 'Too many requests',
	})
);
// Routes
app.use('/', routes);
// handle error server
app.use(errorMiddleware);
// handle unknown routes
app.use((_req: Request, res: Response) => {
	res.status(404).json({
		message: 'page not found',
	});
});

app.listen(port, () => {
	console.log(`server running in ${address}`);
});

export default app;
