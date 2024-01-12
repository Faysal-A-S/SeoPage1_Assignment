import Status from "../models/StatusModel.js";

export const addStatus = async (req, res) => {
  const { clients, name } = req.body;

  try {
    const newStatus = await Status({
      clients,
      name,
      Count: clients.length,
    });
    await newStatus.save();
    res.send({ message: "Status added" });
  } catch (err) {
    res.send({ message: err });
  }
};
export const getStatus = async (req, res) => {
  try {
    let statusList = await Status.find({}, { name: 1 });
    return res.status(200).json({ message: statusList });
  } catch (error) {
    return res.status(304).json({ message: error.message });
  }
};
