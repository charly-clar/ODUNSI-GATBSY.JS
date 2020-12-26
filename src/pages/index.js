import React from "react"
import "../styles/style.scss"

import Header from '../components/header';
import Banner from '../components/banner';
import AboutBlurb  from '../components/aboutBlurb';


const IndexPage = () => (
  <div>
        <Header/>
    <Banner/>
  <AboutBlurb/>
  </div>
)


export default IndexPage
