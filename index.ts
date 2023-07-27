import express, {ErrorRequestHandler} from "express";
import bodyParser from "body-parser";
import productsRoutes from "./routes/product";
import searchesRoutes from "./routes/search";
import listRoutes from "./routes/list";
import lastUpdatedRoutes from "./routes/lastUpdated";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/products', productsRoutes);

app.use('/searches', searchesRoutes)

app.use('/list', listRoutes)

app.use('/lastUpdated', lastUpdatedRoutes)

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    console.error(err);
    res.status(err.statusCode).json({
      status: err.statusCode,
      error: 'Something went wrong',
    });
  };
  

app.use(errorHandler);

export default app