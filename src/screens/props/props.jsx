import React, { Fragment, useEffect, useState } from 'react'
import Card from '../../components/card';

function PropsExample() {

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
            const miniList = list.slice(i, i + count).map(animal => {
                animal['isExtended'] = false;
                return animal;
            });
            finalList.push(miniList);
        }
        return finalList;
    }

    const handleReadMoreEvent = (index, cIndex, id) => {
        console.log("Handling an event for item : "+id);
        list = [...list];
        list[index][cIndex]["isExtended"] = true;
        setList(list);
    }

    // props -> pass value
    // props -> pass method
    // props -> children
    return (
        <>
            <div class="container">
                {list.map((miniList, index) =>
                    <div class="row align-items-start mt-3">
                        {miniList.map((product, cIndex) => {
                            return <Card product={product} onReadMoreClicked={(id) => handleReadMoreEvent(index, cIndex, id)} >
                                <button className="btn btn-sm btn-secondary">Click Me</button>
                            </Card>
                        })}
                    </div>
                )}
            </div>
        </>
    )
}

export default PropsExample