// /* MAKAAN GURGAON LISTING
// */

const express = require('express');
	http = require('http');
	bodyParser = require('body-parser');
    cookieParser = require('cookie-parser');
    path = require('path');
    var request = require('request');

    fs = require('fs');


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

let v='';
let r='';
let o='';
let t='';
let th='';
let f='';
url1='https://www.makaan.com/petra/app/v4/listing?selector={"fields":["localityId","displayDate","listing","property","project","builder","displayName","locality","suburb","city","state","currentListingPrice","companySeller","company","user","id","name","label","listingId","propertyId","projectId","propertyTitle","unitTypeId","resaleURL","description","postedDate","verificationDate","size","measure","bedrooms","bathrooms","listingLatitude","listingLongitude","studyRoom","servantRoom","pricePerUnitArea","price","localityAvgPrice","negotiable","rk","buyUrl","rentUrl","overviewUrl","minConstructionCompletionDate","maxConstructionCompletionDate","halls","facingId","noOfOpenSides","bookingAmount","securityDeposit","ownershipTypeId","furnished","constructionStatusId","tenantTypes","bedrooms","balcony","floor","totalFloors","listingCategory","possessionDate","activeStatus","type","logo","profilePictureURL","score","assist","contactNumbers","contactNumber","isOffered","mainImageURL","mainImage","absolutePath","altText","title","imageCount","geoDistance","defaultImageId","updatedAt","qualityScore","projectStatus","throughCampaign","addedByPromoter","listingDebugInfo","videos","imageUrl","rk","penthouse","studio","paidLeadCount","listingSellerTransactionStatuses","allocation","allocationHistory","masterAllocationStatus","status","sellerCompanyFeedbackCount","companyStateReraRegistrationId"],';
url2='"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"listingCategory":["Rental"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';
url='https://www.makaan.com/petra/app/v4/listing?selector={"fields":["localityId","displayDate","listing","property","project","builder","displayName","locality","suburb","city","state","currentListingPrice","companySeller","company","user","id","name","label","listingId","propertyId","projectId","propertyTitle","unitTypeId","resaleURL","description","postedDate","verificationDate","size","measure","bedrooms","bathrooms","listingLatitude","listingLongitude","studyRoom","servantRoom","pricePerUnitArea","price","localityAvgPrice","negotiable","rk","buyUrl","rentUrl","overviewUrl","minConstructionCompletionDate","maxConstructionCompletionDate","halls","facingId","noOfOpenSides","bookingAmount","securityDeposit","ownershipTypeId","furnished","constructionStatusId","tenantTypes","bedrooms","balcony","floor","totalFloors","listingCategory","possessionDate","activeStatus","type","logo","profilePictureURL","score","assist","contactNumbers","contactNumber","isOffered","mainImageURL","mainImage","absolutePath","altText","title","imageCount","geoDistance","defaultImageId","updatedAt","qualityScore","projectStatus","throughCampaign","addedByPromoter","listingDebugInfo","videos","imageUrl","rk","penthouse","studio","paidLeadCount","listingSellerTransactionStatuses","allocation","allocationHistory","masterAllocationStatus","status","sellerCompanyFeedbackCount","companyStateReraRegistrationId"],"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"listingCategory":["Primary","Resale"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';
request(url,function(err,response,body){
    v=JSON.parse(body);
});

request(url1+url2,function(err,response,body){
    r=JSON.parse(body);
});
url2='"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"bedrooms":1}},{"equal":{"listingCategory":["Primary","Resale"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';

request(url1+url2,function(err,response,body){
    o=JSON.parse(body);
});
url2='"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"bedrooms":2}},{"equal":{"listingCategory":["Primary","Resale"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';

request(url1+url2,function(err,response,body){
    t=JSON.parse(body);
});
url2='"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"bedrooms":3}},{"equal":{"listingCategory":["Primary","Resale"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';

request(url1+url2,function(err,response,body){
    th=JSON.parse(body);
});
url2='"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"bedrooms":4}},{"equal":{"bedrooms":5}},{"equal":{"bedrooms":6}},{"equal":{"bedrooms":7}},{"equal":{"listingCategory":["Primary","Resale"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';

request(url1+url2,function(err,response,body){
    f=JSON.parse(body);
});




// // Setup api routes
app.get('/', gotError, function(req, res) {

    res.render(('index.ejs'),{info: v.data[0].facetedResponse.items});
});

app.get('/rent', gotError, function(req, res) {
    res.render(('index.ejs'),{info: r.data[0].facetedResponse.items});
});
app.get('/1bhk', gotError, function(req, res) {
    res.render(('index.ejs'),{info: o.data[0].facetedResponse.items});
});
app.get('/2bhk', gotError, function(req, res) {
    res.render(('index.ejs'),{info: t.data[0].facetedResponse.items});
});
app.get('/3bhk', gotError, function(req, res) {
   res.render(('index.ejs'),{info: th.data[0].facetedResponse.items}); 
});
app.get('/4bhk', gotError,function(req, res) {
    res.render(('index.ejs'),{info: f.data[0].facetedResponse.items});
});
url2='"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"bedrooms":1}},{"equal":{"listingCategory":["Rental"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';

request(url1+url2,function(err,response,body){
    or=JSON.parse(body);
});
url2='"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"bedrooms":2}},{"equal":{"listingCategory":["Rental"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';

request(url1+url2,function(err,response,body){
    tr=JSON.parse(body);
});
url2='"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"bedrooms":3}},{"equal":{"listingCategory":["Rental"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';

request(url1+url2,function(err,response,body){
    thr=JSON.parse(body);
});

url2='"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"bedrooms":4}},{"equal":{"bedrooms":5}},{"equal":{"bedrooms":6}},{"equal":{"bedrooms":7}},{"equal":{"listingCategory":["Rental"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';

request(url1+url2,function(err,response,body){
    fr=JSON.parse(body);
});



app.get('/rent/1bhk', gotError, function(req, res) {
    res.render(('index.ejs'),{info: or.data[0].facetedResponse.items});
});
app.get('/rent/2bhk', gotError, function(req, res) {
    res.render(('index.ejs'),{info: tr.data[0].facetedResponse.items});
});
app.get('/rent/3bhk', gotError, function(req, res) {
    res.render(('index.ejs'),{info: thr.data[0].facetedResponse.items});
});
app.get('/rent/4bhk', gotError, function(req, res) {
    res.render(('index.ejs'),{info: fr.data[0].facetedResponse.items});
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