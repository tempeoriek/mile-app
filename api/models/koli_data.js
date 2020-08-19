let Schema = mongoose.Schema;

let koli_data_schema = new Schema({
  koli_length: {
    type: Number,
    default: null
  },
  awb_url: {
    type: String,
    default: null
  },
  koli_chargeable_weight: {
    type: Number,
    default: null
  },
  koli_width: {
    type: Number,
    default: null
  },
  koli_surcharge: {
    type: Array,
  },
  koli_height: {
    type: Number,
    default: null
  },
  koli_description: {
    type: String,
    default: null
  },
  koli_formula_id: {
    type: String,
    default: null
  },
  koli_volume: {
    type: Number,
    default: null
  },
  koli_weight: {
    type: Number,
    default: null
  },
  koli_id: {
    type: String,
    default: null
  },
  koli_custom_field: {
    type: Object,
    default: null
  },
  koli_code: {
    type: String,
    default: null
  },
  connote_id: {
    type: String,
    default: null
  },

  /* config */
  created_at: {
    type: Date,
    default: Date.now
  },
  update_at: {
    type: Date,
    default: null
  },
  is_delete: {
    type: Boolean,
    default: false
  }
});

let koli_data = mongoose.model("koli_data", koli_data_schema);

module.exports = koli_data;
