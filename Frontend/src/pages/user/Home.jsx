import React, { useState } from 'react'
import Header from '../../components/user/Header'
import Cards from '../../components/user/Cards'
import Modal from '../../components/user/Modal'

function Home() {
    const [ModalCondition, setModalCondition] = useState(true)
    console.log(ModalCondition);
    return (
        <div className='bg-yellow-300 w-screen h-screen'>
            <div className='w-full h-fit'>
                <Header />
            </div>

            <div>
                {ModalCondition && <Modal setModalCondition={setModalCondition}/>}
                <div className='m-8'>
                    <div>
                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add</button>
                    </div>
                    <div className='flex flex-wrap justify-around'>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home