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

    // Compact Mobile-Friendly Layer Toggle Control
    class LayerToggleControl {
        constructor() {
            this.isExpanded = false;
        }

        onAdd(map) {
            this._map = map;
            this._container = document.createElement('div');
            this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
            
            // Check if mobile device
            const isMobile = window.innerWidth <= 768;
            
            // Container styling
            this._container.style.background = 'rgba(255, 255, 255, 0.95)';
            this._container.style.backdropFilter = 'blur(10px)';
            this._container.style.borderRadius = '8px';
            this._container.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
            this._container.style.border = '1px solid rgba(0,0,0,0.1)';
            this._container.style.overflow = 'hidden';
            this._container.style.transition = 'all 0.3s ease';
            
            if (isMobile) {
                this._container.style.maxWidth = '180px';
                this._container.style.minWidth = '48px';
                this._container.style.width = '48px';
            } else {
                this._container.style.minWidth = '200px';
                this._container.style.width = '240px';
            }

            // Create header with toggle button
            const header = document.createElement('div');
            header.style.display = 'flex';
            header.style.alignItems = 'center';
            header.style.justifyContent = 'space-between';
            header.style.padding = '8px 12px';
            header.style.background = 'rgba(248, 249, 250, 0.8)';
            header.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
            header.style.cursor = 'pointer';
            header.style.userSelect = 'none';

            // Title (hidden on mobile when collapsed)
            const title = document.createElement('span');
            title.innerHTML = 'Layers';
            title.style.fontSize = '14px';
            title.style.fontWeight = '600';
            title.style.color = '#333';
            title.style.whiteSpace = 'nowrap';
            
            // Toggle icon
            const toggleIcon = document.createElement('span');
            toggleIcon.innerHTML = '⚙️';
            toggleIcon.style.fontSize = '16px';
            toggleIcon.style.transition = 'transform 0.3s ease';
            
            if (isMobile) {
                header.appendChild(toggleIcon);
                title.style.display = 'none';
                this.titleElement = title;
            } else {
                header.appendChild(title);
                header.appendChild(toggleIcon);
                this.isExpanded = true;
            }

            this.toggleIcon = toggleIcon;
            this._container.appendChild(header);

            // Create collapsible content
            const content = document.createElement('div');
            content.style.transition = 'all 0.3s ease';
            content.style.overflow = 'hidden';
            
            if (isMobile) {
                content.style.maxHeight = '0';
                content.style.opacity = '0';
            } else {
                content.style.maxHeight = '400px';
                content.style.opacity = '1';
            }
            
            this.contentElement = content;

            // Create toggle buttons for each layer
            Object.keys(layerConfig).forEach(iconType => {
                const button = document.createElement('button');
                button.className = 'layer-toggle-btn';
                button.innerHTML = '';
                button.style.all = 'unset';
                button.style.boxSizing = 'border-box';

                // Handle different layer types
                if (layerConfig[iconType].type === 'symbol' && layerConfig[iconType].iconUrl) {
                    const iconImg = document.createElement('img');
                    iconImg.src = layerConfig[iconType].iconUrl;
                    iconImg.style.width = '16px';
                    iconImg.style.height = '16px';
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
                    const polygonPreview = document.createElement('span');
                    polygonPreview.style.display = 'inline-block';
                    polygonPreview.style.width = '14px';
                    polygonPreview.style.height = '10px';
                    polygonPreview.style.backgroundColor = layerConfig[iconType].fillColor;
                    polygonPreview.style.border = `1px solid ${layerConfig[iconType].strokeColor}`;
                    polygonPreview.style.borderRadius = '2px';
                    polygonPreview.style.flexShrink = '0';
                    button.appendChild(polygonPreview);
                }

                // Add layer name
                const nameSpan = document.createElement('span');
                nameSpan.textContent = layerConfig[iconType].name;
                nameSpan.style.fontSize = '12px';
                nameSpan.style.color = '#333';
                nameSpan.style.fontWeight = '500';
                button.appendChild(nameSpan);

                // Button styling
                button.style.display = 'flex';
                button.style.alignItems = 'center';
                button.style.gap = '8px';
                button.style.width = '100%';
                button.style.padding = '8px 12px';
                button.style.border = 'none';
                button.style.background = 'transparent';
                button.style.cursor = 'pointer';
                button.style.transition = 'all 0.2s ease';
                button.style.borderRadius = '0';
                button.style.textAlign = 'left';
                button.style.minHeight = '36px';

                // Track toggle state
                if (layerConfig[iconType].defaultVisible === false) {
                    button.isActive = false;
                    button.style.opacity = '0.5';
                    nameSpan.style.textDecoration = 'line-through';
                } else {
                    button.isActive = true;
                    button.style.opacity = '1';
                }

                // Click handler
                button.addEventListener('click', () => {
                    if (iconType === 'Drive_Acc') {
                        const fillLayer = 'drive-acc-polygons-fill';
                        const strokeLayer = 'drive-acc-polygons-stroke';
                        
                        if (button.isActive) {
                            map.setLayoutProperty(fillLayer, 'visibility', 'none');
                            map.setLayoutProperty(strokeLayer, 'visibility', 'none');
                            button.style.opacity = '0.5';
                            nameSpan.style.textDecoration = 'line-through';
                            button.isActive = false;
                        } else {
                            map.setLayoutProperty(fillLayer, 'visibility', 'visible');
                            map.setLayoutProperty(strokeLayer, 'visibility', 'visible');
                            button.style.opacity = '1';
                            nameSpan.style.textDecoration = 'none';
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
                            button.style.opacity = '0.5';
                            nameSpan.style.textDecoration = 'line-through';
                            button.isActive = false;
                        } else {
                            map.setLayoutProperty(fillLayer, 'visibility', 'visible');
                            if (map.getLayer(strokeLayer)) {
                                map.setLayoutProperty(strokeLayer, 'visibility', 'visible');
                            }
                            button.style.opacity = '1';
                            nameSpan.style.textDecoration = 'none';
                            button.isActive = true;
                        }
                    } else {
                        const markerLayer = `${iconType}-markers`;

                        if (button.isActive) {
                            map.setLayoutProperty(markerLayer, 'visibility', 'none');
                            button.style.opacity = '0.5';
                            nameSpan.style.textDecoration = 'line-through';
                            button.isActive = false;
                        } else {
                            map.setLayoutProperty(markerLayer, 'visibility', 'visible');
                            button.style.opacity = '1';
                            nameSpan.style.textDecoration = 'none';
                            button.isActive = true;
                        }
                    }
                });

                // Hover effects
                button.addEventListener('mouseenter', () => {
                    button.style.background = 'rgba(80, 200, 120, 0.1)';
                });

                button.addEventListener('mouseleave', () => {
                    button.style.background = 'transparent';
                });

                content.appendChild(button);
            });

            this._container.appendChild(content);

            // Header click handler for mobile
            if (isMobile) {
                header.addEventListener('click', () => {
                    this.toggleExpanded();
                });
            }

            return this._container;
        }

        toggleExpanded() {
            this.isExpanded = !this.isExpanded;
            
            if (this.isExpanded) {
                this._container.style.width = '280px';
                this.contentElement.style.maxHeight = '400px';
                this.contentElement.style.opacity = '1';
                this.toggleIcon.style.transform = 'rotate(90deg)';
                if (this.titleElement) {
                    this.titleElement.style.display = 'inline';
                }
            } else {
                this._container.style.width = '48px';
                this.contentElement.style.maxHeight = '0';
                this.contentElement.style.opacity = '0';
                this.toggleIcon.style.transform = 'rotate(0deg)';
                if (this.titleElement) {
                    this.titleElement.style.display = 'none';
                }
            }
        }

        onRemove() {
            this._container.parentNode.removeChild(this._container);
            this._map = undefined;
        }
    }

    // Add the layer toggle control to map
    map.addControl(new LayerToggleControl(), 'top-left');
});
