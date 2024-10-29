import React from "react";

const Cart=({cartProducts,increaseQuantity,decreaseQuantity,handleDelete})=>{
            //Total Amount
   var Total =0;
    cartProducts.map(product =>(
        Total += product.item.cost*product.quantity)
    );

    var oTotal=0;
    cartProducts.map(product=>(
       oTotal+=product.item.ocost*product.quantity
    ))
    const saveAmount=oTotal-Total;
    // const Total = cartProducts.reduce((Total,product)=>{
    //     Total+=product.item.cost*product.quantity;
    // },0)

//styles
const imageContainer={position:'relative',display:'inline-block'}
const btnClose={
    position:'absolute',
    right:'5px',
    top:'5px',width:'24px',height:'24px',cursor:'pointer',
}
const cardTitle={
    fontFamily:'Trebuchet MS,Verdana,sans-serif',fontWeight:"bold",color:'tomato'
}
// if(Total===0){
//     return<h2>Products are not yet added to cart</h2>
// }
    
    const confirmClick=()=>{
        //eslint-disable-next-line no-restricted-globals
        const flag= confirm(`Are you ready to pay this amount ${Total} . \n You saved ${saveAmount} Rs.`);
        flag===true ? alert(`${Total} amount is debited from your Account.\n Thank you for Shopping.`) : alert(`Your order is not confirmed.\n plz try again`)
        // if(flag==true){
        //     alert(`${Total} amount is debited from your Account.\n Thank you for Shopping.`) 
        // }else{
        //     alert(`Your order is not confirmed.\n plz try again`)
        // }
    }
    const body ={
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        textAlign: 'center',
        margin: 0,
        padding: 0,
    }


    return(
        <div style={body}>
            <div className="container row" style={{margin:'auto'}}>
                {
                    cartProducts.map(product =>
                        <div className="card m-2 p-2" key={product.item.id} style={{width:'350px'}}>
                            <div  style={imageContainer}>

                            <img src={product.item.pic} className="card-img-top" width='300' height='230' alt="img-loading" />
                            <button onClick={()=>handleDelete(product.item.id)} style={btnClose} className="btn btn-close btn btn-danger" ></button>
                            </div>
                            <div className="card-header">
                                <h3 className="card-title" style={cardTitle}>{product.item.name}</h3>
                            </div>
                            <div className="card-body">
                                <h5>Price : &#8377;{product.item.cost} &nbsp; <del className="text-danger" style={{fontWeight:'bold',fontSize:'23px'}}>&#8377; {product.item.ocost}</del></h5>
                            </div>
                            <div className="card-footer">
                                <div className="btn-group" role="group">
                                    <button onClick={()=>decreaseQuantity(product.item.id)} className="btn btn-primary"  type="button">-</button>
                                    <button className="btn btn-primary" type="button">{product.quantity}</button>
                                    <button onClick={()=>increaseQuantity(product.item.id)} className="btn btn-primary"   type="button">+</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {Total===0 && <h2><code>Products are not yet added to cart</code></h2>}
            <div id="jumbotron" style={{backgroundColor:'#eeeeee'}}>
                <div className="m-4 p-4">
                    <h1 className="display-4" style={{textShadow:'3px 3px 5px #000',fontFamily:'Modak'}}> Total Cart Price:<b style={{color:'blue'}}> {Total} </b>Rs</h1>
                    <p className="lead">
                        <a className="btn btn-success btn-lg" href="#" id='button' role="button" onClick={confirmClick}>Make Payment <i className="bi bi-cash"></i></a>
                    </p>
                </div>
            </div>
        </div>
    )
 }

export default Cart;