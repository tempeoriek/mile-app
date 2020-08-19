let customer_attribute = require('../models/customer_attribute'),
  current_location = require('../models/current_location'),
  custom_field = require('../models/custom_field'),
  destination_data = require('../models/destination_data'),
  origin_data = require('../models/origin_data'),
  koli_data = require('../models/koli_data'),
  connote = require('../models/connote'),
  PackageController = require('./PackageController'),
  transaction = require('../models/transaction');

PackageController = {
  getShootApi: async function (req, res) {
    let [err, find_transaction] = await flatry(transaction.findOne({ transaction_id: `d0090c40-539f-479a-8274-899b9970bddc`, is_delete: false }).
      populate(`connote`).
      populate(`current_location`).
      populate(`custom_field`).
      populate(`customer_attribute`).
      populate(`destination_data`).
      populate(`origin_data`).
      populate({ path: 'koli_data', model: 'koli_data' })
    );
    if (err || !find_transaction) {
      html = `
        <div style="padding: 20vh;">
          <p>Data Not Found</p>
          <a href="/">Try again.</a>
        </div>
      `;
    } else {
      html = `
        <div style="padding: 20vh;">
          Data Found ! <br><br><br>
          Transaction:  ${find_transaction.transaction_id}.<br> 
          Customer Name:  ${find_transaction.customer_name}.<br> 
          Customer Code:  ${find_transaction.customer_code}.<br> 
          Transaction Amount:  ${find_transaction.transaction_amount}.<br> 
          Transaction Discount:  ${find_transaction.transaction_discount}.<br> 
          Transaction Payment Type:  ${find_transaction.transaction_payment_type}.<br> 
          Transaction State:  ${find_transaction.transaction_state}.<br> 
          Transaction Code:  ${find_transaction.transaction_code}.<br> 
          Transaction Order:  ${find_transaction.transaction_order}.<br> 
          Payment Type:  ${find_transaction.transaction_payment_type_name}.<br> 
          Transaction Cash Amount:  ${find_transaction.transaction_cash_amount}.<br> 
          Transaction Cash Change:  ${find_transaction.transaction_cash_change}.<br><br><br> 
          <a href="/">Try again.</a>
        </div>
      `;
    }
    res.send(html);
  },

  getIdShootApi: async function (req, res) {
    let [err, find_transaction] = await flatry(transaction.findOne({ transaction_id: req.query.transaction_id, is_delete: false }).
      populate(`connote`).
      populate(`current_location`).
      populate(`custom_field`).
      populate(`customer_attribute`).
      populate(`destination_data`).
      populate(`origin_data`).
      populate({ path: 'koli_data', model: 'koli_data' })
    );
    if (err || !find_transaction) {
      html = `
        <div style="padding: 20vh;">
          <p>Data Not Found</p>
          <a href="/">Try again.</a>
        </div>
      `;
    } else {
      html = `
        <div style="padding: 20vh;">
          Data Found ! <br><br><br>
          Transaction:  ${find_transaction.transaction_id}.<br> 
          Customer Name:  ${find_transaction.customer_name}.<br> 
          Customer Code:  ${find_transaction.customer_code}.<br> 
          Transaction Amount:  ${find_transaction.transaction_amount}.<br> 
          Transaction Discount:  ${find_transaction.transaction_discount}.<br> 
          Transaction Payment Type:  ${find_transaction.transaction_payment_type}.<br> 
          Transaction State:  ${find_transaction.transaction_state}.<br> 
          Transaction Code:  ${find_transaction.transaction_code}.<br> 
          Transaction Order:  ${find_transaction.transaction_order}.<br> 
          Payment Type:  ${find_transaction.transaction_payment_type_name}.<br> 
          Transaction Cash Amount:  ${find_transaction.transaction_cash_amount}.<br> 
          Transaction Cash Change:  ${find_transaction.transaction_cash_change}.<br><br><br> 
          <a href="/">Try again.</a>
        </div>
      `;
    }
    res.send(html);
    res.sendStatus(200);
  },

  postShootApi: async function (req, res) {
    let [err, find_transaction] = await flatry(transaction.findOne({ transaction_id: `d0090c40-539f-479a-8274-899b9970bddc`, is_delete: false }).
      populate(`connote`).
      populate(`current_location`).
      populate(`custom_field`).
      populate(`customer_attribute`).
      populate(`destination_data`).
      populate(`origin_data`).
      populate({ path: 'koli_data', model: 'koli_data' })
    );
    if (err || !find_transaction) {
      html = `
        <div style="padding: 20vh;">
          <p>Data Not Found</p>
          <a href="/">Try again.</a>
        </div>
      `;
    } else {
      html = `
        <div style="padding: 20vh;">
          Data Found ! <br><br><br>
          Transaction:  ${find_transaction.transaction_id}.<br> 
          Customer Name:  ${find_transaction.customer_name}.<br> 
          Customer Code:  ${find_transaction.customer_code}.<br> 
          Transaction Amount:  ${find_transaction.transaction_amount}.<br> 
          Transaction Discount:  ${find_transaction.transaction_discount}.<br> 
          Transaction Payment Type:  ${find_transaction.transaction_payment_type}.<br> 
          Transaction State:  ${find_transaction.transaction_state}.<br> 
          Transaction Code:  ${find_transaction.transaction_code}.<br> 
          Transaction Order:  ${find_transaction.transaction_order}.<br> 
          Payment Type:  ${find_transaction.transaction_payment_type_name}.<br> 
          Transaction Cash Amount:  ${find_transaction.transaction_cash_amount}.<br> 
          Transaction Cash Change:  ${find_transaction.transaction_cash_change}.<br><br><br> 
          <a href="/">Try again.</a>
        </div>
      `;
    }
    res.send(html);
  },
  
  ShootApi: async function (req, res) {
    let { transaction_id, customer_id_put, customer_id_patch, transaction_id_del, transaction_id_restore} = req.body,
      method, baseURL, params, html;
    if (transaction_id && customer_id_put) {
      method = `PUT`;
      baseURL = `http://localhost:8081/package/${transaction_id}`;
      params = {
        customer_id: customer_id_put
      };
    } else if (transaction_id && customer_id_patch) { 
      method = `PATCH`;
      baseURL = `http://localhost:8081/package/${transaction_id}`;
      params = {
        customer_id: customer_id_patch
      };
    } else if (transaction_id_del) {
      method = `DELETE`;
      baseURL = `http://localhost:8081/package/${transaction_id_del}`;
    } else if (transaction_id_restore) {
      await flatry(transaction.findOneAndUpdate({
        transaction_id: transaction_id_restore
      }, { is_delete: false }, { new: true }));
      html = `<div style="padding: 20vh;">
              <p>Data Restored</p>
              <a href="/">Try again.</a>
            </div>`
    }
    if (method && baseURL) {
      axios({
        method,
        baseURL,
        params,
      })
        .then(function (response) {
          console.log(`success`);
          if (response.data) {
            html = response.data;
          } else {
            html = `
            <div style="padding: 20vh;">
              <p>Data Not Found</p>
              <a href="/">Try again.</a>
            </div>
            `;
          }
          res.send(html);
        })
        .catch(function (error) {
          console.log(`\nERROR:Error when axios shoot api in Package controller\n`);
          console.log(error.response);
          html = `
            <div style="padding: 20vh;">
              <p>Data Not Found</p>
              <a href="/">Try again.</a>
            </div>
            `;
          res.send(html);
        })
    } else {
      res.send(html)
    }
  },

  putShootApi: async function (req, res) {
    let transaction_id = req.params.id, 
      customer_id = req.query.customer_id;
    let [err, find_transaction] = await flatry(transaction.findOneAndUpdate({ 
      transaction_id, is_delete: false 
    }, { customer_code: customer_id }, { new: true }).
      populate(`connote`).
      populate(`current_location`).
      populate(`custom_field`).
      populate(`customer_attribute`).
      populate(`destination_data`).
      populate(`origin_data`).
      populate({ path: 'koli_data', model: 'koli_data' })
    );
    if (err || !find_transaction) {
      html = `
        <div style="padding: 20vh;">
          <p>Data Not Found</p>
          <a href="/">Try again.</a>
        </div>
      `;
    } else {
      html = `
        <div style="padding: 20vh;">
          Data Found ! <br><br><br>
          Transaction:  ${find_transaction.transaction_id}.<br> 
          Customer Name:  ${find_transaction.customer_name}.<br> 
          Customer Code:  ${find_transaction.customer_code}.<br> 
          Transaction Amount:  ${find_transaction.transaction_amount}.<br> 
          Transaction Discount:  ${find_transaction.transaction_discount}.<br> 
          Transaction Payment Type:  ${find_transaction.transaction_payment_type}.<br> 
          Transaction State:  ${find_transaction.transaction_state}.<br> 
          Transaction Code:  ${find_transaction.transaction_code}.<br> 
          Transaction Order:  ${find_transaction.transaction_order}.<br> 
          Payment Type:  ${find_transaction.transaction_payment_type_name}.<br> 
          Transaction Cash Amount:  ${find_transaction.transaction_cash_amount}.<br> 
          Transaction Cash Change:  ${find_transaction.transaction_cash_change}.<br><br><br> 
          <a href="/">Try again.</a>
        </div>
      `;
    }
    res.send(html);
  },

  patchShootApi: async function (req, res) {
    let transaction_id = req.params.id,
      customer_id = req.query.customer_id;
    let [err, find_transaction] = await flatry(transaction.findOneAndUpdate({
      transaction_id, is_delete: false
    }, { customer_code: customer_id }, { new: true }).
      populate(`connote`).
      populate(`current_location`).
      populate(`custom_field`).
      populate(`customer_attribute`).
      populate(`destination_data`).
      populate(`origin_data`).
      populate({ path: 'koli_data', model: 'koli_data' })
    );
    if (err || !find_transaction) {
      html = `
        <div style="padding: 20vh;">
          <p>Data Not Found</p>
          <a href="/">Try again.</a>
        </div>
      `;
    } else {
      html = `
        <div style="padding: 20vh;">
          Data Found ! <br><br><br>
          Customer Code:  ${find_transaction.customer_code}.<br> 
          <a href="/">Try again.</a>
        </div>
      `;
    }
    res.send(html);
  },

  deleteShootApi: async function (req, res) {
    let transaction_id = req.params.id;
    let [err, find_transaction] = await flatry(transaction.findOneAndUpdate({
      transaction_id, is_delete: false
    }, { is_delete: true }, { new: true }));
    if (err || !find_transaction) {
      html = `
        <div style="padding: 20vh;">
          <p>Data Not Found</p>
          <a href="/">Try again.</a>
        </div>
      `;
    } else {
      html = `
        <div style="padding: 20vh;">
          Data Deleted ! <br><br><br>
          <a href="/">Try again.</a>
        </div>
      `;
    }
    res.send(html);
  },
}

module.exports = PackageController;

