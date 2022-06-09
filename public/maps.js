let myMap;

ymaps?.ready(init_ymaps);

function init_ymaps() {

    myMap = new ymaps.Map('map', {
        center: [48.48956188, 135.06344215],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

    let myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [48.48953019, 135.06340984]
        }
    });

    myMap.geoObjects.add(myGeoObject);
}