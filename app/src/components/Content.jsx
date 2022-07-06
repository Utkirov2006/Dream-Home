import React from 'react';

const Content = () => {
    return (
        <div className='col-12 content_blog'>
            <h1 className='content_title'>We Built Houses, Now We're <br /> Building a Real Estate Empire</h1>
            <div className="col-12 d-xl-flex ">
                <img style={{ width: "100%" }} className='d-xl-block d-none ' src="./src/img/kitchen2.png" />

                <img style={{ width: "100%" }} className="m-2 " src="./src/img/kitchen.png" />

                <img className='d-xl-block d-none m-2' src="./src/img/kitchen3.png" />


            </div>
            <h5 className='content_title'> Website that provides services for selling property and various types of properties along with strategic home building locations, building houses.</h5>


        </div>
    );
};

export default Content;