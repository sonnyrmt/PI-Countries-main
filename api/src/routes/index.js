const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRoute = require('./CountryRoute');
const activityRoute = require('./ActivityRoute')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/countries', countryRoute);
router.use('/activities', activityRoute);

module.exports = router;
