import React from 'react';
import './Pricing.styles.scss';

function Pricing() {
  return (
    <div className='pricing_container'>
          
          
           <div className="pricing-table">
               <span className="heading">our best pricing</span>
               <h2>We provide best price <br></br> in the city!</h2>
             <div className="pricing-row">
                   
               <div className="pricing-list" id="a">
               <ul>
                   <li>Styling. . . . . . . . . . . . . . . . . . . . . . . . . . . . <span>$25</span></li>
                   <li>Styling + Color. . . . . . . . . . . . . . . . . . . <span>$65</span></li>
                   <li>Styling + Tint. . . . . . . . . . . . . . . . . . . . . .<span>$65</span></li>
                   <li> Semi-permanent wave. . . . . . . . . . . . .<span>$65</span></li>
                   <li> Cut + Styling. . . . . . . . . . . . . . . . . . . . . .<span>$63</span></li>
                   <li> Cut + Styling + Color. . . . . . . . . . . . . <span>$100</span></li>
                   <li> Cut + Styling + Tint. . . . . . . . . . . . . . . .<span>$100</span></li>
                  
                  
               </ul>
           </div>
                <div className="pricing-list" id="b">
                <ul>
                        <li>Cut. . . . . . . . . . . . . . . . . . . . . . . . . . . . .<span>$25</span></li>
                         <li>Shave. . . . . . . . . . . . . . . . . . . . . . . . . . <span>$65</span></li>
                         <li>Beard trim. . . . . . . . . . . . . . . . . . . . . . <span>$65</span></li>
                         <li>Cut + beard trim. . . . . . . . . . . . . . . . . <span>$65</span></li>
                         <li>Cut + shave. . . . . . . . . . . . . . . . . . . . . . .<span>$63</span></li>
                         <li>Clean up. . . . . . . . . . . . . . . . . . . . . . . . .<span>$100</span></li>
                </ul>
            </div>
            </div>
           
           
               
      </div>
      <div className='pricing-img'>
              <img src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="pricing-img"/> 
           </div>
        
    </div>
  )
}

export default Pricing