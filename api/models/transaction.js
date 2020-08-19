let Schema = mongoose.Schema;

let transaction_schema = new Schema({
  transaction_id: {
    type: String,
    default: null
  },
  customer_name: {
    type: String,
    default: null
  },
  customer_code: {
    type: String,
    default: null
  },
  transaction_amount: {
    type: String,
    default: null
  },
  transaction_discount: {
    type: String,
    default: null
  },
  transaction_additional_field: {
    type: String,
    default: null
  },
  transaction_payment_type: {
    type: String,
    default: null
  },
  transaction_state: {
    type: String,
    default: null
  },
  transaction_code: {
    type: String,
    default: null
  },
  transaction_order: {
    type: Number,
    default: null
  },
  location_id: {
    type: String,
    default: null
  },
  organization_id: {
    type: Number,
    default: null
  },
  created_at: {
    type: String,
    default: null
  },
  updated_at: {
    type: String,
    default: null
  },
  transaction_payment_type_name: {
    type: String,
    default: null
  },
  transaction_cash_amount: {
    type: Number,
    default: null
  },
  transaction_cash_change: {
    type: Number,
    default: null
  },
  customer_attribute: {
    type: String,
    default: null
  },
  connote_id: {
    type: String,
    default: null
  },

  customer_attribute: {
    type: Schema.Types.ObjectId,
    ref: `customer_attribute`,
    default: null
  },
  connote: {
    type: Schema.Types.ObjectId,
    ref: `connote`,
    default: null
  },
  origin_data: {
    type: Schema.Types.ObjectId,
    ref: `origin_data`,
    default: null
  },
  destination_data: {
    type: Schema.Types.ObjectId,
    ref: `destination_data`,
    default: null
  },
  custom_field: {
    type: Schema.Types.ObjectId,
    ref: `custom_field`,
    default: null
  },
  koli_data: {
    type: Array
  },
  currentLocation: {
    type: Schema.Types.ObjectId,
    ref: `current_location`,
    default: null
  },

  /* config */
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: null
  },
  is_delete: {
    type: Boolean,
    default: false
  }
});

let transaction = mongoose.model("transaction", transaction_schema);

module.exports = transaction;
