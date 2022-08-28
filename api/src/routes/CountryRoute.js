const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../db.js");

router.get("/", async (req, res) => {
  let { name } = req.query;

  try {
    if (name) {
      const countryByName = await Country.findAll({
        where: { name: name.toLowerCase() }
      });

      countryByName.length
        ? res.status(200).json(countryByName)
        : res.status(400).json({msg: `${name} does not exist`})

    } else {
      const allCountries = await Country.findAll({
        include: [Activity]
      });
      res.status(200).json(allCountries);
    }
  } catch (error) {
    res.status(404).json({msg: 'Not found'});
  }
});

router.get("/:countryID", async (req, res) => {
  const { countryID } = req.params;
  try {
    const countryByID = await Country.findByPk(countryID.toUpperCase());
    
    res.status(200).json(countryByID)
  } catch (error) {
    res.status(400).json({msg: countryID})
  }

});

module.exports = router;
