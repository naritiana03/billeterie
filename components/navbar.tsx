import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { ImCart } from 'react-icons/im'
export default function navbar() {
  return (
    <div className='w-full h-28 border-b[1px] border-gray-500 text-white bg-black' >
      <div className='max-w-sscreenxl mx-auto px-4 flex h-full items-center justify-between '>
        <h1 className='text-2xl uppercase font-bold'>Billeterie.</h1>
        <ul className='flex items-center gap-6 uppercase text-sm font-semibold'>
          <li className='hover:text-red-600 cursor-pointer duration'>Acceuil</li>
          <li  className='hover:text-red-600 cursor-pointer duration'>Créer un évènement</li>
          <li  className='hover:text-red-600 cursor-pointer duration'>Organisateurs</li>
          <li className='hover:text-red-600 cursor-pointer duration'>Contact</li>
        </ul>
        <div className='flex gap-8 items-center'>
            <div>
              <form action=""> 
                <input type="text" />
                <BsSearch className='text-xl hover:text-hoverColor'/>
              </form>
          
            </div>
            <div className='relative'>
              <ImCart className='text-xl'/>
              <span className='w-4 h-4 bg-amber-400 text-white rounded-full inline-block absolute left-0 -bottom-2 text-xs flex items-center justify-center'>0</span>
            </div>
          <button className='w-48 h-12 bg-neutral-500 text-red-500 uppercase text-sm font-semibold rounded-md hover:bg-slate-300 hover:text'>Se connecter</button>
        </div>
      </div>
    </div>
  )
}
