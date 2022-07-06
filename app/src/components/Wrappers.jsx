import React from 'react';

const Wrappers = () => {
    return (
        <>
            <div className="col-12 wrapper">

                <h1 class="wrappers_tit">Real State: Creating <br /> Home for Families</h1>

                <div class="col-12 boxs_blog d-xl-flex">
                    <div class="boxs_right">

                        <img src="./src/img/Xona2.png" className='xona' />
                    </div>



                    <div class="boxs_left d-flex flex-column justify-content-around align-items-center text-xl-start text-center">
                        <h1 class="boxs_title">Real State is Building Homes in the Middle of the Desert</h1>
                        <p class="boxs_desc">Website that provides services for selling property and various types of properties along with strategic home building locations, building houses.</p>
                        <button class="boxs_btn">Read More</button>
                        <div className="wrapper-img d-xl-flex">
                            <img style={{width:"100%"}} className="mt-4" src="./src/img/xonalar (1).png" />
                            <img style={{width:"100%"}} className="mt-4" src="./src/img/xonalar (4).png" />
                            <img style={{width:"100%"}} className="mt-4" src="./src/img/xonalar (3).png" />

                        </div>



                    </div>

                </div>
            </div>
        </>
    );
};

export default Wrappers;