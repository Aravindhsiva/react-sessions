import React, { Fragment, useEffect, useState } from 'react'

function ProductScreen() {

    let [list, setList] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then((res) => {
                setList(transformResponse(res));
            })
    }, [])

    const transformResponse = (list) => {
        let finalList = [];
        let count = 4;
        for (let i = 0; i < list.length; i += count) {
            const miniList = list.slice(i, i + count).map(animal =>{
                animal['isExtended'] = false;
                return animal;
            });
            finalList.push(miniList);
        }
        console.log(finalList);
        return finalList;
    }

    /*

    {
        text, type, isExtended
    }
    */

    return (
        <>
            <div className="container">
                {list.map((miniList, index)=>
                    <div className="row align-items-start mt-3">
                        {miniList.map((product, cIndex) => {
                            return <Fragment key={product.id}>
                                <div className="col-3">
                                    <div className="card">
                                        <img className="card-img-top p-5" src={product.image} alt="..." width={100} height={300} />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <span className="card-text">{!product.isExtended && product.description.length > 20 ? product.description.substring(0, 10) + "..." : product.description}</span>
                                            {(!product.isExtended && product.description.length > 20) && <a onClick={e=>{
                                                list = [...list];
                                                list[index][cIndex]["isExtended"] = true;
                                                setList(list);
                                            }}>Read more</a>}
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        })}
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductScreen