import React from 'react'
// import { Link } from 'react-router-dom'
import Product from './Product.js'

export default function Products({ products, search, updateCart }) {

  return (
    <section id="products">
        <div className="container">
            <div id="products_wrapper">
              {products
              .filter(product=>{
                const productName = product.name.toLowerCase()
                return(
                  productName.includes(search.toLowerCase())
                )
              })
              .map(Kifaa=>{
                return(
                  // <Link to='/kifaa' style={{textDecoration: 'none'}}>
                    <Product 
                    key={Kifaa._id} 
                    id={Kifaa._id} 
                    src={Kifaa.image} 
                    name={Kifaa.name} 
                    price={Kifaa.price}
                    updateCart={updateCart} />
                  // </Link>
                )
              })}
            </div>
        </div>
    </section>
  )
}
