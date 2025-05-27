'use client'

import { Button } from "@/app/ui/Button";
import Modal from "@/app/ui/Modal";
import {  useEffect, useId, useState } from "react";
import { createProductAction } from "../actions";
import { useActionState } from "react";
import clsx from "clsx";
import { toast } from "react-toastify";

interface CreateProductModalProps{
  active: boolean
  onClose: () => void
}

export default function CreateProductModal({active, onClose}: CreateProductModalProps){
  const nameInputId = useId()
  const descriptionId = useId()
  const initialFormState = {
    errors: {name: undefined, description: undefined},
    success: false,
    values: { name: '', description: '' }
  }
  const [prevState, formAction, pending] = useActionState(createProductAction, initialFormState)
  const [formState, setFormState] = useState(prevState.values)

  const showNameError = prevState.errors.name && prevState.values.name == formState.name
  const showDescriptionError = prevState.errors.description && prevState.values.description == formState.description



  useEffect(() => {
    if (!prevState.success && prevState.message) {
      toast.error(prevState.message)
      return
    }

    if (prevState.success) {
      toast.success(prevState.message || "Product created successfully")
      setFormState({name: '', description: ''})
      onClose()
    }
    
  },[prevState, onClose])

  if (!active) return null

  return (
      <Modal title="Create Product" onClose={onClose}>
          <form  className="mt-8 flex flex-col gap-2" action={formAction}>
            <div className="flex flex-col">
              <label className="tracking-tight font-semibold" htmlFor={nameInputId}>Product&apos;s Name</label>
              <input 
                className={
                  clsx("border-2 text-sm border-backgroundSecondary rounded px-3 py-2", {
                    "border-red-500": showNameError
                  })
                } 
                id={nameInputId} 
                type="text" 
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                required 
                maxLength={128} 
                placeholder="Example Style Boots"
                name="name"
              />
              <div>
                {showNameError && <p className="text-red-500 text-sm">{prevState.errors.name}</p>}
              </div>

            </div>
            <div className="flex flex-col">
              <label className="tracking-tight font-semibold" htmlFor={descriptionId}>Product&apos;s Description</label>
              <textarea 
                className={
                  clsx("border-2 text-sm border-backgroundSecondary rounded px-3 py-2", {
                    "border-red-500": showDescriptionError,
                  })
                } 
                id={descriptionId}  
                value={formState.description}
                onChange={(e) => setFormState({...formState, description: e.target.value})}
                required 
                maxLength={512} 
                placeholder="This boots are made of example skin"
                name="description"
              />
              <div>
                {showDescriptionError && <p className="text-red-500 text-sm">{prevState.errors.description}</p>}
              </div>
            </div>

            <footer className="self-end mt-4">
              <Button type="submit" disabled={pending}>{pending? "Creating..." : "Create"}</Button>            
            </footer>
          </form>
      </Modal>
  )
}