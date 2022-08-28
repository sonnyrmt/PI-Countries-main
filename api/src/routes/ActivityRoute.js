const { Router } = require("express");
const router = Router();
const { Activity, Country } = require('../db.js');

router.post('/', async (req,res) => {
  const { id } = req.body;
  const activity = await Activity.create(req.body);
  res.json(activity);
});

module.exports = router;
