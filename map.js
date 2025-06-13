// map colour template https://colorbrewer2.org/#type=diverging&scheme=RdGy&n=6
const allPlaces = {
    // ----------------below is hospital------------
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'icon': 'hospital',
                'title': 'West Glasgow Ambulatory Care Hospital',
                'description': 'Dalnair Street, Yorkhill, Glasgow, G3 8SJ',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2938739471248937,55.867256985521522]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'hospital',
                'title': 'Glasgow Royal Infirmary',
                'description': '84 Castle Street Glasgow, G4 0SF',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2356463582927404,55.864024756437402]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'hospital',
                'title': 'Lightburn Hospital',
                'description': '966 Carntyne Road Glasgow, G32 6NB',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.1655381667529241,55.86063283653624]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'hospital',
                'title': 'Stobhill Hospital',
                'description': '133 Balornock Road, Glasgow G21 3UW',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2198419991089509,55.892890610013694]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'hospital',
                'title': 'Queen Elizabeth University Hospital',
                'description': '1345 Govan Road, Glasgow, G51 4TF',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.3381034300292072,55.862640821216985]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'hospital',
                'title': 'Gartnavel General Hospital',
                'description': '1053 Great Western Road, Glasgow, G12 0YN',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.3127174194733016,55.883216859970162]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'hospital',
                'title': 'New Victoria Hospital',
                'description': '55 Grange Road, Glasgow, G42 9LL',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2633809258889528,55.828412820195524]
            }
        },

// ----------------below is clinic---------------------
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Baillieston Health Centre',
                'description': '20 Muirside Road Glasgow, G69 7AD',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.1161653981145605,55.849487588781244]
            }
        },        
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Bridgeton Health Centre',
                'description': '201 Abercromby Street Glasgow, G40 2DA',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2278003615973603,55.852648320863352]
            }
        },
                {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Castlemilk Health Centre',
                'description': '71 Dougrie Dr, Glasgow G45 9AW',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2349393130987778,55.805745704800472]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Govan Health Centre',
                'description': '5 Drumoyne Road Glasgow, G51 4BJ',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.3264733829402076,55.860305482412116]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Govanhill Health Centre',
                'description': '233 Calder St, Glasgow G42 7DR',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.258361870703709,55.83730541461324]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Maryhill Health and Care Centre',
                'description': '51 Gairbraid Avenue Maryhill Glasgow G20 8FB',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2928819004793013,55.890035506233687]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'New Gorbals Health and Care Centre',
                'description': '2 Sandiefield Road Glasgow G5 9AB',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2529930098194768,55.848399491843111]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Parkhead Health Centre',
                'description': '1251 Duke St, Parkhead, Glasgow, G31 5NZ',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.1934693216518326,55.85224133177212]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Pollok Health Centre',
                'description': '21 Cowglen Road Glasgow, G53 6EQ',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.3462211640754163,55.822249109708707]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Possilpark Health and Care Centre',
                'description': '99 Saracen Street, Glasgow, G22 5AP',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.254685568084426,55.881177092348992]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Shettleston Health Centre',
                'description': '420 Old Shettleston Road Glasgow, G32 7JZ',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.1698317370450013,55.852737587569663]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Possilpark Health and Care Centre',
                'description': '99 Saracen Street, Glasgow, G22 5AP',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.254685568084426,55.881177092348992]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Shields Health and Care Centre',
                'description': '80 McCulloch Street, Glasgow, G41 1NX',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2709318757054575,55.844939484269844]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Springburn Health Centre',
                'description': '200 Springburn Way Glasgow, G21 1TR',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2286562382947182,55.882682398274142]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Townhead Health Centre',
                'description': '16 Alexandra Parade, Glasgow G31 2ES',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2342350009444658,55.866257756890036]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Woodside Health and Care Centre',
                'description': '891 Garscube Rd, Glasgow G20 7ET',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2709489951999444,55.87970153060121]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Pollokshaws Clinic',
                'description': '35 Well Grn, Shawlands, Glasgow G43 1RR',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2960784606523816,55.826179529261935]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Netherton LD Assessment Centre',
                'description': '19 Blackwood Street, Anniesland Glasgow, G13 1AL',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.3313438890092471,55.894387164635987]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Sandy Road Clinic',
                'description': '547 Dumbarton Rd, Glasgow G11 6HU',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.3150962126200625,55.870535703260146]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Glenkirk Resource Centre',
                'description': '129 Drumchapel Road Glasgow, G15 6PX',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.3585084986682432,55.905805273894316]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'clinic',
                'title': 'Fernbank St Clinic',
                'description': '194 Fernbank Street Glasgow G22 6BD',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-4.2340758659084372,55.886764255565993]
            }
        },
        // ------------------- below is ---------------
        {
            'type': 'Feature',
            'properties': {
                'icon': 'bicycle',
                'title': 'Capital Crescent Trail',
                'description': 'Popular biking and walking trail through the city.',
                'color': '#27ae60'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.052477, 38.943951]
            }
        },
    ]
  };
  
  
  // Map initialization
  mapboxgl.accessToken = 'pk.eyJ1IjoienlwaGVyMTEwNCIsImEiOiJjbWF5OWg0bGUwNjFzMmxxemo4enM0NWIzIn0.OSmBViJ_-9Hu8EBdqkE6xA'; 
  const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/light-v11', // style URL
      center: [-4.277578834832815,55.856466907382745,], // starting position
      zoom: 10// starting zoom
  });
  
  // Add FullscreenControl
  map.addControl(new mapboxgl.FullscreenControl());

  // Add geocoder
  map.addControl(
      new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl
      }),
      'top-left'
  );
  
  // Layer configuration - including polygons
  const layerConfig = {
    'hospital': { name: 'Hospitals', iconUrl: 'images/hospital.png', type: 'symbol' },
    'clinic': { name: 'Clinics', type: 'circle', color: '#f76659'},
    'bicycle': { name: 'Bike Spots', type: 'circle', color: '#3b82f6' },
    // Add polygon layer configuration
    'Drive_Acc': { 
        name: 'Index (Driving Mode)', 
        type: 'polygon', 
        fillColor: '#88c999',
        strokeColor: '#111',
    },
    'Drive_Service': { 
        name: 'Driving Service Area', 
        type: 'polygon', 
        fillColor: '#999999',   
        strokeColor: '#111',
        defaultVisible: false  // Add this property to control default visibility
    }
};

