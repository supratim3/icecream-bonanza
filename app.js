const yelp = require('./yelp');
const express = require('express');
const app = express();
const headers = {
    'Authorization': 'Bearer Y8s6dW3uAs-TZ34YRekghk7llJxJuj3JjNAcLtADi-OZ02Dl66_soagZHv-eTyQFHC8fGWfxblXrZxyW3msB1GARItcv2KG0qhzgowweVi4qxdw3fijzXeIyKKd2XXYx'
  };
const businessInfooptions = {
    url: 'https://api.yelp.com/v3/businesses/search?term=icecream&location=atlanta&sort_by=rating&limit=5',
    headers
};
app.set('view engine','ejs');
app.get('/', (req, res) => {
    yelp(businessInfooptions).then( response => res.render('index'));
    
});
app.listen(3000, () => console.log('Server Started'));
