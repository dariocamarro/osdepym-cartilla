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
  useDataBase: false,
  searchRadiumInMeters: 1000
};

OSDEPYM.service = (function(configuration) {
  var instance;

  function initialize(sqlite, q) {
    var dataProvider;

    if(configuration.useDataBase && sqlite && q) {
      var dataBase = new OSDEPYM.data.DataBase(sqlite, q);

      dataProvider = new OSDEPYM.data.DataBaseDataProvider(dataBase);
    } else {
      dataProvider = new OSDEPYM.data.StaticDataProvider();
    }

    return new OSDEPYM.services.DataService(dataProvider);
  };

  return {
      getInstance: function (sqlite, q) {
        if (!instance) {
          instance = initialize(sqlite, q);
        }

        return instance;
      }
  };
}(OSDEPYM.configuration));
