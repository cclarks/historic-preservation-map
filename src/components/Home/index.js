import React from 'react'
import './index.css'
import wefings from '../../assets/wefings.jpg'

const Home = () => (
<div className="main-home">
  <div className="banner">
    <h4>history, meet adventure</h4>
    <h2>mapApp</h2>
    <h4>your historical adventure awaits</h4>

  </div>
  <section className="second-banner">
    <img src={wefings} alt="" width="500px" height="250px" />
    <div className="main-content">
      <h2>history isn't for the books anymore</h2>
      <p>mapApp makes it simple & easy to view,
        explore and learn about historical sites
        and structures around the city of Apalachicola</p>
    </div>
  </section>
  <h2 id="foundation">our foundation</h2>
  <section className="bottom-section">
      <div className="left-content">
        <img src="http://via.placeholder.com/300x300" />
        <h2>map</h2>
      </div>
      <div className="middle-content">
        <img src="http://via.placeholder.com/300x300" />
        <h2>search</h2>
      </div>
      <div className="right-content">
        <img src="http://via.placeholder.com/300x300" />
        <h2>navigation</h2>
      </div>
  </section>
</div>
)

export default Home
