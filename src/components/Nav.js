import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({no}) {
 
  return (
    <nav>
        <div className="container">
            <Link to="/" style={{textDecoration: 'none'}}>
              <div id="logo">Jiko<span>Buy</span></div>
            </Link>           
            <Link to="/kikapu" style={{textDecoration: 'none'}}>
              <button>
                  <span>Kikapu</span>
                  <div id="order_counter">{no}</div>
              </button>
            </Link>
        </div>
    </nav>
  )
}
