import React from 'react'


const Sites = (props) =>
        <div className="container-description">
          <div className="description">
              <div className="description-main-all-sites">
                <h1 key={props.properties.SITEID}>{props.properties.SITENAME}</h1>
              </div>
              <div className="description-secondary-all-sites">
                <span className="address">{props.properties.ADDRESS} </span>
                <span className="year-built"> | {props.properties.YEARBUILT}</span>
              </div>
          </div>
        </div>


export default Sites
