'use client'
import { Button } from "@/app/ui/Button";
import Modal from "@/app/ui/Modal";
import { useId } from "react";

interface CreateProductModalProps{
  active: boolean
  onClose: () => void
}

export default function CreateProductModal({active, onClose}: CreateProductModalProps){
  const nameInputId = useId()
  const descriptionId = useId()

  if (!active) return null

  return (
      <Modal title="Create Product" onClose={onClose}>
          <form className="mt-8 flex flex-col gap-2" action="">
            <div className="flex flex-col">
              <label className="text-md tracking-tight" htmlFor={nameInputId}>Product&apos;s Name</label>
              <input 
                className="border-2 border-backgroundSecondary rounded px-3 py-2" 
                id={nameInputId} 
                type="text" 
                required 
                maxLength={128} 
                placeholder="Example Style Boots"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-md tracking-tight" htmlFor={descriptionId}>Product&apos;s Description</label>
              <input 
                className="border-2 border-backgroundSecondary rounded px-3 py-2" 
                id={descriptionId} type="text" 
                required 
                maxLength={512} 
                placeholder="This boots are made of example skin"
              />
            </div>

            <footer className="self-end mt-4">
              <Button type="submit">Create</Button>            
            </footer>
          </form>
      </Modal>
  )
}