import React from 'react'


const keys=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ñ','Enter','z','x','c','v','b','n','m','<---']

export default function Keyboard() {
  return (
    <div className='grid grid-cols-10 gap-4 w-[638px] bg-[#dadce04d] dark:bg-[#dadce008] p-5 rounded-lg'>
    {keys&&
      keys.map((key)=>{
        return(<button className='flex justify-center items-center gap-1 w-[45px] h-[45px] rounded-md uppercase bg-[#D3D6DA] text-[#56575E] dark:bg-[#565F7E] dark:text-white text-2xl' key={key} > {key}</button>)
      })}
    </div>
  )
}
