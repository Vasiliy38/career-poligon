ymaps.ready(function () {
    const searchControls = new ymaps.control.SearchControl({
        options: {
            float: 'right',
            noPlacemark: true
        }
    })

    var myMap = new ymaps.Map("map37", {
        center: [57.000348, 40.973921],
        zoom: 6,
        controls: [searchControls]
    })
    const removeControls = [
        'geolocationControl',
        'trafficControl',
        'fullscreenControl',
        'zoomControl', 'rulerControl',
        'typeSelector'
    ]

    const clearTheMap = myMap => {
        removeControls
            .forEach(controls => myMap.controls.remove(controls))
    }

    clearTheMap(myMap)

    fetch('regions/37.json',)
        .then(arr => arr.json())
        .then(arr => {
            var objectManager = new ymaps.ObjectManager({clusterize: false});

            objectManager.add(arr)
            myMap.geoObjects.add(objectManager)
        })
})
