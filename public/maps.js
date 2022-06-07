var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {

    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [48.48956188, 135.06344215], 
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [48.48953019, 135.06340984] // координаты точки
        }
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);

}

