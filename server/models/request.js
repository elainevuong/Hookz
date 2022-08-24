// Creates the Request Schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = Schema.Types;

const RequestSchema = new Schema(
  {
    binId: {
      type: ObjectId,
      ref: "Bin",
      required: true,
    },
    url: {
      type: String,
    },
    headers: {
      type: Object,
    },
    method: {
      type: Object,
    },
    body: {
      type: Object,
    },
  },
  { timestamps: true }
);

RequestSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Request = mongoose.model("Request", RequestSchema);
module.exports = Request;