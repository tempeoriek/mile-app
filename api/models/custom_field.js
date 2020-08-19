let Schema = mongoose.Schema;

let custom_field_schema = new Schema({
  catatan_tambahan: {
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

let custom_field = mongoose.model("custom_field", custom_field_schema);

module.exports = custom_field;
