import React from 'react'
import Brand from '../../components/Brand'
import FilterProduct from '../../components/FilterProduct'
import SimpleSlider from '../../components/Slider'

const Home = () => {
  return (
    <div>
      <SimpleSlider />
      <FilterProduct />
      <Brand/>
    </div>
  )
}

export default Home