'use client'
import { X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
interface ModalPortalProps {
  children: React.ReactNode 
} 

function ModalPortal ({children}:ModalPortalProps){
  const [mounted, setMounted] = useState(false)
  const portalRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setMounted(true)

    portalRef.current = document.getElementById('modal-root')

    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  if (!portalRef.current) return <></>


  return(
    createPortal(
      children,
      portalRef.current
    )
  )
}
interface ModalProps {
  children: React.ReactNode
  title: React.ReactNode
  onClose: () => void
}
export default function Modal({children, title, onClose}: ModalProps) {

  return  (
    <ModalPortal>
      <div className="bg-white/20 fixed grid place-items-center top-0 left-0 w-full h-full z-10 backdrop-blur-sm">
        <div className="bg-white border-2 p-3 rounded md:min-w-96 max-h-[80vh] overflow-auto">
          <header className="flex justify-between gap-10 items-center">
            <h1 className="text-2xl">{title}</h1>
            <button className="hover:scale-110 transition-transform" onClick={onClose}><X/></button>
          </header>
          {children}
        </div>      
      </div> 
    </ModalPortal>
  )
}
