import React from 'react'
import YouTube from 'react-youtube'

function MovieTrailer({ movie }) {
  let trailer = movie?.videos?.results.find(vid => vid.name.toLowerCase() === 'official trailer')
  if (!trailer) {
    trailer = movie?.videos?.results[0]
  }

  return (   
    <div className='flex flex-col pt-6'>
      <YouTube 
        className='pt-4 absolute top-0 bottom-0 right-0 left-0 md:top-[80px] bottom-[10px] left-[10px] right-[10px]'
        videoId={trailer?.key}
        opts={
          {
              width: '100%',
              height: '100%',
              playerVars: {
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 0,
                modestbranding: 0,
                rel: 0,
                showinfo: 0,
              },
          }
        }
      />
    </div>              
  )
}

export default MovieTrailer