import React from 'react'

function NotFound() {
  const lst = [1,2,3,4,5,6,7,8,9,10,11,21,13,15,16,16,15,15,15,15,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div className='mt-20'>
      <div className='flex gap-3 overflow-scroll no-scrollbar p-2'>
        {
          lst.map((actor, idx) => {
            return (
              <div className='py-2' key={idx}>
                <img src={'https://fwcdn.pl/ppo/02/77/40277/450014.2.jpg'} alt={'Adam'} className='min-w-[120px] h-[200px]'/>
                <p className=''>Black as Adam</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NotFound