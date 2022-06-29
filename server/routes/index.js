var express = require('express')
const { adminCollection } = require('../db')
var router = express.Router()

/* GET home page. */
router.get('/', async function (req, res) {
	let admins = []
	await adminCollection.find({}).forEach((element) => {
		admins.push(element)
	})
	res.status(200).send({ admins })
})

module.exports = router
