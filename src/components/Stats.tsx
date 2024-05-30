import { useGameStore } from '@/store/gameStore'
import React from 'react'

export default function Stats() {
  const {setStats} = useGameStore()
  return (
    <div className='flex flex-col justify-center items-center w-[540px] h-[480px] border border-black bg-[#F3F3F3] text-[#000000] dark:text-[#FFFFFF] dark:bg-[#262B3C] dark:border-[#939B9F] rounded-2xl'>
      <h2 className='text-[35px] font-extrabold'>Estadísticas</h2>

      <div className="score w-full flex justify-around my-8">
        <div className="stats flex flex-col items-center">
          <div className="value text-[35px] font-extrabold">
            8
          </div>
          <div className="title text-[21px]">
            Jugadas
          </div>
        </div>
        <div className="stats flex flex-col items-center">
          <div className="value text-[35px] font-extrabold">
            2
          </div>
          <div className="title text-[21px]">
            Victorias
          </div>
        </div>
      </div>

      <div className="nextGame flex flex-col items-center my-8">
        <div className="title uppercase text-[19px]">
          siguiente palabra
        </div>
        <div className="timer font-bold text-[19px]">
          04:10
        </div>
      </div>

      <button onClick={()=>setStats(false)} className='text-white bg-[#6AAA64] w-[263px] h-[50px] rounded font-extrabold text-[28px]'>Aceptar</button>

    </div>
  )
}
