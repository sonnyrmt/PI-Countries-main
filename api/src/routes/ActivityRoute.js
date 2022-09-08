const { Router } = require("express");
const router = Router();
const { Activity, Country } = require('../db.js');

router.post('/', async (req,res) => {
  const { countries , name , difficulty, duration, season} = req.body;

  const posts = await Promise.all(
    countries.map( async (code) => {
      return await Country.findByPk(code, {
        include: Activity
      })
    })
  );

  const promises = posts.map( p => p.createActivity({name,difficulty,duration,season}));
  await Promise.all(promises);

  res.json(`Activity created and associated to countries`);
});

module.exports = router;
