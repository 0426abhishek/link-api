/**
 * Express, is a back end web application framework for Node.js.
 * Added type equals to module to use import statement ECMAScript.
 * Body Parser will take incoming post request body.
 */
import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';

// with export default we can use any name.
import transactionRoutes from './routes/transactions.js'

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Adding the routers so that we can route to specific service.
app.use("/transactions", transactionRoutes);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));