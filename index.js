'use strict'

const express =require('express')
const bodyParser = require('body-parser')
const require = require('require')

const app = epress()

app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/' function(req, res) {
	res.send("Hi I am a chatbot")
})

//Facebook
app.get('/webhook/', function(req, res) {
	if (req.query['hub.verify_token'] === "patra") {
		res..send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})

app.listen(app.get('port'), function() {
	console.log("running: port")
})