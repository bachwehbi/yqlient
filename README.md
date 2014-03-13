yqlient
=======

Simple nodejs connector for Yahoo Query Language (YQL)

## Installation

  npm install yqlient

## Usage

Using yqlient is simple; this is how: 
	
```javascript
var yqlient = require('yqlient');

var yql = yqlient.initYQL();

yql.query('select Symbol, Ask from yahoo.finance.quotes where symbol in ("YHOO","AAPL","GOOG","MSFT")', function(err, data) {
  if(err) console.log(err);
  else console.log(data);
});
```

## Author

Bachar Wehbi, me@bachwehbi.net

## License

[The MIT License](http://opensource.org/licenses/MIT)
