import React from 'react'

export default function Product({id, src, name, price, updateCart}) {

  const product = {_id: id,image: src,name: name,price: price}

  if(!localStorage.getItem('ecomm_cart')) localStorage.setItem('ecomm_cart',JSON.stringify([]))
  let cart = JSON.parse(localStorage.getItem('ecomm_cart'))
  const itemPresent = cart.filter(cart_item=>{
    return cart_item._id === product._id
  }).length

  const addToCart = e => {

    if(itemPresent===0){
        cart.push(product)
        e.target.style.backgroundColor = 'grey'
        localStorage.setItem('ecomm_cart',JSON.stringify(cart))
    }else{
        let reducedCart = cart.filter(cart_item=>cart_item._id !== product._id)
        e.target.style.backgroundColor = 'var(--blue)'
        localStorage.setItem('ecomm_cart',JSON.stringify(reducedCart))
    }

    const noOfItems = JSON.parse(localStorage.getItem('ecomm_cart')).length
    updateCart(noOfItems)
  }

  return (
    <div className="product">
        <div className="product_image">
            <img src={src} alt={'Picha ya ' + name} />
        </div>
        <div className="product_name">
            {name}
        </div>
        <div className="product_price">
            {`TSH ${price} /=`}
        </div>
        <button onClick={addToCart} style={itemPresent===0 ? {backgroundColor: 'var(--blue)'} : {backgroundColor: 'grey'}}>Kikapu +</button>
    </div>
  )
}
