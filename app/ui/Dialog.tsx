'use client'

import { X } from "lucide-react"
import { useRef } from "react"

interface DialogProps {
  trigger: React.ReactNode
  triggerAsChild?: boolean
  children: React.ReactNode | React.ReactNode[] | string
}

export function Dialog({ children, trigger, triggerAsChild = false }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  const handleOpen = () => {
    if (!dialogRef.current) return

    dialogRef.current.showModal()

  }

  const handleClose = () => {
    if (!dialogRef.current) return

    dialogRef.current.close()
  }

  return (
    <>
      {triggerAsChild ? <div onClick={handleOpen}>trigger</div> : <button onClick={handleOpen}>{trigger}</button>}
      <dialog ref={dialogRef} className="p-4 rounded-lg">
        <button onClick={handleClose} className="float-end cursor-pointer"><X /></button>
        {children}
      </dialog >
    </>
  )
}