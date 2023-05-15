import React from 'react'

const Card = (props) => {
    let { product, onReadMoreClicked, children } = props;
    return (
        <div className="col-3" key={product.id}>
            <div className="card">
                <img className="card-img-top p-5" src={product.image} alt="..." width={100} height={300} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <span className="card-text">{!product.isExtended && product.description.length > 20 ? product.description.substring(0, 10) + "..." : product.description}</span>
                    {(!product.isExtended && product.description.length > 20) && <a onClick={e => { onReadMoreClicked(product.id) }}>Read more</a>}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card