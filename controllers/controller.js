const Assistant = require("../models/model.js");

const CreateAssistant = async (req, res) => {
  try {
    const { name, mobile, email, salary, city, country, department, role } =
      req.body;

    const assistant = new Assistant({
      name,
      mobile,
      email,
      salary,
      city,
      country,
      department,
      role,
    });
    await assistant.save();
    res.status(200).json(assistant);
  } catch (error) {
    console.log(error);
  }
};

const GetAll = async (req, res) => {
  try {
    const assistants = await Assistant.find();
    res.status(200).json(assistants);
  } catch (error) {
    console.log(error);
  }
};

const GetAssistant = async (req, res) => {
  try {
    const { id } = req.params;
    const assistant = await Assistant.findById(id);
    res.status(200).json(assistant);
  } catch (error) {
    console.log(error);
  }
};

const UpdateAssistant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, mobile, email, salary, city, country, department, role } =
      req.body;
    const assistant = await Assistant.findByIdAndUpdate(
      id,
      { name, mobile, email, salary, city, country, department, role },
      { new: true }
    );
    res.status(200).json(assistant);
  } catch (error) {
    console.log(error);
  }
};

const DeleteAssistant = async (req, res) => {
  try {
    const { id } = req.params;
    await Assistant.findByIdAndDelete(id);
    res.status(200).json({ message: "Assistant deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  CreateAssistant,
  GetAll,
  GetAssistant,
  UpdateAssistant,
  DeleteAssistant,
};
