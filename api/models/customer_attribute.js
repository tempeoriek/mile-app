let Schema = mongoose.Schema;

let customer_attribute_schema = new Schema({
  Nama_Sales: {
    type: String,
    default: null
  },
  TOP: {
    type: String,
    default: null
  },
  Jenis_Pelanggan: {
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

let customer_attribute = mongoose.model("customer_attribute", customer_attribute_schema);

module.exports = customer_attribute;
