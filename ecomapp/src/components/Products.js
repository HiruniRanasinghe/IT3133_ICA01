import {useState} from 'react';
import {flowers} from './FlowerDB';
import '../assets/CSS/layout.css';


export default function Products(){
    const [cart,setCart] = useState([]);

    const addToCart = (flower,quantity)=>{
        if (quantity >0){
            const existingItem=cart.find(item=>item.id === flower.id);
                }
    }
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        flowers.map(flower => (
                            <div key={flower.id} className="card">
                              <img
                                src={flower.img}
                                alt={flower.name}
                                className="card-img-top"
                                style={{ width: "100px", height: "100px" }}
                              />
                              <div className="card-body">
                                <h5>{flower.name}</h5>
                                <p>Price: ${flower.price}</p>
                                <input
                                  type="number"
                                  min="1"
                                  placeholder="Quantity"
                                  id={`quantity-${flower.id}`}
                                  className="quantity-input"
                                />
                                <button
                                  onClick={() =>
                                    addToCart(
                                      flower,
                                      parseInt(
                                        document.getElementById(`quantity-${flower.id}`).value ||
                                          "0",
                                        10
                                      )
                                    )
                                  }
                                  className="btn btn-primary"
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    
                
            <div className="item3">
                
                //cart
                <h4>Shopping Cart</h4>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">Total:</td>
                <td>${calculateTotal().toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </>
  );
}
            