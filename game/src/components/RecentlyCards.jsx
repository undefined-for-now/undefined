import React from 'react'

const RecentlyCards = () => {
   return (

      <div>
         <p className='max-w-p [1640px] mx-auto px-5'> Recently Played</p>
         <div className='max-w-p [1640px] mx-auto p-4 py-5 grid md: grid-cols-3 gap-6'>
            {/*Card */}
            <div className='rounded-xl relative'>
               {/*Overlay*/}
               <div className='absolute w-full h-full bg-black/50 rounded-xl'>
               <button className='border-white bg-amber-400 text-white mx-2 absolute bottom-4'>GAME START!</button>
               </div>
               <img
                  className='max-h-[160px] md:max-h-[500px] w-full object-cover rounded-xl'
                  src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg"
                  alt="" />

            </div>

            {/*Card */}
            <div className='rounded-xl relative'>

               {/*Overlay*/}
               <div className='absolute w-full h-full bg-black/50 rounded-xl'>

                  <button className='border-white bg-amber-400 text-white mx-2 absolute bottom-4'>GAME START</button>
               </div>
               <img
                  className='max-h-[160px] md:max-h-[500px] w-full object-cover rounded-xl'
                  src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg"
                  alt="" />

            </div>

            {/*Card */}
            <div className='rounded-xl relative'>

               {/*Overlay*/}
               <div className='absolute w-full h-full bg-black/50 rounded-xl'>

                  <button className='border-white bg-amber-400 text-white mx-2 absolute bottom-4'>GAME START</button>
               </div>
               <img
                  className='max-h-[160px] md:max-h-[500px] w-full object-cover rounded-xl'
                  src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg"
                  alt="" />
            </div>
         </div>
      </div>

    
   

   )
}

export default RecentlyCards