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
            <div class="container">
                {list.map((miniList, index)=>
                    <div class="row align-items-start mt-3">
                        {miniList.map((product, cIndex) => {
                            return <Fragment key={product.id}>
                                <div class="col-3">
                                    <div class="card">
                                        <img class="card-img-top p-5" src={product.image} alt="..." width={100} height={300} />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title}</h5>
                                            <span class="card-text">{!product.isExtended && product.description.length > 20 ? product.description.substring(0, 10) + "..." : product.description}</span>
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