var express = require('express');
var router = express.Router();

router.get('/:date?', function(req, res, next) {
  let finalDate = {};
  let paramDate = req.params.date;
  let tempDate;
  if (paramDate == undefined) {
    tempDate = new Date()
  } else if (paramDate.indexOf('-') == -1) {
    tempDate = new Date(parseInt(paramDate))
  } else {
    tempDate = new Date(paramDate)
  }
  finalDate.unix = tempDate.getTime()
  finalDate.utc = tempDate.toUTCString()
  res.json(finalDate);
});

module.exports = router;
