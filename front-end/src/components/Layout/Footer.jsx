import React from 'react'
import { useState } from 'react'
import {  useSelector  } from 'react-redux';
import './Footer.css';

const Footer = () => {
    return (
<body>
<footer>
    <div className='footer-content'>
        <h3>Chi Phan Learning Center</h3>
            <p>
                Thông tin liên hệ:
                📙 52-54 Bàu Cát 7, Phường 14, Quận Tân Bình, Thành phố Hồ Chí Minh 
                ☎️ 028 36 363 034 (Office). 
                Hotline: 098 901 0201 (Zalo)
                Email: parent@chiphan.com
            </p>
        <ul className='Socials'>
            <li><a href='#' ><i class="fab fa-facebook"></i></a></li>
            <li><a href='#' ><i class="fab fa-twitter"></i></a></li>
            <li><a href='#' ><i class="fab fa-google-plus-g"></i></a></li>
            <li><a href='#' ><i class="fas fa-envelope"></i></a></li>
        </ul>
    </div>
        <div className="footer-bottom">
            <p>Copyright &copy;2020 ChiPhanLearningCenter.</p>
        </div>
</footer></body>
    )
}
export default Footer