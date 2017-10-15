import React from 'react'


const Sites = (props) =>
        <div className="container-description">
          <div className="description">
              <div className="description-main-all-sites">
                <h1 key={props.properties.SITEID}>{props.properties.SITENAME}</h1>
              </div>
              <div className="description-secondary-all-sites">
                <h3 className="address">{props.properties.ADDRESS}  </h3>
                <br />
                <h3 className="year-built"> {props.properties.YEARBUILT}</h3>
              </div>
          </div>
        </div>


export default Sites
