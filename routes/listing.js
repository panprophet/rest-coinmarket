var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const rp = require('request-promise');
  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'sort': req.query.sort,
      'sort_dir': 'desc',
      'start': req.query.start,
      'limit': req.query.limit,
      'convert': 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': '2e8a7af8-4565-4b89-ae14-4086449c9da8'
    },
    json: true,
    gzip: true
  };
  rp(requestOptions).then(response => {
    res.send(response);
  }).catch((err) => {
    console.log('API call error:', err.message);
  });
});

module.exports = router;
