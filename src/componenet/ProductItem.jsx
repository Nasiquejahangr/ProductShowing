import React from 'react'

function ProductItem(props) {
    return (
        <> 
        
        <div>
            <div className="card" >
                <p className='text-center my-3'>{props.category}</p>
                <img src={props.image[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">{props.price}</a>
                    <p style={{color:"red", textDecoration:"underline"}}>{"Discount :$"}{props.discountPercentage}</p>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default ProductItem