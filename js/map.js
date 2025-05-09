// Функция инициализации карты
function initMap() {
  if (typeof ymaps !== 'undefined') {
    ymaps.ready(function () {
      const map = new ymaps.Map('map', {
        center: [55.885332, 37.26113], // Замените на реальные координаты
        zoom: 16,
        controls: ['zoomControl'],
      });

      const placemark = new ymaps.Placemark(
        [55.751574, 37.573856],
        {
          hintContent: 'Квартира в Замитино',
          balloonContent: 'Уютная квартира в аренду',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: 'images/map-marker.png', // Ваш кастомный маркер
          iconImageSize: [40, 40],
          iconImageOffset: [-20, -40],
        }
      );

      map.geoObjects.add(placemark);
    });
  }
}

// Загрузка API Яндекс.Карт
function loadYandexMaps() {
  const script = document.createElement('script');
  script.src =
    'https://api-maps.yandex.ru/2.1/?apikey=ваш_ключ&lang=ru_RU&onload=initMap';
  script.async = true;
  document.head.appendChild(script);
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', loadYandexMaps);
