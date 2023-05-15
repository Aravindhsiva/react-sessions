import React, { Fragment, useEffect, useState } from 'react'
import Card from '../../components/card';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

function SearchProducts() {

    let [list, setList] = useState([])
    let [filter, setFilter] = useState([])

    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then((res) => {
                let filterDup = res.map(i => i.category);
                setFilter([...new Set(filterDup)]);
                setList(transformResponse(res));
            })
    }, [searchParams])

    const transformResponse = (list) => {
        let finalList = [];
        let count = 4;
        const filterValue = searchParams.get("category");
        for (let i = 0; i < list.length; i += count) {
            let miniList = list.slice(i, i + count).map(animal => {
                animal['isExtended'] = false;
                return animal;
            });
            if(filterValue!==null && filterValue!=="")
                miniList = miniList.filter(item => item.category == filterValue);
            finalList.push(miniList);
        }
        return finalList;
    }

    const handleReadMoreEvent = (index, cIndex, id) => {
        console.log("Handling an event for item : " + id);
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
                <div className='row'>
                    <div className="col-2">
                        {filter.map(f => {
                            return <span key={f} className='badge bg-success' onClick={(e) => {
                                setSearchParams({ category: f });
                            }}>{f}</span>
                        })}
                        <button className='btn btn-danger btn-sm' onClick={e=>{
                            setSearchParams({});
                        }}>Reset Filter</button>
                    </div>
                    <div className="col-9">
                        {list.map((miniList, index) =>
                            <div className="row align-items-start mt-3" key={index}>
                                {miniList.map((product, cIndex) => {
                                    return <Card key={product.id} product={product} onReadMoreClicked={(id) => handleReadMoreEvent(index, cIndex, id)} >
                                        <br />
                                        <button className="btn btn-sm btn-secondary">Click Me</button>&emsp;
                                        <Link to={"/payment/" + product.id}><button className="btn btn-sm btn-primary">View in Detail</button></Link>
                                    </Card>
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default SearchProducts