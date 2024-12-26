import { Plus } from "lucide-react"
import { Button } from "../ui/Button"
import CreateProductDialog from "./components/CreateProductDialog"

export default function AdminPage() {
  return (
    <div className="flex flex-col p-8 gap-10">
      <h1 className="font-bold text-3xl tracking-wide">Admin Page</h1>
      <section className="border p-4">
        <header className="flex items-center justify-between">
          <h2 className="font-bold text-xl font-roboto tracking-wider">Products</h2>
          <CreateProductDialog
            trigger={
              <Button
                className="flex items-center gap-2"
                trailingIcon={<Plus />}
              >
                <span
                  className="text-sm">
                  Add Product
                </span>
              </Button>
            }
          />
        </header>
        <ul>

        </ul>
      </section>
    </div>
  )
}