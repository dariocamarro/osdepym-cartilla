var OSDEPYM = OSDEPYM || {};

OSDEPYM.namespace = function(name) {
  var parts = name.split('.');
  var parent = OSDEPYM;
  var i;

  if(parts[0] === "OSDEPYM") {
    parts = parts.slice(1);
  }

  for(i = 0; i < parts.length; i += 1) {
    if(typeof parent[parts[i]] === "undefined") {
      parent[parts[i]] = {};
    }

    parent = parent[parts[i]];
  }

  return parent;
};

OSDEPYM.configuration = (function() {
  var useFakeData = true;
  var searchRadiumInMeters = 1000;

  return {
    getDataProvider: function() {
      return useFakeData ?
        new OSDEPYM.data.StaticDataProvider() :
        new OSDEPYM.data.DataBaseDataProvider();
    },
    getSearchRadium: function() {
      return searchRadiumInMeters;
    }
  };
}());