// Function to load polygon GeoJSON
async function loadPolygonData() {
    try {
        // Replace 'polygons.geojson' with your actual file name
        const response = await fetch('Drive_Access.geojson');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const polygonData = await response.json();
        return polygonData;
    } catch (error) {
        console.error('Error loading polygon data:', error);
        return null;
    }
}

// Load my second polygon GeoJSON (service area (Driving mode))
async function loadDriveServiceData() {
    try {
        const response = await fetch('Drive_servicearea.geojson');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error loading Drive_Service polygon data:', error);
        return null;
    }
}

map.on('load', async () => {
    // Load custom images for each marker type
    const imageUrls = {
        'hospital': 'images/hospital.png',
        'clinic': 'images/hospital2.png',
        'music': './images/music-icon.png'
    };

    // Load all images
    const imagePromises = Object.keys(imageUrls).map(iconType => {
        return new Promise((resolve) => {
            map.loadImage(imageUrls[iconType], (error, image) => {
                if (error) {
                    console.error(`Failed to load ${iconType} image:`, error);
                    resolve(null);
                } else {
                    map.addImage(`${iconType}-icon`, image);
                    resolve(iconType);
                }
            });
        });
    });

    // Load polygon data
    const driveAccData = await loadPolygonData();
    const driveServiceData = await loadDriveServiceData();

    // Wait for all images to load, then add layers
    Promise.all(imagePromises).then(() => {
        // Add point data source
        map.addSource('places', {
            'type': 'geojson',
            'data': allPlaces
        });

        // Add polygon data source if loaded successfully
        if (driveAccData) {
            map.addSource('drive-acc-polygon-areas', {
                'type': 'geojson',
                'data': driveAccData
            });
        }
        if (driveAccData) {
            const polygonConfig = layerConfig['Drive_Acc'];
            
            // polygon layer (fill colour)
            map.addLayer({
                'id': 'drive-acc-polygons-fill',
                'type': 'fill',
                'source': 'drive-acc-polygon-areas',
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'Ai'],
                        0, '#762a83',
                        0.000083, '#af8dc3',
                        0.000602, '#e7d4e8',
                        0.004616, '#d9f0d3',
                        0.005803, '#7fbf7b',
                        0.022, '#1b7837'
                    ],
                    //   polygon opacity
                    'fill-opacity': 0.4
                },
                'layout': {
                    'visibility': 'visible'
                }
            });
        
            // 1st polygon stroke
            map.addLayer({
                'id': 'drive-acc-polygons-stroke',
                'type': 'line',
                'source': 'drive-acc-polygon-areas',
                'paint': {
                    'line-color': '#111', 
                    'line-width': 0.3,        
                    'line-opacity': 0.2
                },
                'layout': {
                    'visibility': 'visible'
                }
            });
        }

        // 2nd polygon (service area (driving)) setting - HIDDEN BY DEFAULT
        if (driveServiceData) {
            const serviceConfig = layerConfig['Drive_Service'];

            map.addSource('drive-service-polygon-areas', {
                'type': 'geojson',
                'data': driveServiceData
            });

            map.addLayer({
                'id': 'drive-service-polygons-fill',
                'type': 'fill',
                'source': 'drive-service-polygon-areas',
                'paint': {
                    'fill-color': serviceConfig.fillColor,
                    'fill-opacity': 0.5
                },
                'layout': {
                    'visibility': 'none'  // Changed from 'visible' to 'none'
                }
            });
            // no stroke
            // map.addLayer({
            //     'id': 'drive-service-polygons-stroke',
            //     'type': 'line',
            //     'source': 'drive-service-polygon-areas',
            //     'paint': {
            //         'line-color': serviceConfig.strokeColor,
            //         'line-width': 0,
            //         'line-opacity': 0
            //     },
            //     'layout': {
            //         'visibility': 'none'  // Also set to 'none' if you enable stroke
            //     }
            // });
        }

        // Create point layers
        Object.keys(layerConfig).forEach(iconType => {
            const config = layerConfig[iconType];
            const layerId = `${iconType}-markers`;

            if (config.type === 'symbol') {
                map.addLayer({
                    'id': layerId,
                    'type': 'symbol',
                    'source': 'places',
                    'filter': ['==', 'icon', iconType],
                    'layout': {
                        'icon-image': `${iconType}-icon`,
                        'icon-size': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            10, 0.4,
                            16, 0.8
                        ],
                        'icon-anchor': 'bottom',
                        'icon-allow-overlap': true,
                        'visibility': 'visible'
                    }
                });
            } else if (config.type === 'circle') {
                map.addLayer({
                    'id': layerId,
                    'type': 'circle',
                    'source': 'places',
                    'filter': ['==', 'icon', iconType],
                    'paint': {
                        'circle-radius': 5,
                        'circle-color': config.color || '#FF0000',
                        'circle-opacity': 0.8
                    }
                });
            }
        });

        // Add polygon layers if data exists
        
        setupLayerControls();
        setupPopupEvents();
        fitMapToBounds(polygonData);
    });

    function setupLayerControls() {
        // This function is now handled by the LayerToggleControl class below
    }

    function setupPopupEvents() {
        // Add click events for point markers
        Object.keys(layerConfig).forEach(iconType => {
            if (layerConfig[iconType].type !== 'polygon') {
                const layerId = `${iconType}-markers`;
                
                map.on('click', layerId, (e) => {
                    const coordinates = e.features[0].geometry.coordinates.slice();
                    const { title, description } = e.features[0].properties;

                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }

                    new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(`
                            <div class="popup-title">${title}</div>
                            <div class="popup-description">${description}</div>
                        `)
                        .addTo(map);
                });

                map.on('mouseenter', layerId, () => {
                    map.getCanvas().style.cursor = 'pointer';
                });

                map.on('mouseleave', layerId, () => {
                    map.getCanvas().style.cursor = '';
                });
            }
        });

        // Add click events for polygons
        if (map.getSource('drive-acc-polygon-areas')) {
            map.on('click', 'drive-acc-polygons-fill', (e) => {
                const coordinates = e.lngLat;
                const properties = e.features[0].properties;
                
                // Create popup content from polygon properties
                let popupContent = '<div class="popup-title">Area Information</div>';
                if (properties.name) {
                    popupContent += `<div class="popup-description"><strong>Name:</strong> ${properties.name}</div>`;
                }
                if (properties.description) {
                    popupContent += `<div class="popup-description">${properties.description}</div>`;
                }
                
                // Add other properties if they exist
                Object.keys(properties).forEach(key => {
                    if (key !== 'name' && key !== 'description') {
                        popupContent += `<div class="popup-description"><strong>${key}:</strong> ${properties[key]}</div>`;
                    }
                });

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(popupContent)
                    .addTo(map);
            });

            map.on('mouseenter', 'drive-acc-polygons-fill', () => {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseleave', 'drive-acc-polygons-fill', () => {
                map.getCanvas().style.cursor = '';
            });
        }
    }

    function fitMapToBounds(polygonData) {
        // Fit map to show all features
        const bounds = new mapboxgl.LngLatBounds();
        
        // Add point features to bounds
        allPlaces.features.forEach(feature => {
            bounds.extend(feature.geometry.coordinates);
        });

        // Add polygon features to bounds
        if (polygonData && polygonData.features) {
            polygonData.features.forEach(feature => {
                if (feature.geometry.type === 'Polygon') {
                    feature.geometry.coordinates[0].forEach(coord => {
                        bounds.extend(coord);
                    });
                } else if (feature.geometry.type === 'MultiPolygon') {
                    feature.geometry.coordinates.forEach(polygon => {
                        polygon[0].forEach(coord => {
                            bounds.extend(coord);
                        });
                    });
                }
            });
        }
        
        map.fitBounds(bounds, {
            padding: { top: 50, bottom: 50, left: 250, right: 50 }
        });
    }

    // Enhanced Layer Toggle Control with polygon support
    class LayerToggleControl {
        onAdd(map) {
            this._map = map;
            this._container = document.createElement('div');
            this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
            this._container.style.background = 'white';
            this._container.style.padding = '10px';
            this._container.style.minWidth = '180px';

            // Create title
            const title = document.createElement('div');
            title.innerHTML = '<strong>Toggle Layers</strong>';
            title.style.marginBottom = '10px';
            title.style.fontSize = '15px';
            title.style.color = '#222';
            this._container.appendChild(title);

            // Create toggle buttons for each layer
            Object.keys(layerConfig).forEach(iconType => {
                const button = document.createElement('button');
                button.className = 'layer-toggle-btn';
                button.innerHTML = '';

                // Handle different layer types
                if (layerConfig[iconType].type === 'symbol' && layerConfig[iconType].iconUrl) {
                    const iconImg = document.createElement('img');
                    iconImg.src = layerConfig[iconType].iconUrl;
                    iconImg.style.width = '17px';
                    iconImg.style.height = '17px';
                    iconImg.style.flexShrink = '0';
                    button.appendChild(iconImg);
                } else if (layerConfig[iconType].type === 'circle') {
                    const colorDot = document.createElement('span');
                    colorDot.style.display = 'inline-block';
                    colorDot.style.width = '12px';
                    colorDot.style.height = '12px';
                    colorDot.style.borderRadius = '50%';
                    colorDot.style.backgroundColor = layerConfig[iconType].color || '#999';
                    colorDot.style.flexShrink = '0';
                    button.appendChild(colorDot);
                } else if (layerConfig[iconType].type === 'polygon') {
                    // Create polygon preview
                    const polygonPreview = document.createElement('span');
                    polygonPreview.style.display = 'inline-block';
                    polygonPreview.style.width = '16px';
                    polygonPreview.style.height = '12px';
                    polygonPreview.style.backgroundColor = layerConfig[iconType].fillColor;
                    polygonPreview.style.border = `2px solid ${layerConfig[iconType].strokeColor}`;
                    polygonPreview.style.borderRadius = '2px';
                    polygonPreview.style.flexShrink = '0';
                    button.appendChild(polygonPreview);
                }

                // Add the name after icon/color dot/polygon preview
                button.appendChild(document.createTextNode(layerConfig[iconType].name));

                // Layout styling
                button.style.display = 'flex';
                button.style.alignItems = 'center';
                button.style.justifyContent = 'flex-start';
                button.style.gap = '10px';
                button.style.width = '100%';
                button.style.padding = '8px 12px';
                button.style.margin = '2px 0';
                button.style.border = '1px solid #ccc';
                button.style.borderRadius = '5px';
                button.style.background = '#f8f9fa';
                button.style.cursor = 'pointer';
                button.style.fontSize = '13px';
                button.style.textAlign = 'left';
                button.style.transition = 'all 0.2s';

                // Track toggle state - Set Drive_Service as inactive by default
                if (layerConfig[iconType].defaultVisible === false) {
                    button.isActive = false;
                    button.style.background = '#e9ecef';
                    button.style.opacity = '0.35';
                } else {
                    button.isActive = true;
                }

                button.addEventListener('click', () => {
                    if (iconType === 'Drive_Acc') {
                        // Handle polygon layers (both fill and stroke)
                        const fillLayer = 'drive-acc-polygons-fill';
                        const strokeLayer = 'drive-acc-polygons-stroke';
                        
                        if (button.isActive) {
                            map.setLayoutProperty(fillLayer, 'visibility', 'none');
                            map.setLayoutProperty(strokeLayer, 'visibility', 'none');
                            button.style.background = '#e9ecef';
                            button.style.opacity = '0.35';
                            button.isActive = false;
                        } else {
                            map.setLayoutProperty(fillLayer, 'visibility', 'visible');
                            map.setLayoutProperty(strokeLayer, 'visibility', 'visible');
                            button.style.background = '#f8f9fa';
                            button.style.opacity = '1';
                            button.isActive = true;
                        }
                    } else if (iconType === 'Drive_Service') {
                        const fillLayer = 'drive-service-polygons-fill';
                        const strokeLayer = 'drive-service-polygons-stroke';
                    
                        if (button.isActive) {
                            map.setLayoutProperty(fillLayer, 'visibility', 'none');
                            if (map.getLayer(strokeLayer)) {
                                map.setLayoutProperty(strokeLayer, 'visibility', 'none');
                            }
                            button.style.background = '#e9ecef';
                            button.style.opacity = '0.35';
                            button.isActive = false;
                        } else {
                            map.setLayoutProperty(fillLayer, 'visibility', 'visible');
                            if (map.getLayer(strokeLayer)) {
                                map.setLayoutProperty(strokeLayer, 'visibility', 'visible');
                            }
                            button.style.background = '#f8f9fa';
                            button.style.opacity = '1';
                            button.isActive = true;
                        }
                    } else {
                        // Handle point layers
                        const markerLayer = `${iconType}-markers`;

                        if (button.isActive) {
                            map.setLayoutProperty(markerLayer, 'visibility', 'none');
                            button.style.background = '#e9ecef';
                            button.style.opacity = '0.35';
                            button.isActive = false;
                        } else {
                            map.setLayoutProperty(markerLayer, 'visibility', 'visible');
                            button.style.background = '#f8f9fa';
                            button.style.opacity = '1';
                            button.isActive = true;
                        }
                    }
                });

                // Hover effects
                button.addEventListener('mouseenter', () => {
                    if (button.isActive) {
                        button.style.background = '#50c8784d';
                    }
                });

                button.addEventListener('mouseleave', () => {
                    if (button.isActive) {
                        button.style.background = '#f8f9fa';
                    }
                });

                this._container.appendChild(button);
            });

            return this._container;
        }

        onRemove() {
            this._container.parentNode.removeChild(this._container);
            this._map = undefined;
        }
    }

    // Add the layer toggle control to map
    map.addControl(new LayerToggleControl(), 'top-left');
});
