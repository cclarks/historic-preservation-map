import React, { Component } from 'react'
import Header from '../Sites/Header.js'
import Sites from '../Sites/'


class AllSitesTest extends Component {
  constructor(props) {
    super(props)

  }

  render () {
    return(
      <div>
        <Header
          search={this.state.search}
          updateSearch={this.updateSearch}
          setSort={this.setSort}
        />
        <div className="list">
          {filterSites.map(site =>
            <Link to="/sites/:siteID">
              <Sites key={site.properties.SITEID} properties={site.properties} />
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default AllSitesTest
