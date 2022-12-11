import { Link } from 'react-router-dom'

export default function Checkout() {
  return (
    <section id="checkout">
        <div className="container">
            <form action="">
                <h1>Malipo</h1>
                <div>
                    <label for="">JIna Kamili</label>
                    <input type="text" />
                </div>
                <div>
                    <label for="">Mahala</label>
                    <input type="text" />
                </div>
                <div>
                    <label for="">Njia ya malipo</label>
                    <div id="malipo">
                        <label for="mpesa" className="malipo">
                            <img src="./images/M-pesa-logo.png" alt="" />
                        </label>
                        <input type="radio" name="malipo" id="mpesa" />
                        <label for="tigopesa" className="malipo">
                            <img src="./images/tigo-pesa logo.png" alt="" />
                        </label>
                        <input type="radio" name="malipo" id="tigopesa" />
                        <label for="azampay" className="malipo">
                            <img src="./images/azampay logo.png" alt="" />
                        </label>
                        <input type="radio" name="malipo" id="azampay" />
                    </div>
                </div>
                <div>
                    <Link style={{textDecoration: 'none'}}>
                        <button>WEKA ODA</button>
                    </Link>
                </div>
            </form>
        </div>
    </section>
  )
}