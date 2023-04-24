import React, { useState } from 'react'
import Dish from './Dish'
import Categories from './Categories'
import items from './data'
import './index.css'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function Caffe() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <section className="section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
        <Categories categories={categories} filterItems={filterItems} />
        <Dish items={menuItems} />
      </div>
    </section>
  )
}

export default Caffe
