import React from 'react'
import { AuthUserAxios } from '../axios-instance/instance'
import { TSuccess } from '../toastify/Toastify'

function Cards({data, setEditId, setNotesList}) {
    const handleDelete = async (id) => {
        
        await AuthUserAxios.delete(`/note/delete/${id}`).then((res)=>{
            TSuccess('Deleted ...‼️☠️')
            setNotesList((res)=>{
                console.log(res);
                return res.filter((val)=>val.id !== id)
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
            <div className="p-5">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {data.title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {data.description}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button" onClick={()=>setEditId(data.id)}>
                    Edit
                </button>
                <button
                    className="align-middle ml-4 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button" onClick={()=>handleDelete(data.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Cards