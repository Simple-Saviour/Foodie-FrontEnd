// import React from 'react';
// import { Link } from 'react-router-dom';
// export default function Footer() {
//   return (
//     <div>
//       <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
//         <div className='col-md-4 d-flex align-items-center'>
//           <Link
//             to='/'
//             className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
//           ></Link>
//           <span className='mb-3 mb-md-0 text-muted'>© 2023 Foodie, Inc</span>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React from 'react'
import {Facebook , Instagram, LinkedIn  ,GitHub , Call , Mail , LocationCity} from '@material-ui/icons'
const Footer = () => {
    return (
        <>
            <div className="Footer" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-12 ft-1 mb-3">
                            <h3><span>FOODIE</span></h3>
                            <p>Foodie is a food ordering website where you can satisfy your appetite with a wide range of delicacies which will rejuvinate your paletes. 
                              Our website is dedicated to sharing our love for food with you.
                              We believe that food should not only be delicious but also healthy and sustainable.</p>
                            <div className="footer-icons">
                              <a href='https://github.com/Simple-Saviour'><GitHub/></a>
                              <a href='https://www.linkedin.com/in/aryan-bitm/'><LinkedIn/></a>
                              <a href='https://www.instagram.com/simplesaviour/'><Instagram/></a>
                              <a href='https://www.facebook.com/profile.php?id=100006714703435'><Facebook/></a>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-6 col-12 ft-1 justify-center" >
                            <h3>Contact Us</h3>
                            <p><Call/> +91 8340 686 792</p>
                            <p><Mail/> aryanchoudhary047@gmail.com</p>
                            <p><LocationCity/> Birla Institute of Technology, Ranchi, India.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Designed By Aryan | © 2023 <i>Foodie</i></p>
            </div>
        </>
    )
}

export default Footer