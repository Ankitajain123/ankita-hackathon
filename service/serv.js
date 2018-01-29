/* Servicing Main Page */
var cardData = require("../data.json");
var rentData = require("../rData.json");
var oneData = require("../oneData.json");
var twoData = require("../twoData.json");
var threeData = require("../threeData.json");
var fourData = require("../fourData.json");

cardData = cardData.data[0].facetedResponse.items;
rentData = rentData.data[0].facetedResponse.items
oneData = oneData.data[0].facetedResponse.items;
twoData = twoData.data[0].facetedResponse.items;
threeData = threeData.data[0].facetedResponse.items;
fourData = fourData.data[0].facetedResponse.items;



url1='https://www.makaan.com/petra/app/v4/listing?selector={"fields":["localityId","displayDate","listing","property","project","builder","displayName","locality","suburb","city","state","currentListingPrice","companySeller","company","user","id","name","label","listingId","propertyId","projectId","propertyTitle","unitTypeId","resaleURL","description","postedDate","verificationDate","size","measure","bedrooms","bathrooms","listingLatitude","listingLongitude","studyRoom","servantRoom","pricePerUnitArea","price","localityAvgPrice","negotiable","rk","buyUrl","rentUrl","overviewUrl","minConstructionCompletionDate","maxConstructionCompletionDate","halls","facingId","noOfOpenSides","bookingAmount","securityDeposit","ownershipTypeId","furnished","constructionStatusId","tenantTypes","bedrooms","balcony","floor","totalFloors","listingCategory","possessionDate","activeStatus","type","logo","profilePictureURL","score","assist","contactNumbers","contactNumber","isOffered","mainImageURL","mainImage","absolutePath","altText","title","imageCount","geoDistance","defaultImageId","updatedAt","qualityScore","projectStatus","throughCampaign","addedByPromoter","listingDebugInfo","videos","imageUrl","rk","penthouse","studio","paidLeadCount","listingSellerTransactionStatuses","allocation","allocationHistory","masterAllocationStatus","status","sellerCompanyFeedbackCount","companyStateReraRegistrationId"],';
url2='"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"listingCategory":["Rental"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';


module.exports.getData = function(req, res) {
	res.render(('index.ejs'),{
        info : cardData
    })
};

module.exports.getRentData = function(req, res) {
	res.render(('index.ejs'),{
        info : rentData
    })
};

module.exports.getOneBData = function(req, res) {
	res.render(('index.ejs'),{
        info : oneData
    })
};
module.exports.getTwoBData = function(req, res) {
	res.render(('index.ejs'),{
        info : twoData
    })
};
module.exports.getThreeBData = function(req, res) {
	res.render(('index.ejs'),{
        info : threeData
    })
};
module.exports.getFourBData = function(req, res) {
	res.render(('index.ejs'),{
        info : fourData
    })
};









