import { Button } from '@/app/ui/Button'
import '../css/create-product.module.css'
import { Dialog } from '@/app/ui/Dialog'



interface CreateProductDialogProps {
  trigger: React.ReactNode
}

export default function CreateProductDialog({ trigger }: CreateProductDialogProps) {

  return (
    <Dialog trigger={trigger} triggerAsChild>
      <h2 className="font-roboto font-semibold text-xl mb-6">Create product</h2>
      <form className="flex flex-col gap-4">
        <label htmlFor="product-name" className="flex flex-col gap-1">
          Name
          <input type="text" name="name" id="product-name" className="border border-backgroundSecondary p-2 rounded-lg" />
        </label>
        <label htmlFor="product-description" className="flex flex-col gap-1 ">
          Description
          <textarea name="description" id="product-description" className="border border-backgroundSecondary p-2 rounded-lg"></textarea>
        </label>

        <div className="flex justify-between">
          <Button variant="secondary">Cancel</Button>
          <Button>Save</Button>

        </div>

      </form>
    </Dialog>
  )
}