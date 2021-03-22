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
        return res.redirect("back");
      }
      return res.redirect("back");
    }
  );
};

module.exports.delete = function (req, res) {
  Work.findById(req.params.id, function (err, wok) {
    if (err) {
      console.log("error in deleting");
      return res.redirect("back");
    } else {
      wok.remove();
    }
    return res.redirect("back");
  });
};
