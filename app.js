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
let { reasons, person } = require('./vars.js');

let app = express();
app.use(bodyParser.json({ type: 'application/json' }));

// ACTION LOGIC
app.post('/', function (req, res) {
  const assistant = new Assistant({
    request: req,
    response: res
  });
  console.log('Request received: ' + JSON.stringify(req.body));

  function getRandomReason() {
    return Math.floor(Math.random() * reasons.length);
  }

  function responseHandler(assistant) {
    let randomReason = getRandomReason();
    assistant.tell(randomReason);
  }

  assistant.handleRequest(responseHandler);
});


// Renders the homepage
app.get('/', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<html><head><title>Reasons Why They Love Me</title></head><body><h1>RWTLM Demo</h1><div><p>Curious why "Person" loves you? Ask "Why does Person love me?"</p><iframe width="350" height="430" src="https://console.api.ai/api-client/demo/embedded/62da6a94-0ac9-4640-bd99-bc456c58064b"></iframe></div><script src="https://button.glitch.me/button.js" data-style="glitch"></script><div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div></body></html>');
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
