import React from 'react';

const Footer = () => {
    return (
        <div className="col-12 footer d-flex flex-xl-row flex-column bg-secondary justify-content-between ">
            <div className="footer_menu">
                <h3 className='footer_title'>PROPERTY.io</h3>

            </div>
            <div className="footer_menu h-100 d-flex flex-column text-xl-start text-center justify-content-center">
                <p className="text-light">About Us</p>
                <p className="text-light">Contact</p>
                <p className="text-light">Blog</p>
            </div>

            <div className="footer_menu h-100 d-flex flex-column text-xl-start text-center justify-content-center mb-xl-0 mb-4">
                <p className="text-light">Careers</p>
                <p className="text-light">Support</p>
                <p className="text-light">Privacy Policy</p>
            </div>
            <div className="footer_menu h-100 d-flex flex-column justify-content-center align-xl-items-end align-items-center">
                <div classNameName="footer_fluid">
                    <a style={{ color: "#0000FF", margin: "10px" }} href="https://www.facebook.com/profile.php?id=100081500887925"><i className="fab fa-facebook"></i></a>
                    <a style={{ color: "#C32F92", margin: "10px" }} href="https://www.instagram.com/uthkirov_boburbek/"><i className="fab fa-instagram"></i></a>
                    <a style={{ color: "#0000FF", margin: "10px" }} href="https://vk.com/"><i className="fab fa-vk"></i></a>
                    <a style={{ color: "#000000", margin: "10px" }} href="https://www.twitter.com/uthkirov_boburbek/"><i className="fab fa-twitter"></i></a>
                    <a style={{ color: "#000000", margin: "10px" }} href="https://www.behance.net/boburbeuthkiro"> <i className='fab fa-behance'></i></a>
                    <a style={{ color: "#BB0F23", margin: "10px" }} href="https://www.pinterest.com/boburbekutkirov/"><i className="fab fa-pinterest"></i></a>
                    <a style={{ color: "#1275B1", margin: "10px" }} href="https://www.linkedin.com/in/boburbek-uthkirov-bb4265243/"><i className='fab fa-linkedin-in'> </i></a>
                    <a style={{ color: "#3995DB", margin: "10px" }} href="https://www.skype.com/ru/"> <i className='fab fa-skype'></i></a>

                </div>

                <p className="text-primary m-3"><a href="https://mail.google.com/mail/u/0/?tab=rm#inbox">@Boburbek Alturist</a></p>
            </div>

        </div>


    );
};

export default Footer;