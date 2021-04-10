const request = require("request");


const geocode = (address, callback) => {
  const url =
  "http://api.weatherstack.com/current?access_key=0384d5400a2f8796d8551046bdfd2e8d&query="+address;
  request(url, function (error, response) {
    if (error) {
      callback(error, undefined);
    }
   if(response)
   {

    callback(undefined, response.body);
   }
  });
};

module.exports = geocode;
