import React from 'react';


function ProfileCard(Card) {
  return (

    <div>
       <div data-aos="flip-left" className='card'>
           <div className='card-image-div'>
               <div>
               <img src={Card.img} className='card-image' />
               </div>
               <h1 className='profile-name'>{Card.name}</h1>
               <p className='job'>{Card.roll}</p>

               <div className='pro-icons'>
                  <a href={Card.insta} target="_blank"><div><i class="fab fa-instagram pro-icon"></i></div></a> 
                  <a href={Card.tw}  target="_blank"><div><i class="fab fa-twitter pro-icon"></i></div></a> 
                  <a href={Card.wa}  target="_blank"><div><i class="fab fa-whatsapp  pro-icon"></i></div></a> 
               </div>
               <div className='grd-b'></div>
           </div>
           
       </div>
    </div>
  );
}

export default ProfileCard;
