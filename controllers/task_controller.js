const Work = require("../models/work");

module.exports.create = function (req, res) {
  Work.create(
    {
      content: req.body.content,
      user: req.user._id,
      category: req.body.category,
      date: req.body.date,
    },
    function (err, work) {
      if (err) {
        console.log("error in creating a task in database");
        return;
      }
      return res.redirect("back");
    }
  );
};
