import React from 'react';

const Boxs = () => {
    return (
        <>
            <h1 class="boxs_tit">Real Estate Empire</h1>

            <div class="col-12 boxs_blog d-xl-flex">

                <div class="boxs_left d-flex flex-column justify-content-around align-items-center text-xl-start text-center">
                    <h1 class="boxs_title">Real State is Building Homes in the Middle of the Desert</h1>
                    <p class="boxs_desc">Website that provides services for selling property and various types of properties along with strategic home building locations, building houses.</p>
                    <button class="boxs_btn">Read More</button>

                </div>
                <div class="boxs_right">

                    <img src="./src/img/Xona.png" className='xona' />


                </div>

             


            </div>
        </>
    );
};

export default Boxs;