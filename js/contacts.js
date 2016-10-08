  window.onload = function() {

  // Создает экземпляр карты и привязывает его к созданному контейнеру
  var map = new YMaps.Map(document.getElementById("YMapsID"));

  // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
  map.setCenter(new YMaps.GeoPoint(30.32158, 59.936365), 16);

  // Создает стиль
  var s = new YMaps.Style();

  // Создает стиль значка метки
  s.iconStyle = new YMaps.IconStyle();
  s.iconStyle.href = "img/icons-external/icon-map-pin.svg";
  s.iconStyle.size = new YMaps.Point(67, 100);
  s.iconStyle.offset = new YMaps.Point(-20, -90);

  // Добавляет метку на карту
  var placemark = new YMaps.Placemark(new YMaps.GeoPoint(30.32158, 59.936365), {style: s}, {hideIcon: false});
  placemark.name = "Магазин вязанных изделий 'Мишка'"
  map.addOverlay(placemark);
};
