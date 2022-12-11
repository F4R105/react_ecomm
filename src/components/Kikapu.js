import React from 'react'
import { Link } from 'react-router-dom'

export default function Kikapu() {

    const vifaaKapuni = JSON.parse(localStorage.getItem('ecomm_cart'))
    let total = 0
    vifaaKapuni.forEach(kifaa=>{
        total = total + kifaa.price
    })

    return (
        <section id="kikapu">
        <div className="container">
            <div id="item_wrapper">
                {                  
                    vifaaKapuni.map(kifaa=>{
                        return(
                            <div className="kikapu_item" key={kifaa._id}>
                                <div className="item_image">
                                    <img src={kifaa.image} alt="" />
                                </div>
                                <div className="item_name">{kifaa.name}</div>
                                <div className="item_price">{kifaa.price}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div id="items_cost">
                <span>TOTAL</span>
                <div id="total_cost">{total}</div>
            </div>
            <Link to='/checkout' style={{textDecoration: 'none'}}>
                <button>Weka oda</button>
            </Link>
        </div>
        </section>
    )
}
