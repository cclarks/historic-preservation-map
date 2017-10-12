import React, { Component } from "react";
import PropTypes from "prop-types";
import MapboxGl from "mapbox-gl/dist/mapbox-gl.js";
import { RotationControl } from "react-mapbox-gl";

import { withRouter } from 'react-router-dom'

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
      style:"mapbox://styles/codyclarks/cj8euvletafbj2rksdkeqktvo",
      center: [-84.993639, 29.7271173],
      zoom: 15,
      "layers": [{
                   "id": "town-data",
                   "type": "raster",
                   "source": "codyclarks.5b5ed4cw",
                   "minzoom": 0,
                   "maxzoom": 20
               }],
      legendControl: [{
        position: "topright"
      }]
    });

    // map.legendControl.addLegend('<strong>My walk from the White House to the hill!</strong>');


  //   map.flyTo({
  //     center: [-84.993639, 29.7271173],
  //     zoom: 15,
  //     duration: 1,
  //     easing(t) {
  //       return t;
  //     }
  //  })

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

    map.on('click', (e) => {
      let features = map.queryRenderedFeatures(e.point, {
        layers: ['original'],
      });

      if (!features.length) {
        return;
      }

      let feature = features[0];

        console.log("clicked", feature)

      let popup = new MapboxGl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML(feature.properties.SITENAME)
        .addTo(map)

      this.props.history.push(`/sites/${feature.properties.SITEID}`)
    });

    // map.on('mouseenter', 'places', function(e) {
    //   map.getCanvas().style.cursor = 'pointer';
    // });

    // map.on('mouseleave', 'places', function () {
    //   map.getCanvas().style.cursor = '';
    // });
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

export default withRouter(Map);
