/**
 * Created the router for all services.
 */
import express from 'express';
import {
    getTransaction,
    addMissingTransaction
} from '../controllers/transactions.js'

const router = express.Router();

router.get("/", getTransaction);

router.post("/", addMissingTransaction);
export default router;