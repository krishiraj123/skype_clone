import React from 'react'

const HeroSection = () => {
  return (
      <>
          <div className='bg-[#F2F2F2]  mt-7 rounded-md shadow-lg flex flex-col md:flex-row justify-start items-start lg:justify-center lg:items-center'>
              <div className='lg:ms-40'>
                  <h1><span className='text-[#0476D5] text-4xl lg:text-5xl font-bold'>Celebrating</span><br /><span className='text-[#594BDF] text-4xl lg:text-5xl font-bold'>Skype's <span className='text-[#773CE2] text-4xl lg:text-5xl font-bold'>20</span> <span className='text-[#8536E4] text-4xl lg:text-5xl font-bold'>Year</span></span><br /><span className='text-[#BD1AEB] text-4xl lg:text-5xl font-bold'>Journey</span></h1>
                  
                  <div className='md:font-medium mt-8 md:text-xl'>Embrace a legacy of communication as Skype marks two decades of connecting hearts across borders to bring smiles and, enabling conversations that transcend miles. Join the global celebration of human connections that have shaped our world.</div>
                  <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl text-center hover:bg-blue-700 mt-10 p-[30px]">
                      Download Skype</button>
                  <p className='text-blue-500 mt-7 text-sm'><a href="/">Open Skype In Your Browser</a></p>
              </div>
              <div>
                  <img src='https://secure.skypeassets.com/content/dam/scom/blogs/groupnewhero.png'/>
              </div>
          </div>
      </>
  )
}

export default HeroSection
