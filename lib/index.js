"use strict";

// takes text of the file and filename
var preProcess = function(text, filename) {
    // here, you can strip out any non-JS content
    // and split into multiple strings to lint
    var replaced = 
    text
        .replace(/{%(.*?)%}/g, '\/* Ignored Liquid Computation */')
        .replace(/{{(.*?)}}/g, '\/* Ignored Liquid Template */');

    return [replaced];  // return an array of strings to lint
}
// takes a Message[][] and filename
var postProcess = function(messages, filename) {
    // `messages` argument contains two-dimensional array of Message objects
    // where each top-level array item contains array of lint messages related
    // to the text that was returned in array from preprocess() method

    // you need to return a one-dimensional array of the messages you want to keep
    return messages[0];
}

// import processors - liquid can be used in multiple file types.
module.exports.processors = {
  ".html": {
      preprocess: preProcess,
      postprocess: postProcess
  },
  ".js": {
      preprocess: preProcess,
      postprocess: postProcess
  },
  ".css": {
      preprocess: preProcess,
      postprocess: postProcess
  }
};
