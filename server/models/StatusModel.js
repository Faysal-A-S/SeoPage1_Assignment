import mongoose from "mongoose";

const statusSchema = mongoose.Schema({
  clients: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  Count: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    required: true,
  },
});
const Status = mongoose.model("Status", statusSchema);
export default Status;
