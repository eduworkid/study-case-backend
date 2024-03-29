const { subject } = require("@casl/ability");
const Invoice = require('./model');
const { policyFor } = require('../../utils');

const getInvoice = async (req, res, next) => {
  try {
    let policy = policyFor(req.user);
    let subjectInvoice = subject("Invoice", { user_id: invoice.user._id });
    if (!policy.can("read", subjectInvoice)) {
      return res.json({
        error: 1,
        message: "Anda tidak memiliki akses untuk melihat invoice ini.",
      });
    }
    let invoice = await Invoice.findOne({ order: order_id })
      .populate("order")
      .populate("user");
    return res.json(invoice);
  } catch (err) {
    return res.json({ error: 1, message: "Error when getting invoice." });
  }
};

const gettingInvoice = async (req, res, next) => {
  try {
    // let policy = policyFor(req.user);
    // let subjectInvoice = subject("Invoice", {
    //   ...invoice,
    //   user_id: invoice.user._id,
    // });
    // if (!policy.can("read", subjectInvoice)) {
    //   return res.json({
    //     error: 1,
    //     message: `Anda tidak memiliki akses untuk melihat invoice ini`,
    //   });
    // }
    let { order_id } = req.params;
    let invoice = await Invoice.findOne({ order: order_id })
      .populate("order")
      .populate("user");

    return res.json(invoice);
  } catch (err) {
    return res.json({
      error: 1,
      message: `Error when  getting invoice`,
    });
  }
};
module.exports = {
  getInvoice,
  gettingInvoice,
}; 
