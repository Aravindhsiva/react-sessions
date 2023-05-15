import React, { Fragment, useEffect, useState } from 'react'
import Card from '../../components/card';
import { Link, Outlet } from 'react-router-dom';

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
            <div className="container">
                {list.map((miniList, index) =>
                    <div className="row align-items-start mt-3" key={index}>
                        {miniList.map((product, cIndex) => {
                            return <Card key={product.id} product={product} onReadMoreClicked={(id) => handleReadMoreEvent(index, cIndex, id)} >
                                <br/>
                                <button className="btn btn-sm btn-secondary">Click Me</button>&emsp;
                                <Link to={"/p/"+product.id}><button className="btn btn-sm btn-primary">View in Detail</button></Link>
                            </Card>
                        })}
                    </div>
                )}
            </div>
            <Outlet/>
        </>
    )
}

export default PropsExample