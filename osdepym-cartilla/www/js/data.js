OSDEPYM.namespace("OSDEPYM.data.StaticDataProvider");

OSDEPYM.data.StaticDataProvider = (function() {
  var afiliados = [
    new OSDEPYM.model.Afiliado("31.372.955", "1531236473", "M"),
    new OSDEPYM.model.Afiliado("31.489.003", "1525021015", "M"),
    new OSDEPYM.model.Afiliado("32.800.512", "1540283680", "F")
  ];
  var especialidades = [
    new OSDEPYM.model.Especialidad("Odontología"),
    new OSDEPYM.model.Especialidad("Pediatría"),
    new OSDEPYM.model.Especialidad("Traumatología")
  ];
  var localidades = [
    new OSDEPYM.model.Localidad("Santos Lugares"),
    new OSDEPYM.model.Localidad("Devoto"),
    new OSDEPYM.model.Localidad("Paso de Los Libres")
  ];
  var provincias = [
    new OSDEPYM.model.Provincia("Buenos Aires"),
    new OSDEPYM.model.Provincia("Corrientes")
  ];
  var prestadores = [
    new OSDEPYM.model.Prestador("Mauro Agnoletti", "Traumatología", "Chile 1333", "Villa Raffo", "Buenos Aires", "1675", "1531236473", ""),
    new OSDEPYM.model.Prestador("Facundo Costa Zini", "Proctología", "Las Lomas 1550", "Villa La Cava", "Buenos Aires", "911", "", ""),
    new OSDEPYM.model.Prestador("Dario Camarro", "Ginecología", "Belgrano 980", "Paso de Los Libres", "Corrientes", "1290", "", "")
  ];

  var constructor = function() { };

  constructor.prototype.getAfiliados = function() {
    return afiliados;
  };
  constructor.prototype.getEspecialidades = function() {
      return especialidades;
  };
  constructor.prototype.getLocalidades = function() {
    return localidades;
  };
  constructor.prototype.getProvincias = function() {
    return provincias;
  };
  constructor.prototype.getPrestadores = function() {
    return prestadores;
  };

  return constructor;
}());

OSDEPYM.namespace("OSDEPYM.data.DataBaseDataProvider");

OSDEPYM.data.DataBaseDataProvider = (function() {
  //TODO: Figure out how to get data from a DB (SQLite or whatever DB we use)
  var constructor = function() { };

  constructor.prototype.getAfiliados = function() {
    return [];
  };
  constructor.prototype.getEspecialidades = function() {
      return [];
  };
  constructor.prototype.getLocalidades = function() {
    return [];
  };
  constructor.prototype.getProvincias = function() {
    return [];
  };
  constructor.prototype.getPrestadores = function() {
    return [];
  };

  return constructor;
}());
