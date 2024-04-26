import React, { useEffect, useState } from 'react'
import Header from '../../components/user/Header'
import Cards from '../../components/user/Cards'
import Modal from '../../components/user/Modal'
import { UserAxios } from '../../components/axios-instance/instance'
import { jwtDecode } from 'jwt-decode'

function Home() {
    const [ModalCondition, setModalCondition] = useState(false)
    const [notesList, setNotesList] = useState([])
    const [Access, setAccess] = useState(localStorage.getItem('access'))
    const [editId, setEditId] = useState(null)
    
    useEffect(()=>{
        UserAxios.get(`/note/list/${jwtDecode(Access).user_id}`).then((res)=>{
            setNotesList(res.data)
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[editId, ModalCondition])

    return (
        <div className='bg-yellow-300 w-screen min-h-screen'>
            <div className='w-full h-fit'>
                <Header />
            </div>

            <div className='flex-grow '>
                {(ModalCondition || editId) && <Modal editId={editId} setEditId={setEditId} setModalCondition={setModalCondition}/>}
                <div className='mt-8 ml-5 mr-5'>
                    <div className='text-center'>
                        <button type="button" onClick={()=>setModalCondition(true)} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add</button>
                    </div>
                    <div className='flex flex-wrap justify-around'>
                        {notesList.map((res)=>{
                            return (
                                <div key={res.id}>
                            <Cards setEditId={setEditId} data={res}/>
                                </div>
                        )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home