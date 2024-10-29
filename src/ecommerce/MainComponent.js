import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Navbar from "./Navbar"
import Gallery from "./Gallery"
import Cart from "./Cart"
import { useState } from "react"

const MainComponent=()=>{
   
    const [cartProducts,setCartProducts] = useState([]);
    
    const handleAddtoCart = (product)=>{ 
       setCartProducts(cartProducts =>[...cartProducts,{item:product,quantity:1}]) ;     //Adding elements into cart
        alert(`${product.name} is added to cart`)
    }

      const increaseQuantity=(id)=>{ 
         const updatedItems = cartProducts.map(eachProduct=>{
             if(eachProduct.item.id===id){
                 eachProduct.quantity++;
                //  return{...eachProduct,quantity:eachProduct.quantity+1}
                }
                // console.log(product.quantity);
            return eachProduct;
        })
        console.log(updatedItems);
        
       setCartProducts(updatedItems)
     }

    const decreaseQuantity=(id)=>{
        const updatedItems = cartProducts.map(eachProduct=>{
            if(eachProduct.item.id===id){
                // eachProduct.quantity--;
                if(eachProduct.quantity!==1){
                    eachProduct.quantity--;
                }
            }
            return eachProduct;
        })
        setCartProducts(updatedItems);
    }

    const handleDelete=(id)=>{
        const remainingProducts = cartProducts.filter((eachProduct)=>eachProduct.item.id!==id);
        setCartProducts(remainingProducts)
    }

    const data = [
        {id:1,name:'Laptop',cost:49999,ocost:75000,pic:'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
        {id:2,name:'Mobile',cost:34999,ocost:53000,pic:'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600'},
        {id:3,name:'Refrigerator',cost:32999,ocost:42000,quantity:1,pic:'https://images.pexels.com/photos/6508357/pexels-photo-6508357.jpeg?auto=compress&cs=tinysrgb&w=600'},
        {id:4,name:'LED TV',cost:34999,ocost:45000,quantity:1,pic:'https://rukminim2.flixcart.com/image/832/832/xif0q/television/6/s/d/ua55cue60aklxl-samsung-original-imagp7uytgbgbsyp.jpeg?q=70'},          
        {id:5,name:'Washing Machine',cost:25000,ocost:33000,quantity:1,pic:'https://images.pexels.com/photos/8142971/pexels-photo-8142971.jpeg?auto=compress&cs=tinysrgb&w=600'},
        {id:6,name:'Headset',cost:1499,ocost:2300,quantity:1,pic:'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600'},
        {id:7,name:'Smart Watch',cost:1999,ocost:35000,quantity:1,pic:'https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=600'},
        {id:8,name:'Bluetooth Speaker',cost:2999,ocost:3500,quantity:1,pic:'https://rukminim2.flixcart.com/image/832/832/xif0q/speaker/mobile-tablet-speaker/j/6/f/powerpact-bass-stereo-audio-color-changing-led-light-wireless-original-imagn2jcyxbjmwhp.jpeg?q=70'},
        {id:9,name:'Camera',cost:30000,ocost:35000,quantity:1,pic:'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600'}
    ];

   
    return(
        <div>
            <Router>
                <Navbar />

                <Routes>
                    <Route exact path="/cart" element={<Cart cartProducts={cartProducts} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} handleDelete={handleDelete} />}></Route>
                    <Route exact path="/" element={<Gallery productItems={data} handleAddtoCart={handleAddtoCart} />}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default MainComponent
