export default () => {
  buildMap(coords, 'map');
}
export const buildMap = (data, mapItem) => {
    const { google } = window;
  
    const markerDefault = {
      url: pathToMapMarker,
      anchor: new google.maps.Point(25,50),
      scaledSize: new google.maps.Size(50,50)
    };
  
    const bounds = new google.maps.LatLngBounds();
    let coordinate = null;
    const firstCoords = data[0] ?
      data[0].coords.split(',') :
      undefined;
    coordinate = firstCoords;
    const centerPosition = new google.maps.LatLng(coordinate[0], coordinate[1]);
    const defaultZoom = 8.46;
    const map = new google.maps.Map(document.getElementById(mapItem), {
      zoom: defaultZoom,
      center: centerPosition,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false
    });
    const markers = [];
    if (data.length) {
      for (let i = 0; i < data.length; i++) {
        coordinate = data[i].coords.split(',');
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(coordinate[0], coordinate[1]),
          map,
          icon: markerDefault
        });
        marker.index = i;
        google.maps.event.addListener(marker, 'click', () => {
          map.setCenter(marker.getPosition());
          map.setZoom(13);
        });
        markers.push(marker);
        bounds.extend(marker.position);
      }
      google.maps.event.addListener(map, 'zoom_changed', () => {
        const zoomChangeBoundsListener =
          google.maps.event.addListener(map, 'bounds_changed', function (event) {
            if (this.getZoom() > 15 && this.initialZoom === true) {
              this.setZoom(13);
              this.initialZoom = false;
            }
            google.maps.event.removeListener(zoomChangeBoundsListener);
          });
      });
      map.initialZoom = true;
      map.fitBounds(bounds);
      map.panToBounds(bounds);
  
    } else {
      console.dir('no data!');
    }
  }
