import express, {ErrorRequestHandler} from "express";
import bodyParser from "body-parser";
import productsRoutes from "./routes/product";
import searchesRoutes from "./routes/search";
import listRoutes from "./routes/list";

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

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    console.error(err);
    res.status(err.statusCode).json({
      status: err.statusCode,
      error: 'Internal Server Error',
    });
  };
  

app.use(errorHandler);

export default app