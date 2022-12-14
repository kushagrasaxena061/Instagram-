import React from 'react'
import {useRecoilState} from "recoil"
import { modalState } from "../atoms/modalAtom.js";
import {Dialogue,Transition} from "@headlessui/react"



export default function Modal() {
    const [open,setOpen ] = useRecoilState(modalState)
  return (
    <Transition.Root show={open} as={Fragment}>
        <Dialogue as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
            <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"> <Dialogue.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>
                <span className="fixed sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203</span>
                <Transition.Child as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 sm:translate-y-0 translate-y-4 sm:scale-95">
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-0 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                        
                        <h1>Hello</h1></div>
                    </Transition.Child>
                
            </div>
        </Dialogue>
    </Transition.Root>
  )
}
