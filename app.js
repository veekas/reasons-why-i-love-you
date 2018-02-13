// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

process.env.DEBUG = 'actions-on-google:*';
let Assistant = require('actions-on-google').ApiAiAssistant;
let express = require('express');
let bodyParser = require('body-parser');
let reasonsWhy = require('./reasons-why.json');

let app = express();
app.use(bodyParser.json({
  type: 'application/json'
}));

// [START Action]
app.post('/', function (req, res) {
  const assistant = new Assistant({
    request: req,
    response: res
  });
  console.log('Request received: ' + JSON.stringify(req.body));

  // Fulfill action logic
  function responseHandler(assistant) {
    if (Math.random() >= 0.5)
      assistant.tell('Daddy!');
    else
      assistant.tell('Chips!');
  }

  assistant.handleRequest(responseHandler);
});
// [END Action]

// Renders the homepage
app.get('/', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<html><head><title>Google Home Agent</title></head><body><h1>Google Home Agent Example</h1><div><p>Ah, the age-old question - which is better, Daddy or Chips? Google Home will tell you. Type or ask "daddy or chips?"</p><iframe width="350" height="430" src="https://console.api.ai/api-client/demo/embedded/62da6a94-0ac9-4640-bd99-bc456c58064b"></iframe></div><script src="https://button.glitch.me/button.js" data-style="glitch"></script><div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div></body></html>');
  res.end();
});

if (module === require.main) {
  // [START server]
  // Start the server
  let server = app.listen(process.env.PORT || 3000, function () {
    let port = server.address().port;
    console.log('App listening on port %s', port);
  });
  // [END server]
}

module.exports = app;
