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

OSDEPYM.configuration = {
  searchRadiumInMeters: 1000
};
