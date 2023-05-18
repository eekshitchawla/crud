import React from 'react';
import './App.css';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar'
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 700,
          title: "Onepluss",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 900,
          title: "I Phone",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 800,
          title: "Samsoong",
          qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }
  handleIncQuan = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);
    products[idx].qty += 1;
    this.setState({ products });
  };
  handleDecQuan = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);
    if (products[idx].qty > 0) products[idx].qty -= 1;
    this.setState({ products });
  };
  handleDelete = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({ products: items });
  };
  getCartCount =()=>{
    const {products} = this.state;
    let count=0;
    products.forEach((product)=>{
      count+= product.qty;
    })
    return count; 
  }
  getTotal =()=>{
    const {products}= this.state;
    let count=0;
    products.forEach((product)=>{
      count+= product.qty*product.price;
    })
    return count; 
  }
  render(){
    const {products} =  this.state
    return (
      <div className="App">
        <Navbar
          count = {this.getCartCount()}
        />
        <Cart
          products = {products}
          onIncQuan={this.handleIncQuan}
          onDecQuan={this.handleDecQuan}
          onDelete={this.handleDelete}
        />
        <div style={{fontWeight:600, fontSize:26, margin:20}}>
          TOTAL: {this.getTotal()}
        </div>
      </div>
    );
  }
}

export default App;

