OSDEPYM.namespace("OSDEPYM.services.DataService");

OSDEPYM.services.DataService = (function(configuration) {
  var dataProvider = configuration.getDataProvider();
  var isInZone = function(prestador) {
    var currentCoordinates = "";

    //TODO: Code this method base on current coordinates and radium
  };

  return {
      getAfiliado: function(dni) {
        var afiliados = dataProvider.getAfiliados();
        var max;

        for(var i = 0; max = afiliados.length; i += 1) {
          if(afiliados[i].getDNI() === dni) {
            return afiliados[i];
          }
        }

        return null;
      },
      getEspecialidades: function() {
        return dataProvider.getEspecialidades();
      },
      getLocalidades: function() {
        return dataProvider.getLocalidades();
      },
      getProvincias: function() {
        return dataProvider.getProvincias();
      },
      getPrestadoresByEspecialidad: function(especialidad, localidad, provincia) {
        var prestadores = dataProvider.getPrestadores();
        var max;
        var result = [];
        var j = 0;

        for(var i = 0; max = prestadores.length; i += 1) {
          var valid = true;

          if(prestadores[i].getEspecialidad() === especialidad) {
            if(provincia && prestadores[i].getProvincia() !== provincia) {
                valid = false;
            }

            if(valid && localidad) {
              if(prestadores[i].getLocalidad() !== localidad) {
                valid = false;
              }
            }
          } else {
            valid = false;
          }

          if(valid) {
            result[j] = prestadores[i];
            j += 1;
          }
        }

        return result;
      },
      getPrestadoresByNombre: function(nombre) {
        var prestadores = dataProvider.getPrestadores();
        var max;
        var result = [];
        var j = 0;

        for(var i = 0; max = prestadores.length; i += 1) {
          if(prestadores[i].getNombre() === nombre) {
            result[j] = prestadores[i];
            j += 1;
          }
        }

        return result;
      },
      getPrestadoresByCercania: function(especialidad) {
          var prestadores = dataProvider.getPrestadores();
          var max;
          var result = [];
          var j = 0;

          for(var i = 0; max = prestadores.length; i += 1) {
            if(prestadores[i].getEspecialidad() === especialidad && isInZone(prestadores[i])) {
              result[j] = prestadores[i];
              j += 1;
            }
          }

          return result;
        }
  };
}(OSDEPYM.configuration));

