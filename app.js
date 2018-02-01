const express = require('express');
	http = require('http');
	bodyParser = require('body-parser');
    cookieParser = require('cookie-parser');
    path = require('path');
    var request = require('request');

   
var urlparse = require('url');


var fetch = require('node-fetch');
const fetchJson = require('node-fetch-json');

// // Creating new express app
var app = express();

// // Setting the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// // Adding static path
app.use(express.static(path.join(__dirname, '/public')));

// // Parsing body and cookies
app.use(bodyParser.json({ limit: '100mb' }));
app.use(cookieParser());


//url='https://www.makaan.com/petra/app/v4/listing?selector={"fields":["localityId","displayDate","listing","property","project","builder","displayName","locality","suburb","city","state","currentListingPrice","companySeller","company","user","id","name","label","listingId","propertyId","projectId","propertyTitle","unitTypeId","resaleURL","description","postedDate","verificationDate","size","measure","bedrooms","bathrooms","listingLatitude","listingLongitude","studyRoom","servantRoom","pricePerUnitArea","price","localityAvgPrice","negotiable","rk","buyUrl","rentUrl","overviewUrl","minConstructionCompletionDate","maxConstructionCompletionDate","halls","facingId","noOfOpenSides","bookingAmount","securityDeposit","ownershipTypeId","furnished","constructionStatusId","tenantTypes","bedrooms","balcony","floor","totalFloors","listingCategory","possessionDate","activeStatus","type","logo","profilePictureURL","score","assist","contactNumbers","contactNumber","isOffered","mainImageURL","mainImage","absolutePath","altText","title","imageCount","geoDistance","defaultImageId","updatedAt","qualityScore","projectStatus","throughCampaign","addedByPromoter","listingDebugInfo","videos","imageUrl","rk","penthouse","studio","paidLeadCount","listingSellerTransactionStatuses","allocation","allocationHistory","masterAllocationStatus","status","sellerCompanyFeedbackCount","companyStateReraRegistrationId"],"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"listingCategory":["Primary","Resale"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';
//let v='';

app.get('/', gotError, function(req, res) {
	var adr = req.url;
	let jsonData = urlparse.parse(adr, true).query;
    var bedroom = '';
	let firstUrl = 'https://www.makaan.com/petra/app/v4/listing?';
	let midUrl = 'selector={"fields":["localityId","displayDate","listing","property","project","builder","displayName","locality","suburb","city","state","currentListingPrice","companySeller","company","user","id","name","label","listingId","propertyId","projectId","propertyTitle","unitTypeId","resaleURL","description","postedDate","verificationDate","size","measure","bedrooms","bathrooms","listingLatitude","listingLongitude","studyRoom","servantRoom","pricePerUnitArea","price","localityAvgPrice","negotiable","rk","buyUrl","rentUrl","overviewUrl","minConstructionCompletionDate","maxConstructionCompletionDate","halls","facingId","noOfOpenSides","bookingAmount","securityDeposit","ownershipTypeId","furnished","constructionStatusId","tenantTypes","bedrooms","balcony","floor","totalFloors","listingCategory","possessionDate","activeStatus","type","logo","profilePictureURL","score","assist","contactNumbers","contactNumber","isOffered","mainImageURL","mainImage","absolutePath","altText","title","imageCount","geoDistance","defaultImageId","updatedAt","qualityScore","projectStatus","throughCampaign","addedByPromoter","listingDebugInfo","videos","imageUrl","rk","penthouse","studio","paidLeadCount","listingSellerTransactionStatuses","allocation","allocationHistory","masterAllocationStatus","status","sellerCompanyFeedbackCount","companyStateReraRegistrationId"],';
	var rent = ',{"equal":{"listingCategory":["Primary","Resale"]}}';
    
    var sort='';
    if(jsonData.listingType){
            rent =  ',{"equal":{"listingCategory":["Rental"]}}'; }

    if(jsonData.bhk){
        	if(jsonData.bhk!=4)
            	bedroom = ',{"equal":{"bedrooms":'+ jsonData.bhk +'}}';
        	else
        		bedroom = ',{"equal":{"bedrooms":[4, 5, 6, 7, 8, 9]}}';
		}
    var city ='{"and":[{"equal":{"cityId":11}}';
    if(jsonData.cityid==18)
        city='{"and":[{"equal":{"cityId":18}}';
    
    if(jsonData.sort){
            sort = ' ,"sort":[{"field":"price","sortOrder":"' + jsonData.sort + '"}]';
        }

    let midUrl2 = '"filters":'+ city + rent + bedroom+']}' + ',"paging":{"start":0,"rows":20}'+sort+'}';
	let lastUrl='&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';
        
        
    finalUrl = firstUrl+midUrl+midUrl2+lastUrl;  

    request(finalUrl,function(err,response,body){
    	//console.log(finalUrl);
    v=JSON.parse(body);
    res.render(('index.ejs'),{info: v.data[0]});
	});
});

function gotError(err, req, res, next) {
    console.log("error", err);
    // next();
    next(err);
}

// // Error handler
app.use(function(err, req, res, next) {
    console.log("ERROR OCCURRED !!", err);
    //next(err);
    next("Some error occurred");
});

var server = http.createServer(app).listen(8000, function() {
    console.log('info', 'Express server listening on port ' + 8000);
});