import React from 'react'
import {Link} from  'react-router-dom'

export const Home = () => {
  return (
    <div className='w-full mx-auto '>
        <div className='min-h-screen flex flex-col  items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 t text-white' >
        <h1 className='text-9xl font-bold shadow-inherit '>Hellow Word</h1>
        <Link to='/Login'><button  className='bg-pink-600 hover:text-black hover:bg-cyan-200 hover:scale-110 duration-500 mt-5 py-7 rounded-full shadow-2xl uppercase font-semibold text-white px-20'> Sair </button></Link>
        </div>

    </div>
  )
}
