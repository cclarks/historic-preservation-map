import React, { Component } from "react";
import PropTypes from "prop-types";
import MapboxGl from "mapbox-gl/dist/mapbox-gl.js";

class Map extends Component {
  static childContextTypes = {
    map: PropTypes.object
  };

  state = {
    map: null
  };

  getChildContext = () => ({
    map: this.state.map
  });

  componentDidMount() {
    MapboxGl.accessToken =
      "pk.eyJ1IjoiY29keWNsYXJrcyIsImEiOiJjajd0ank3YTY1YWplMnFucGZqZ245M2RlIn0.n0rmWB6YI7vQI9j4_sIkhQ";

    const map = new MapboxGl.Map({
      container: this.container,
    //  style: "mapbox://styles/codyclarks/cj8emxv3ea7fw2ro4i6bstrqx",
    style :"mapbox://styles/mapbox/navigation-guidance-day-v2",
      center: [-84.993639, 29.7271173],
      zoom: 15,
      "sources": {
           "raster-tiles": {
               "type": "raster",
               "url": "mapbox://codyclarks.historic-data",
               "tileSize": 256
           }
       }
    });

    // map.flyTo({ center: [13.29, 52.51], zoom: 9 })

    map.on("load", (...args) => {
      map.addLayer({
        id: "codyclarks.historic-data",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://codyclarks.historic-data"
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#ff69b4",
          "line-width": 1
        }
      });
      this.setState({ map });
    });

      map.on('click', function(e) {
        let features = map.queryRenderedFeatures(e.point, {
          layers: ['original'],
        });

        if (!features.length) {
          return;
        }

        let feature = features[0];

          console.log("clicked", feature)

        let popup = new MapboxGl.Popup({ offset: [0, 0] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML('<h3>' + feature.properties.SITENAME + '</h3><p>' + feature.properties.YEARBUILT + '</p>')
           .setLngLat(feature.geometry.coordinates)
          .addTo(map);


  });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.children !== this.props.children ||
      nextState.map !== this.state.map
    );
  }

  render() {
    const { children } = this.props;
    const { map } = this.state;
    return (
      <div
        className="Map"
        ref={x => {
          this.container = x;
        }}
      >
        {map && children}
      </div>
    );
  }
}

export default Map;
