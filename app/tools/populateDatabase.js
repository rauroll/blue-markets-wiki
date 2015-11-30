var Industry = require('../models/industry.js');
var industryJson = require('../assets/industries.json');
var mongoose = require('mongoose');

var db = require('../../config/db');

mongoose.connect(db.url);

console.log("Writing industries to the database...");


var ind = industryJson.industries;
var level = 0;
var parentCodes = [];

for (var i = 0; i < ind.length; i++) {
	checkSubIndustries(ind[i]);
}

function checkSubIndustries(industry) {
	level++;

	var industryObject = new Industry({
		code: industry.code,
		name: industry.name,
		level: level,
		subindustryCodes: industry.subindustry.map(x => x.code),
		parentindustryCodes: parentCodes
	});



	// Remove the comments here to enable saving to database
	// =============================================

	industryObject.save(function (err) {
		if (err) return handleError(err);
	});
	
	parentCodes.push(industry.code);
	industry.subindustry.forEach(function(sub) {
		checkSubIndustries(sub);
	});
	parentCodes.pop();


	level--;

}

console.log("Database populated.");

mongoose.disconnect();

