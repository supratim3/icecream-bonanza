const request = require('request');
const businessInfooptions = {
    url: 'https://api.yelp.com/v3/businesses/search?term=icecream&location=atlanta&sort_by=rating&limit=5',
    headers: {
      'Authorization': 'Bearer Y8s6dW3uAs-TZ34YRekghk7llJxJuj3JjNAcLtADi-OZ02Dl66_soagZHv-eTyQFHC8fGWfxblXrZxyW3msB1GARItcv2KG0qhzgowweVi4qxdw3fijzXeIyKKd2XXYx'
    }
  };
// Returns a promise with the Business Search Details   
function requestBusinessInfo(businessInfooptions){
    return new Promise(function(resolve, reject){
        request(businessInfooptions, function (error, response, body) {  //Error first call back
            // Handle Error if occurs
            if (error || response.statusCode !=200) reject(error);
            try {
                resolve(JSON.parse(body));
            } catch(e) {
                reject(e);
            }
        });
    });
}
//Below function prints the output required for this challenge. TODO: move to a template/view later.
function requestReviewInfoandPrintOutput(businesses){
    console.log(`Top 5 Atlanta Ice Cream Parlors are \n`); //Get ready for the output
    businesses.forEach(element => {
        getReviewInfoById(element.id).then(reviewerData => { //Below console log prints the required output in the program.
            console.log(`Business Name:  ${element.name}`);
            console.log(`Address:  ${element.location.address1}  ${element.location.city}`);
            console.log(`Review: ${reviewerData.reviewText}`);
            console.log(`Reviewer: ${reviewerData.reviewer} \n\n\n`);
        }).catch(err => console.log(`You are not having icecream today!! ${err}`));        
    });
}
// This makes calls to the review Yelp API to fetch reviewer and review excerpt
function getReviewInfoById(id){
    return new Promise(function(resolve, reject){ 
        const revOptions = {
            url: 'https://api.yelp.com/v3/businesses/'+ id + '/reviews',
            headers: {'Authorization': 'Bearer Y8s6dW3uAs-TZ34YRekghk7llJxJuj3JjNAcLtADi-OZ02Dl66_soagZHv-eTyQFHC8fGWfxblXrZxyW3msB1GARItcv2KG0qhzgowweVi4qxdw3fijzXeIyKKd2XXYx'
            }
        };
        request(revOptions, function (error, response, body) {
            // in addition to parsing the value, deal with possible errors
            if (error || response.statusCode !=200) reject(error);
            try {
                const data = JSON.parse(body);
            //Just send One reviewer data as excerpt as per requirement
                resolve({"id" : id, "reviewText" : data.reviews[0].text, "reviewer" :  data.reviews[0].user.name });
            } catch(e) {
                reject(e);
            }
        });
    });  
}
module.exports = async function callYelp(businessInfooptions){
    try{
        const busniessDtlResponse = await requestBusinessInfo(businessInfooptions); //Get Top 5 rated Ice-Cream businesses from ATL
        requestReviewInfoandPrintOutput(busniessDtlResponse.businesses); //Get review and Print Output
    } catch(err){
        console.log(`You are not having icecream today!! ${err}`);
    }
}
//callYelp(businessInfooptions);