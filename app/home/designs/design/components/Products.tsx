'use client'

import { AppProduct, BuilderCategory } from "../../types"
import { notFound, usePathname, useRouter, useSearchParams } from "next/navigation"
import { ProductsList } from "./ProductsList"
import { NavigationButton } from "../../components/NavigationButton"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect } from "react"

interface ProductsListProps {
  products: AppProduct[]
  categories: BuilderCategory[]
}

const pageSearchParam = 'page'
const numPerPage = 10


export function Products({ products, categories }: ProductsListProps) {

  const {replace} = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category') || 'all'
  const currentPage = Number(searchParams.get(pageSearchParam)) || 1


  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    params.set(pageSearchParam, '1')

    replace(`${pathname}/?${params}`,
      {
        scroll: false
      }
    )
  }, [])

  let filteredProducts = products

  if (currentCategory != 'all') {
    const currentCategoryName = categories.find(category => category.id == currentCategory)?.name

    if (!currentCategoryName) {
      return notFound()
    }

    filteredProducts = products.filter(product => product.category == currentCategoryName)
  }

  const paginatedProducts = filteredProducts.slice((currentPage - 1) * numPerPage, currentPage * numPerPage)

  const showingFrom = (currentPage - 1) * numPerPage + 1
  const showingTo = Math.min(currentPage * numPerPage, filteredProducts.length)
  const totalPages = Math.ceil(filteredProducts.length / numPerPage)

  // Helper to update the page in the URL
  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set(pageSearchParam, String(page))
    replace(`${pathname}/?${params}`, { scroll: false })
  }

  return (
    <>
      <ProductsList products={paginatedProducts}/>
      <footer className="flex mt-10 justify-between items-center px-10">
        <div className="flex items-center gap-2">
          <NavigationButton
            className="basis-1/4"
            variant={currentPage === 1 ? "disabled" : "default"}
            onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </NavigationButton>
          {currentPage > 1 && (
            <NavigationButton
              className="basis-1/4"
              variant="default"
              onClick={() => goToPage(currentPage - 1)}
            >
              {String(currentPage - 1).padStart(2, '0')}
            </NavigationButton>
          )}
          <NavigationButton
            className="basis-1/4"
            variant="default"
            disabled
          >
            {String(currentPage).padStart(2, '0')}
          </NavigationButton>
          {currentPage < totalPages && (
            <NavigationButton
              className="basis-1/4"
              variant="default"
              onClick={() => goToPage(currentPage + 1)}
            >
              {String(currentPage + 1).padStart(2, '0')}
            </NavigationButton>
          )}
          <NavigationButton
            className="basis-1/4"
            variant={currentPage === totalPages ? "disabled" : "default"}
            onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight />
          </NavigationButton>
        </div>
        <div>
          <span className="font-light">SHOWING {showingFrom} - {showingTo} OF {filteredProducts.length} RESULTS</span>
        </div>
      </footer>
    </>
  )
}