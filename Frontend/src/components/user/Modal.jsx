import React, { useEffect, useState } from 'react'
import { UserAxios } from '../axios-instance/instance'
import { jwtDecode } from 'jwt-decode'
import { TWarning } from '../toastify/Toastify'

function Modal({setModalCondition, setEditId, editId}) {
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [Access, setAccess] = useState(localStorage.getItem('access'))

    useEffect(()=>{
        if(editId)
        UserAxios.get(`/note/edit/${editId}`).then((res)=>{
            console.log(res);
            setTitle(res.data.title)
            setDescription(res.data.description)
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const handleSubmit = async () =>{
        if(Title.trim() == ''){
            TWarning('Title is empty')
        }else if(Description.trim() == ''){
            TWarning('Description is empty')
        }
        const formData = {
            title:Title,
            description:Description,
            user:jwtDecode(Access).user_id
        }
        console.log(formData);
        if(!editId){
        await UserAxios.post('/note/create', formData).then((res)=>{
            console.log(res);
            setTitle('')
            setDescription('')
            setModalCondition(false);
        }).catch((err)=>{
            console.log(err);
        })
    }
    else{
        const formData = {
            title:Title,
            description:Description,
        }
        await UserAxios.patch(`/note/edit/${editId}`, formData).then((res)=>{
            console.log(res);
            console.log('Ok this is updated');
            setEditId(null)
        }).catch((err)=>{
            console.log(err);
        })

    }
    }
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <h3 className="text-3xl font-bold text-center leading-6 text-gray-900" id="modal-title">Note</h3>
                                    <div className="mt-2 w-full text-center">
                                        {/* <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p> */}
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                                        <input type="text" value={Title} onChange={(e)=>setTitle(e.target.value)} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 mx-auto" placeholder="Title" required />

                                    </div>
                                    <div className="mt-2 w-full text-center">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                                        <textarea id="message" value={Description} onChange={(e)=>setDescription(e.target.value)} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" onClick={()=>handleSubmit()} className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Add</button>
                            <button type="button" onClick={()=>{setModalCondition(false); setEditId(null)}} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal