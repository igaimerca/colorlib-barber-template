import React from 'react'
import './Gallery.styles.scss';

function Gallery() {
  return (
    <div className="gallery-area=">
        <div className="work-container">
            <div className="section-title text-center mb-90">
                <span>Our Image Gallery</span>
                <h2>SOME IMAGES FROM our <br></br> BARBER SHOP</h2>
            </div>
         <div className="row">
             <div className="work">
                 <img  className="work-image"src="https://images.unsplash.com/photo-1532710093739-9470acff878f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFyYmVyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="work1"></img>
             </div>
             <div className="work">
                 <img className="work-image" src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFyYmVyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="work1"></img>
             </div>
             <div className="work">
                 <img className="work-image" src="https://images.unsplash.com/photo-1593702295094-aea22597af65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhcmJlciUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="work1"></img>
             </div>
             <div className="work">
                 <img className="work-image" src="https://images.unsplash.com/photo-1593702288056-7927b442d0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhcmJlciUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="work1"></img>
             </div>
             
             
           </div>
         </div>
            
    </div>
  )
}

export default Gallery