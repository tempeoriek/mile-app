let Schema = mongoose.Schema;

let origin_data_schema = new Schema({
  customer_name: {
    type: String,
    default: null
  },
  customer_address: {
    type: String,
    default: null
  },
  customer_email: {
    type: String,
    default: null
  },
  customer_phone: {
    type: String,
    default: null
  },
  customer_address_detail: {
    type: String,
    default: null
  },
  customer_zip_code: {
    type: String,
    default: null
  },
  zone_code: {
    type: String,
    default: null
  },
  organization_id: {
    type: Number,
    default: false
  },
  location_id: {
    type: String,
    default: null
  },

  /* config */
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: null
  },
  is_delete: {
    type: Boolean,
    default: false
  }
});

let origin_data = mongoose.model("origin_data", origin_data_schema);

module.exports = origin_data;
