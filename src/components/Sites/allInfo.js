import React, { Component } from 'react'


export default class siteAll extends Component {
  constructor() {
    super()
  }

  render () {
    return(
      <div className="container-description">
        <div className="header">
          <div className="back-button">
            <a href="">I Class</a>
          </div>
        </div>
        <div className="all-info">
            <h1 key={props.properties.SITEID}>Site Name: {props.properties.SITENAME}</h1>
            <div className="description-secondary">
              <span className="site-descript address"><h3>Address: </h3>{props.properties.ADDRESS} </span>
              <span className="site-descript year-built"><h3>Year Built: </h3>{props.properties.YEARBUILT}</span>
              <span className="site-descript style"><h3>Style: </h3>{props.properties.STYLE} </span>
              <span className="site-descript description"><h3>Description: </h3>{props.properties.DESCRIPT} </span>
              <span className="site-descript destroyed"><h3>Destroyed: </h3>{props.properties.DESTROYED} </span>
              <span className="site-descript survey-num"><h3>Survey Number: </h3>{props.properties.SURVEYNUM} </span>
              <span className="site-descript architect"><h3>Architect: </h3>{props.properties.ARCHITECT} </span>
              <span className="site-descript surveval"><h3>Survey Value: </h3>{props.properties.SURVEVAL} </span>
              <span className="site-descript survedist"><h3>Survey Distance: </h3>{props.properties.SURVEDIST} </span>
              <span className="site-descript shpoeval"><h3>Shpoe Value: </h3>{props.properties.SHPOEVAL} </span>
              <span className="site-descript d-nrlisted"><h3>D NR Listed: </h3>{props.properties.D_NRLISTED} </span>
              <span className="site-descript plotmthd"><h3>Plot Method: </h3>{props.properties.PLOTMTHD} </span>
              <span className="site-descript fglaqdate"><h3>FGDLAQ Date: </h3>{props.properties.FGDLAQDATE} </span>
              <span className="site-descript autoid"><h3>Auto ID: </h3>{props.properties.AUTOID} </span>
              <span className="site-descript fid-city-l"><h3>FID City: </h3>{props.properties.FID_CITY_L} </span>
              <span className="site-descript ext-plan"><h3>Ext Plan: </h3>{props.properties.EXTPLAN} </span>
            </div>

        </div>
      </div>
    )
  }
}
