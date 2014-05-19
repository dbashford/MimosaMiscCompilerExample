"use strict";

exports.defaults = function() {
  return {
    rr: {
      extensions: ["rr"]
    }
  };
};

exports.validate = function(config, validators) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "rr config", config.rr) ) {
    validators.isArrayOfStrings( errors, "rr.extensions", config.rr.extensions );
  }

  return errors;
};
