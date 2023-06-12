import React from 'react'

function VideoCards({info}) {

   console.log(info)
  
   const {snippet,statistics}=info;
  console.log(snippet)
  const{channelTitle,title,thumbnails,publishedAt}=snippet;

    
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img src={thumbnails.medium.url} alt='thumbnail' className='rounded-lg'/>
        <ul>
            <li className='font-bold'>{channelTitle}</li>
            <li className='text-gray-400'>{title}</li>
            <li className='text-gray-400'>Views: {statistics.viewCount}</li>
            <li className='text-gray-400'>{publishedAt}</li>
        </ul>
    </div>
  )
}


export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCards info={info} />
    </div>
  );
};




export default VideoCards
