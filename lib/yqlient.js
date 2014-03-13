var request = require('request');
var url = require('url');

YQL = {
  initYQL: function(opts) {return new YQL.Client(opts)},
};

YQL.Client = function(opts) {
  if(!opts) opts = {};
  var host = 'query.yahooapis.com',
    path = '/v1/public/yql',
    ssl = opts.ssl === true,
    env = opts.env || 'http://datatables.org/alltables.env',
    format = opts.format || 'json';

  qString = function(query) {
    return 'q=' + encodeURIComponent(query) + '&format=' + encodeURIComponent(format) + '&env=' + encodeURIComponent(env);  
  };

  buildURL = function(queryString) {
    var url = (ssl ? 'https' : 'http') + '://' + host + path + '?' + queryString;
    return url;
  };

  getRequestParameters = function(q) {
    var params = {
      url: url.parse(buildURL(qString(q))),
      json: format,
      method: 'GET', //this is always the case
    };
    return params;
  };
}

YQL.Client.prototype.query = function(q, callback) {
  if(!callback) {
    throw 'Error: Callback parameter is missing!';
  }

  if (!q) { 
    return callback(new Error("Error: YQL query is missing!"));
  }

  request(getRequestParameters(q), function(error, response, body) {
    if (!error) {
      callback(null, body);
    } else {
      callback(error);
    } 
  });
}

module.exports = YQL;
