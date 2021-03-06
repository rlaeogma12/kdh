/*
  Setting of omok Game
*/

var SETTINGS = {
  TITLE : "OMOK ONLINE with CHAT",
  VER : "1.0",
  WIDTH : 600,
  HEIGHT : 600,
  BORDER : 30,
  STONE : {
    WIDTH : 30,
    HEIGHT : 30,
    GAP : 30
  },
  TIMELIMIT : 30
};

SETTINGS.CLIENT_SETTINGS = {
  TITLE : SETTINGS.TITLE,
  VER : SETTINGS.VER,
  WIDTH : SETTINGS.WIDTH,
  HEIGHT : SETTINGS.HEIGHT,
  BORDER : SETTINGS.BORDER,
  TIMELIMIT : SETTINGS.TIMELIMIT
};

module.exports = SETTINGS;
