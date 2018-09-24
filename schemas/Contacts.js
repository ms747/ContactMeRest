const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.String, required: [true, "Required"] },
  email: {
    type: mongoose.Schema.Types.String,
    required: [true, "Requied"],
    validate: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  },
  message: { type: mongoose.Schema.Types.String, required: [true, "Requied"] }
});

module.exports = mongoose.model("Contacts", contactsSchema);
