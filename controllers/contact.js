const contactModel = require("../models/contact.model");

module.exports.getAllContact = async (req, res) => {
  try {
    console.log("START: Contact Controller");
    const data = await contactModel.find({});
    console.log(data);
    return res.send({
      message: "Successfully Fetched All Contacts!",
      success: true,
      data: data || [],
    });
  } catch (error) {
    console.error(error.message);
    return res.send({
      message: error.message,
      success: false,
    });
  }
};

module.exports.createContact = async (req, res) => {
  try {
    console.log("START:Create Contact Controller");
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.number ||
      !req.body.msg
    ) {
      throw new Error("require parameters");
    }
    const payload = {
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      msg: req.body.msg,
    };
    const data = await contactModel.create(payload);
    console.log(data);
    return res.send({
      message: "Successfully Contact Submitted!",
      success: true,
      data: data || [],
    });
  } catch (error) {
    console.error(error.message);
    return res.send({
      message: error.message,
      success: false,
    });
  }
};