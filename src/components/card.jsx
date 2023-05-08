import React from 'react'

const Card = (props) => {
    let { product, onReadMoreClicked, children } = props;
    console.log(props);
  return (
      <div class="col-3" key={product.id}>
          <div class="card">
              <img class="card-img-top p-5" src={product.image} alt="..." width={100} height={300} />
              <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <span class="card-text">{!product.isExtended && product.description.length > 20 ? product.description.substring(0, 10) + "..." : product.description}</span>
                  {(!product.isExtended && product.description.length > 20) && <a onClick={e => { onReadMoreClicked(product.id) }}>Read more</a>}
                  {children}
              </div>
          </div>
      </div>
  )
}

export default Card