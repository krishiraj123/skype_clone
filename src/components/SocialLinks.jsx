import React from 'react'
import { FiPhoneOff } from "react-icons/fi";

const SocialLinks = () => {
  return (
      <>
        <div className='mt-20 flex flex-col md:flex-row lg:flex-row justify-between'>
            <div className='mb-5'>
              <ul className='flex flex-col md:flex-row lg:flex-row gap-10'>
                  <li><u><a href="https://www.facebook.com/skypeIndiaOfficial/?brand_redir=29282006975">Facebook</a></u></li>
                  <li><u><a href="https://twitter.com/Skype">Twitter</a></u></li>
                  <li><u><a href="https://www.youtube.com/channel/UCORCfBbvrq4llNleGmILUhQ">Youtube</a></u></li>
                  <li><u><a href="https://www.skype.com/en/blogs/">Blog</a></u></li>
              </ul>
          </div>
          <div>
              <div className='flex flex-col md:flex-row lg:flex-row'>
                   <FiPhoneOff />
                  <h1 className='font-bold text-lg'>Limited emergency calling</h1>
              </div>
              
              <div className='flex'>
                  <p className='text-sm'>Skype is not a replacement for your telephone and has limited emergency calling capabilities depending on your country. </p>
                  <a href="/" className='text-blue-500'>Learn<br/>more.</a>
              </div>
              </div>
        </div>
      </>
  )
}

export default SocialLinks
