const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index.html', { title: 'InversionesBryan,S.A.'});
});

router.get('/contacto', (req, res) => {
	res.render('contacto.html', { title: 'Contacto'});
});

router.get('/galeria1', (req, res) => {
	res.render('galeria1.html', { title: 'Galeria'});
});

module.exports = router;

