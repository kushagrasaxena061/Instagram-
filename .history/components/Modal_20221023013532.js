import React from 'react'
import {useRecoilState} from "recoil"
import { modalState } from "../atoms/modalAtom.js";




export default function Modal() {
    const [open,setOpen ] = useRecoilState(modalState)
  return (
    <div>
        {open && <p>Modal is open</p>}
    </div>
  )
}
