// Creates the Bin Schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = Schema.Types;

const BinSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    requests: [
      {
        type: ObjectId,
        ref: 'Request',
      }
    ],
  },
  { timestamps: true }
);

BinSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Bin = mongoose.model("Bin", BinSchema);
module.exports = Bin;