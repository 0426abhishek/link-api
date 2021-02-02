import csvtojson from 'csvtojson';
import fs from 'fs';
import moment from 'moment';

/**
 * Get Transaction will get the data from csv file 
 * and sort it according to sales order
 * @param {*} request  
 * @param {*} response 
 */
export const getTransaction = async (req, res) => {
    try {
        const transactionData = await csvtojson().fromFile('transactions.csv');
        const userTransactionList = Object.keys(transactionData).map((key) => {
                return transactionData[key];
            })
            .sort((a, b) => {
                return b.sales_reference - a.sales_reference;
            });
        res.jsonp({
            status: 200,
            response: userTransactionList
        });
    } catch (err) {
        console.log(err);
        res.jsonp({
            status: 400,
            response: err
        });
    }
}

/**
 * Add missing transaction method will add the amount into missing sales_reference.
 * @param {*} request 
 * @param {*} response
 */
export const addMissingTransaction = (req, res) => {
    let data = []
    data.push(moment().format("YYYY-MM-DD HH:mm"));
    data.push(req.body.sales_reference);
    data.push(req.body.amount);
    fs.appendFile('transactions.csv', '\n' + data.join(','), 'utf8', (err) => {
        if (err) {
            console.log('Some error occured - file either not saved or corrupted file saved.');
            res.jsonp({
                status: 400,
                response: err
            });
        } else {
            res.jsonp({
                status: 200,
                response: `Amount ${req.body.amount} is added successfully into Sales reference ${req.body.sales_reference}`
            });
        }
    });
}