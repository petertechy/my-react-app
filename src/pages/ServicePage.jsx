import React from 'react'
import style from "../style/ServicePage.module.css"
import NavBar from '../component/Navbar'

const ServicePage = () => {
  return (
    <div>
        <NavBar/>
        <h1 className={style.text}>Service Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat accusamus ex laboriosam, eum dicta explicabo est! Dolores dolorum nostrum, est consectetur perspiciatis accusantium, mollitia libero, voluptatum vitae totam molestiae repellendus.</p>
    </div>
  )
}

export default ServicePage

