import React from "react";

const Gallery = ({productItems,handleAddtoCart}) => {
    return (
        <div>
        
            <div className="carousel slide" data-bs-ride="carousel" id="banner">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src='https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600' className="d-block w-100" height="400"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" height="400"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src='https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=600' className="d-block w-100" height="400"/>
                    </div>
                </div>
                
                    <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#banner">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#banner">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                
                    <div className="carousel-indicators">
                        <button data-bs-slide-to="0" data-bs-target="#banner" className="active"></button>
                        <button data-bs-slide-to="1" data-bs-target="#banner"></button>
                        <button data-bs-slide-to="2" data-bs-target="#banner"></button>
                    </div>

            </div>

            <div className="d-flex flex-wrap">
                {
                    productItems.map(product =>
                        <div className="card m-2 p-2" key={product.id} style={{width:'298px'}}>
                            <img src={product.pic} className="card-img-top" height='210' alt="img-gallery" />
                            <div className="card-header text-center">
                                <h3 className="card-title">Product Name : <i className="text-danger"> {product.name}</i></h3>
                            </div>
                            <div className="card-body text-center">
                                <h5>Price: <b className="text-warning">&#8377;</b> <b>{product.cost}</b></h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary w-100" onClick={()=>handleAddtoCart(product)}> <b class="bi bi-cart4"></b> Add to Cart</button>
                            </div>
                        </div>
                    )
                }
            </div> 
            
        </div>
    )
}
export default Gallery;