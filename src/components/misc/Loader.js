import React from 'react';
import ReactLoading from 'react-loading';

function Loader() {
    return (
        <div className='load-container'>
            <ReactLoading
                type='spin'
                color='#564fcc'
                height={'10%'}
                width={'10%'}
                className='loader'
            />
        </div>
    );
}

export default Loader;
