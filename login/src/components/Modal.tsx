import React from 'react'

export function Modal( {isOpen, setModalOpen } )  {
    if (isOpen) {
        return (
            <div className='fixed top-0 bottom-0 left-0 right-0 bg-transparent z-[1000] '>
            <div className='fixed top-2/4 left-2/4 -translate-x-2/4 bg-indigo-50 border-4 border-pink-700 p-[100px] rounded-2xl font-medium text-xl'>
            Email Enviado com Sucesso!!!
          
            <button onClick={setModalOpen} className='bg-slate-400 py-3  rounded-xl px-6'>Fechar</button>
            
            
                </div>
            </div>
        )
    }
    return null
}

