// const https = require('https');
// // prepare the header
// const headers = {
//     'Authorization' : 'Bearer Y8s6dW3uAs-TZ34YRekghk7llJxJuj3JjNAcLtADi-OZ02Dl66_soagZHv-eTyQFHC8fGWfxblXrZxyW3msB1GARItcv2KG0qhzgowweVi4qxdw3fijzXeIyKKd2XXYx'
// };
// // Set options for search Business 
// const options = {
//     host : 'api.yelp.com', 
//     port : 443,
//     path : '/v3/businesses/search?term=icecream&location=atlanta&sort_by=rating&limit=5', // the rest of the url with parameters if needed
//     method : 'GET',
//     headers
// };
// // do the GET request
// const searchReq = https.request(options, function(res) {
//     console.log("statusCode: ", res.statusCode);
//     res.on('data', function(d) {
//         console.info('POST result:\n');
//         process.stdout.write(d);
//         // getReviewSDetails(d.jsonBody.businesses[0].id);
//         // all API to get review comments by 
        
//     });
//     res.on('end', (d) => {
//         console.log(JSON.parse(d.toString()));
//         console.info('\n\nrequest completed');
//       });    
// });

// searchReq.end();
// searchReq.on('error', function(e) {
//     console.error(e);
// });

// // function getReviewSDetails(id){
// //     // Set options for search Business 
// //     const options = {
// //         method : 'GET',
// //         headers
// //     };
// //     const url = 'https://api.yelp.com/v3/businesses/'+ id + '/reviews';
// //     const searchReviews = https.request(options, function(res) {
// //         console.log("statusCode: ", res.statusCode);
// //         res.on('data', function(d) {
// //             console.info('POST result:\n');
// //             process.stdout.write(d);
// //             console.info('\n\nrequest completed');
// //         });
// //     });
// //     searchReviews.end();
// //     searchReviews.on('error', function(e) {
// //     console.error(e);
// // });

// // }
 
 