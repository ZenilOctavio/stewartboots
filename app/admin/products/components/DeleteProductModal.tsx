'use client'

import { Button } from "@/app/ui/Button";
import Modal from "@/app/ui/Modal";
import { useEffect} from "react";
import { deleteProductAction } from "../actions";
import { useActionState } from "react";
import { toast } from "react-toastify";

interface DeleteProductModalProps{
  productId: number
  onClose: () => void
}

export default function DeleteProductModal({onClose, productId}: DeleteProductModalProps){
  const initialFormState = {
    errors: {},
    message: '',
    success: false,
    values: { id: productId }
  }
  const [prevState, formAction, pending] = useActionState(deleteProductAction, initialFormState)

  useEffect(() => {
    if (!prevState.success && prevState.message) {
      toast.error(prevState.message)
      return
    }

    if (prevState.success) {
      toast.success(prevState.message || "Product created successfully")
      onClose()
    }
    
  },[prevState, onClose])


  return (
      <Modal title="Delete Product" onClose={onClose}>
          <form  className="mt-8 flex flex-col gap-2" action={formAction}>
            <input type="number" value={productId} readOnly hidden name="id" />
            <div>
              <p>Are you sure that you want to delete this product?</p>
              <p><strong>This action is irreversible</strong></p>
            </div>
            <footer className="self-end mt-4">
              <Button type="submit" disabled={pending}>{pending? "Deleting..." : "Delete"}</Button>            
            </footer>
          </form>
      </Modal>
  )
}