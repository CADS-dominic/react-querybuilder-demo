var express = require('express')
const { productCollection } = require('../db')
var router = express.Router()

router.get('/', async function (req, res) {
	let products = []
	await productCollection.find({}).forEach((element) => {
		products.push(element)
	})
	res.status(200).send({ products })
})

router.post('/', async (req, res) => {
	let results = []
	await productCollection.find(JSON.parse(req.body.query)).forEach((element) => results.push(element))
	res.status(200).send({ results })
})

module.exports = router
