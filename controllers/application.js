const applicationModel = require("../models/application.model");

module.exports.getAllApplication = async (req, res) => {
  try {
    console.log("START: Application Controller");
    const data = await applicationModel.find({});
    console.log(data);
    return res.send({
      message: "Successfully Fetched All applications!",
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

module.exports.createApplication = async (req, res) => {
  try {
    console.log("START:Create Application Controller");
    if (
      !req.body.fullname ||
      !req.body.email ||
      !req.body.number ||
      !req.body.whatsapp ||
      !req.body.city ||
      !req.body.qualification ||
      !req.body.college ||
      !req.body.board ||
      !req.body.neet ||
      !req.body.course ||
      !req.body.country ||
      !req.body.university
    ) {
      throw new Error("require parameters");
    }
    const payload = {
      fullname: req.body.fullname,
      email: req.body.email,
      number: req.body.number,
      whatsapp:req.body.whatsapp,
      city:req.body.city,
      qualification:req.body.qualification,
      college:req.body.college,
      board:req.body.board,
      neet:req.body.neet,
      course: req.body.course,
      country: req.body.country,
      university: req.body.university,
    };
    const data = await applicationModel.create(payload);
    console.log(data);
    return res.send({
      message: "Successfully Application Submitted!",
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
