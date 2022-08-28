const { Router } = require("express");
const router = Router();
const { Activity, Country } = require('../db.js');

router.post('/', async (req,res) => {
  const { countryCode , name , difficulty, duration, season} = req.body;
  const country = await Country.findByPk(countryCode, {
    include: Activity
  });

  const exist = country.Activities.filter( a => a.name === name);

  if(exist.length) {
    return res.json('Ya existe la actividad para ese pais')
  }

  await country.createActivity({name, difficulty,duration,season});
  res.json(`Activity created and associated to ${countryCode}`);
});

module.exports = router;
