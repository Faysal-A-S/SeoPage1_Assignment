import Status from "../models/StatusModel.js";
import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  const { description, name, duration } = req.body;

  try {
    const newUser = await User({
      description,
      name,
      duration,
    });
    await newUser.save();
    res.send({ message: "User added" });
  } catch (err) {
    res.send({ message: err });
  }
};
export const updateUser = async (req, res) => {
  let fileList = [];
  req.files.map((data) => {
    fileList.push(data.filename);
  });
  try {
    const nonUpdUser = await User.find(
      { _id: req.params.id },
      { attachments: 1 }
    );
    let attachment = [...nonUpdUser[0].attachments];

    fileList = [...fileList, ...attachment];
    await User.findByIdAndUpdate(req.params.id, {
      attachments: fileList,
    });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getUserBySatus = async (req, res) => {
  try {
    let users = await User.find({});
    return res.status(200).json({ message: users });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
