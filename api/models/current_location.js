let Schema = mongoose.Schema;

let current_location_schema = new Schema({
  name: {
    type: String,
    default: null
  },
  code: {
    type: String,
    default: null
  },
  type: {
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

let current_location = mongoose.model("current_location", current_location_schema);

module.exports = current_location;
