var request = require('request');

let rbdata;

url1='https://www.makaan.com/petra/app/v4/listing?selector={"fields":["localityId","displayDate","listing","property","project","builder","displayName","locality","suburb","city","state","currentListingPrice","companySeller","company","user","id","name","label","listingId","propertyId","projectId","propertyTitle","unitTypeId","resaleURL","description","postedDate","verificationDate","size","measure","bedrooms","bathrooms","listingLatitude","listingLongitude","studyRoom","servantRoom","pricePerUnitArea","price","localityAvgPrice","negotiable","rk","buyUrl","rentUrl","overviewUrl","minConstructionCompletionDate","maxConstructionCompletionDate","halls","facingId","noOfOpenSides","bookingAmount","securityDeposit","ownershipTypeId","furnished","constructionStatusId","tenantTypes","bedrooms","balcony","floor","totalFloors","listingCategory","possessionDate","activeStatus","type","logo","profilePictureURL","score","assist","contactNumbers","contactNumber","isOffered","mainImageURL","mainImage","absolutePath","altText","title","imageCount","geoDistance","defaultImageId","updatedAt","qualityScore","projectStatus","throughCampaign","addedByPromoter","listingDebugInfo","videos","imageUrl","rk","penthouse","studio","paidLeadCount","listingSellerTransactionStatuses","allocation","allocationHistory","masterAllocationStatus","status","sellerCompanyFeedbackCount","companyStateReraRegistrationId"],';
url2='"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"bedrooms":1}},{"equal":{"listingCategory":["Rental"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';
url = url1+url2;

request(url,function(err,response,body){
	rbdata=body;
});

module.exports.getOneRData = function(req, res) {
	//request(url,function(err,response,body){rbdata=body;});
	res.render(('index.ejs'),{
        info : rbdata.data[0].facetedResponse.items
    })
};


request(url1+'"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"bedrooms":2}},{"equal":{"listingCategory":["Rental"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan',function(err,response,body){
	rbdata2=body;
});

module.exports.getTwoRData = function(req, res) {
	//request(url,function(err,response,body){rbdata=body;});
	res.render(('index.ejs'),{
        info : rbdata2.data[0].facetedResponse.items
    })
};


request(url1+'"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"bedrooms":3}},{"equal":{"listingCategory":["Rental"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan',function(err,response,body){
	rbdata3=body;
});

module.exports.getThreeRData = function(req, res) {
	//request(url,function(err,response,body){rbdata=body;});
	res.render(('index.ejs'),{
        info : rbdata3.data[0].facetedResponse.items
    })
};


request(url1+'"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"bedrooms":4}},{"equal":{"bedrooms":5}},{"equal":{"bedrooms":6}},{"equal":{"listingCategory":["Rental"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan',function(err,response,body){
	rbdata4=body;
});

module.exports.getFourRData = function(req, res) {
	//request(url,function(err,response,body){rbdata=body;});
	res.render(('index.ejs'),{
        info : rbdata4.data[0].facetedResponse.items
    })
};


