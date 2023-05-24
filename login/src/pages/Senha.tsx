import React from 'react'
import {Link} from  'react-router-dom'
import {useState} from 'react'
import { Modal } from '../components/Modal'

export const Senha = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='w-full mx-auto'>
      <div className='w-full min-h-screen flex flex-wrap  items-center justify-center bg-indigo-50'>
        <div className='w-96 bg-gradient-to-r from-cyan-300  via-pink-200 to-sky-300 rounded-3xl pt-[90px] px-[55px] pb-[53px] shadow-2xl'>

          <form className='w-full'>
            <h1 className='block text-3xl text-black leading-10 text-center mb-3'>Recuperar Senha</h1>
            <div className='w-full relative border-b-2 border-pink-700 mb-9 mt-5'>
            <label htmlFor="" className=''>Email</label>
            <input type="text" name="email" id="email" className='focus:outline-none text-base border-none leading-10 block w-full h-11 bg-transparent px-1 '  />
            </div>
            
            <button onClick={() => setOpenModal (true)} className='text-lg border-none rounded-2xl font-semibold hover:bg-slate-400 leading-10 flex uppercase justify-center items-center w-full h-[50px] bg-fuchsia-400 cursor-pointer hover:scale-125 duration-700'>Enviar</button>
            <Modal isOpen={openModal} setModalOpen={() => (setOpenModal )} /> 
             
            
            
            <div className='flex  flex-col justify-center items-center mt-[50px]'>
              <p className='text-lg'>Possui conta? <Link to="/Login" className='text-pink-700 font-semibold'>Acesse</Link> </p>
              <p className='text-lg'>Não possui conta? <Link to="/Register" className='text-pink-700 font-semibold'>Registre-se</Link> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
