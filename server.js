var express = require('express');
var twitter = require('ntwitter');

var app = express();

var twit = new twitter({
  consumer_key: 'a0Ht5Ndr1dOFdotF05PF1Fiy4',
  consumer_secret: 'Vqtt3uCblSALJz9NvALKiTbBGnUAVodYFCtbrbqoKwXE2uACXj',
  access_token_key: '849137077056819201-4yqtdSQPTov7Q2wcfjEJjfNWjrmvXFH',
  access_token_secret: 'K5iK9c8Es8uP6raJD5VmlPx5Sz3VHmx5YuZsFvwQ8TtXW'
});



app.get('/', function(req, res) {    
    twit.search('nodejs OR #node', {}, function(err, data) {
      console.log(data);
      res.send(data);
    });
    
});

app.get('/ping', function(req, res) {
    console.log('ping-ed');
    res.send('pong');
});

var port = Number(process.env.PORT || 5001);
app.listen(port);
console.log('app listening on port: '+port);
