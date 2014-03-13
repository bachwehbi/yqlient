var yqlient = require('../lib/yqlient');
var yql = yqlient.initYQL();
yql.query('select Symbol, Ask from yahoo.finance.quotes where symbol in ("YHOO","AAPL","GOOG","MSFT")', function(err, data) {
  if(err) console.log(err);
  else console.log(JSON.stringify(data));
});
