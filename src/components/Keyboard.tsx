import React from 'react'


const keys=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ñ','Enter','z','x','c','v','b','n','m','<---']

export default function Keyboard() {
  return (
    <div className='flex flex-wrap w-[638px]'>
    {keys&&
      keys.map((key)=>{
        return(<div className='size-12 rounded-md bg-[#939B9F33]font-bold uppercase text-white flex justify-center items-center text-4xl' key={key} > {key}</div>)
      })}
    </div>
  )
}
