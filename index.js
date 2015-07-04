/* @flow */

// init required dependencies
var fs = require("fs")
var jade = require("jade")
var express = require("express")
var CronJob = require('cron').CronJob

module.exports = function(){
	// init express object, which we will return later
	var app = express()
	var render = jade.compileFile(__dirname + "/views/index.jade")

	app.locals.title = "Default"

	// init config object
	app.locals.config = {
		url: {
			label: 'URL',
			value: '',
			setValue: function(v){
				this.value = v
			},
			type: 'text',
			isValid: function(value){
				return null
			}
		},
		title: {
			label: 'Title',
			value: '',
			setValue: function(v){
				this.value = v
			},
			type: 'text',
			isValid: function(value){
				return null
			}
		},
		description: {
			label: 'Description',
			value: '',
			setValue: function(v){
				this.value = v
			},
			type: 'text',
			isValid: function(value){
				return null
			}
		}
	}

	/*
	// setup express url handlers for contents like images, if needed
	app.use("/public", express.static(__dirname + "/public", {
		maxAge: "7d"
	}))
	*/

	/*
	// Optional function configId, to return a string, which describes the plugin config
	app.locals.configId = function(){
		return app.locals.config.url.value
	}
	*/

	// this function provides the HTML code, which one will be displayed to the user
	app.html = function() {
		return render( app.locals )
	}

	// here we can return LESS css, which will only effect the plugin HTML code
	app.less = function(){
		return fs.readFileSync(__dirname + "/stylesheets/style.less").toString()
	}


	/*
	new CronJob('0 31 * * * *',
		app.generate,
		null,
		true
	)
	*/


	return app
}
