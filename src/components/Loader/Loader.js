import React from 'react';
import { Puff } from 'react-loader-spinner';
import "./Loader.css";
function Loader() {
    return (
        <div className='Loader'>
            <Puff
                height="150"
                width="150"
                radius={1}
                color="white"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader