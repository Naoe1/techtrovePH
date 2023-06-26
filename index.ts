import express, {ErrorRequestHandler} from "express";
import bodyParser from "body-parser";
import productsRoutes from "./routes/product";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/products', productsRoutes);

app.get("/", (req, res) => {
    res.send("Hellowe world!")
});


const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    console.error(err);
    res.status(err.statusCode).json({
      error: err.message || 'Internal Server Error',
    });
  };
  

app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

