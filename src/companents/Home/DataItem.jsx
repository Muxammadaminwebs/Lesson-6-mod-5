import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
const DataItem = () => {
    const { name } = useParams();
    console.log(name)
    const back = useNavigate();
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const getDataFetch = async () => {
        const res = await fetch(`https://restcountries.com/v2/name/${name}`);
        const result = await res.json();
        setData(result);
        setLoad(true);
    }
    useEffect((name) => {
        getDataFetch(name)
    }, [name])
    // console.log(data);
    return (
        <div className='overflow-hidden'>
            <div className="row ">
                <button className="btn btn-danger mx-auto mt-5 w-25" onClick={()=>back(-1)}>back</button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {
                            load ? <>
                                <img src={data[0].flags.png} alt="img" className="mx-auto d-block my-5" />
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-6 col-lg-6 col-sm-12">
                                                <p className="mt-5 fs-3"><strong className="text-primary ">Name:</strong >{data[0].name}</p>
                                                <p className="mt-5 fs-3"><strong className="text-primary ">Capital:</strong >{data[0].capital}</p>
                                                <p className="mt-5 fs-3"><strong className="text-primary ">Region:</strong >{data[0].region}</p>
                                                <p className="mt-5 fs-3"><strong className="text-primary ">Nativename:</strong >{data[0].nativeName}</p>
                                                <p className="mt-5 fs-3"><strong className="text-primary ">Timezone:</strong >{data[0].timezones}</p>
                                            </div>
                                            <div className="col-lg-6 col-lg-6 col-sm-12">
                                                <p className="mt-5 fs-3"><strong className="text-primary ">Numer Code:</strong >{data[0].numericCode}</p>
                                                <p className="mt-5 fs-3"><strong className="text-primary ">Currency:</strong >{data[0].currencies[0].symbol}</p>
                                                <p className="mt-5 fs-3"><strong className="text-primary ">Language:</strong >{data[0].languages[0].name}</p>
                                                <p className="mt-5 fs-3"><strong className="text-primary ">Population:</strong >{data[0].population}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </> : <>
                            </>
                            }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DataItem;