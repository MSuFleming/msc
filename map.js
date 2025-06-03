
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
                'icon': 'bar',
                'title': 'Local Brewery',
                'description': 'Craft beer and casual dining with outdoor seating.',
                'color': '#f39c12'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.090372, 38.881189]
            }
        },
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
        {
            'type': 'Feature',
            'properties': {
                'icon': 'music',
                'title': '9:30 Club',
                'description': 'Iconic music venue hosting concerts and live performances.',
                'color': '#000000'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.007481, 38.876516]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'monument',
                'title': 'Washington Monument',
                'description': 'Construction on the Washington Monument began in 1848.',
                'color': '#34495e'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.0353, 38.8895]
            }
        }
    ]
  };
  
  
  // Map initialization
  mapboxgl.accessToken = 'mytoken'; 
  const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/light-v11', // style URL
      center: [-77.020945, 38.878241], // starting position
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
  

  
      // Layer configuration
      const layerConfig = {
          'hospital': { name: 'Hospitals', iconUrl: 'images/hospital.png', type: 'symbol' },
          'bar': { name: 'Bars', iconUrl: 'images/hospital.png', type: 'symbol' },
          'bicycle': { name: 'Bike Spots', iconUrl: 'images/hospital.png', type: 'circle', color: '#3b82f6' },
          'music': { name: 'Music Venues', iconUrl: 'images/hospital.png', type: 'symbol' },
          'monument': { name: 'Monuments', iconUrl: 'images/hospital.png', type: 'circle', color: '#6366f1' }
      };
      
      
          map.on('load', () => {
              // Load custom images for each marker type
              // TO USE YOUR OWN IMAGES: Replace these URLs with your local image paths
              const imageUrls = {
          'hospital': 'images/hospital.png',
          'bar': 'images/hospital2.png',
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
      
              // Wait for all images to load, then add layers
              Promise.all(imagePromises).then(() => {
                  // Add data source
                  map.addSource('places', {
                      'type': 'geojson',
                      'data': allPlaces
                  });
      
                  // Create image-based layers for each icon type
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
                      'circle-radius': 6,
                      'circle-color': config.color || '#FF0000',
                      'circle-opacity': 0.8
                  }
              });
          }
      });
      
      
                  setupLayerControls();
                  setupPopupEvents();
                  fitMapToBounds();
              });
      
              function setupLayerControls() {
      
              }
      
              function setupPopupEvents() {
                  // Add click events for popups (simplified for image-only markers)
                  Object.keys(layerConfig).forEach(iconType => {
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
                  });
              }
      
              function fitMapToBounds() {
                  // Fit map to show all features
                  const bounds = new mapboxgl.LngLatBounds();
                  allPlaces.features.forEach(feature => {
                      bounds.extend(feature.geometry.coordinates);
                  });
                  
                  map.fitBounds(bounds, {
                      padding: { top: 50, bottom: 50, left: 250, right: 50 }
                  });
              }
      
              // Create layer toggle control
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

                        //   add img to toggle layer
                          const iconImg = document.createElement('img');
                            iconImg.src = layerConfig[iconType].iconUrl;
                            iconImg.style.width = '17px';
                            iconImg.style.height = '17px';
                            iconImg.style.flexShrink = '0'; // ensures it doesn't shrink

                            button.innerHTML = ''; // clear default
                            button.appendChild(iconImg);
                            button.appendChild(document.createTextNode(layerConfig[iconType].name));

                            button.style.display = 'flex';
                            button.style.alignItems = 'center';        // vertically center img + text
                            button.style.justifyContent = 'flex-start';// keep items aligned left
                            button.style.gap = '10px';                 // spacing between image and text
                            
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
                            
      
                          // Track toggle state
                          button.isActive = true;
      
                          button.addEventListener('click', () => {
                              const markerLayer = `${iconType}-markers`;
                              
                              if (button.isActive) {
                                  // Hide layer
                                  map.setLayoutProperty(markerLayer, 'visibility', 'none');
                                  button.style.background = '#e9ecef';
                                  button.style.opacity = '0.35';
                                  button.isActive = false;
                              } else {
                                  // Show layer
                                  map.setLayoutProperty(markerLayer, 'visibility', 'visible');
                                  button.style.background = '#f8f9fa';
                                  button.style.opacity = '1';
                                  button.isActive = true;
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
