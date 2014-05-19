"use strict";

var config = require( "./config" )
  , getExtensions = function ( mimosaConfig ) {
    return mimosaConfig.rr.extensions;
  };

var compile = function ( mimosaConfig, options, next ) {
  if ( options.files && options.files.length ) {
    options.files.forEach( function ( file ) {
      file.outputFileText = "Best... thing... ever: http://tinyurl.com/2fcpre6";
    });
  }
  next();
};

var determineOutputFile = function( config, options ) {
  options.files.forEach( function( file ) {
    file.outputFileName = file.inputFileName.replace(config.watch.sourceDir, config.watch.compiledDir);
  });
};

module.exports = {
  name: "rr",
  compilerType: "misc",
  compile: compile,
  extensions: getExtensions,
  defaults: config.defaults,
  validate: config.validate,
  determineOutputFile: determineOutputFile
};
