'use strict';

var express = require('express'),
    app = express(),
    watson = require('watson-developer-cloud');
var watson = require('watson-developer-cloud');


var serverFilePath = '/resources/document_conversion/sample-docx.docx';
var fs = require('fs');

var document_conversion = watson.document_conversion({
  username: '1e6a548d-6da7-46fd-98c3-a62157fe62fa',
  password: 'qTSf27RYk3Gc',
  version: 'v1'
});

// convert a document
app.get('/documentconvert/html', function (req, res) {
document_conversion.convert({
  // (JSON) ANSWER_UNITS, NORMALIZED_HTML, or NORMALIZED_TEXT
  file: fs.createReadStream(__dirname + serverFilePath),
  conversion_target: document_conversion.conversion_target.NORMALIZED_HTML
}, function (err, response) {
  if (err) {
    res.send(err);
  } else {
   //s res.send("This is result of Document conversion service :");  
    res.send(response);
  }
});
});

app.get('/documentconvert/json', function (req, res) {
document_conversion.convert({
  // (JSON) ANSWER_UNITS, NORMALIZED_HTML, or NORMALIZED_TEXT
  file: fs.createReadStream(__dirname + serverFilePath),
  conversion_target: document_conversion.conversion_target.ANSWER_UNITS
}, function (err, response) {
  if (err) {
    res.send(err);
  } else {
   //s res.send("This is result of Document conversion service :");  
    res.send(response);
  }
});
});

app.get('/documentconvert/text', function (req, res) {
document_conversion.convert({
  // (JSON) ANSWER_UNITS, NORMALIZED_HTML, or NORMALIZED_TEXT
  file: fs.createReadStream(__dirname + serverFilePath),
  conversion_target: document_conversion.conversion_target.NORMALIZED_TEXT
}, function (err, response) {
  if (err) {
    res.send(err);
  } else {
   //s res.send("This is result of Document conversion service :");  
    res.send(response);
  }
});
});

/*
app.get('/conversationGet', function (req, res) {
    dialog.getDialogs({}, function (err, dialogs) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(dialogs);
            res.json(dialogs);
        }
    });
});


app.post('/conversationPost', function (req, res) {
    dialog.conversation(params, function (err, conversation) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(conversation);
            res.json(conversation);
        }
    });
});

*/

app.listen(3000, function () {
    console.log('Server listening on port 3000');
})
