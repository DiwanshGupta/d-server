const contact = require("../models/contact-model");
const User = require("../models/usermodel");

const getusers = async (req, res) => {
  try {
    const data = await User.find({}, { password: 0 });
    if (!data || data.length === 0) {
      return res.status(400).json({
        message: "No user Found and error happpen",
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
const getContact = async (req, res) => {
  try {
    const contactdata = await contact.find();
    if (!contactdata || contactdata.length === 0) {
      return res.status(404).json({
        message: "No Contact Found",
      });
    }
    return res.status(200).json(contactdata);
  } catch (error) {
    next(error);
  }
};
const getuserbyid = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await User.find({ _id: id }, { password: 0 });
    if (!data || data.length === 0) {
      return res.status(400).json({
        message: "No data Found and error happpen",
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateuser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const userdata = await User.updateOne(
      { _id: id },
      {
        $set: data,
      }
    );

    return res.status(200).json(userdata);
  } catch (error) {
    next(error);
  }
};

const deletmesg = async (req, res, next) => {
  try {
    const id = req.params.id;
    await contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteuser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getContact,
  getusers,
  deleteuser,
  updateuser,
  getuserbyid,
  deletmesg,
};
