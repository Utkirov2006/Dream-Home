import React from 'react';

const Lists = () => {
    return (
        <div class="col-12 lists_blog d-xl-flex">
            <div class="lists_left">
                <img style={{ width: "100%" }} src="./src/img/ofis.png" alt="" />


            </div>
            <div class="lists_right">
                <h1 class="lists_title">Let’s Talk</h1>
                <p class="lists_desc">Website that provides services for selling property and various types of properties along with strategic home building locations, building houses.</p>
                <input type="text" placeholder='Your Email Address'/>   
                <input type="submit" placeholder='Send'/>
            </div>

        </div>
    );

};
export default Lists;