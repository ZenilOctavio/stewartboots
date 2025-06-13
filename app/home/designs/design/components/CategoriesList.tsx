'use client'

import clsx from "clsx"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

interface Category{
  name: string
  id: string
}

interface CategoriesListProps {
  categories: Category[]
}

const searchParamCategory = 'category'

const defaultCategory: Category =  {
  name: 'All',
  id: 'all'
}


export function CategoriesList({categories}: CategoriesListProps){
  const searchParams = useSearchParams()
  const {replace} = useRouter()
  const pathname = usePathname()

  const allCategories = [...categories, defaultCategory, ]


  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    params.set(searchParamCategory, 'all')
    replace(`${pathname}?${params}`,
      {
        scroll: false
      }
    )
  }, [])

  const handleCategoryClick = (category: Category) => {
    const params = new URLSearchParams(searchParams)

    params.set(searchParamCategory, category.id)

    replace(`${pathname}?${params}`,
      {
        scroll: false
      }
    )

  }

  return (
        <ul className="flex md:flex-col gap-2 cursor-pointer">
          {allCategories.map(category => {
            const params = new URLSearchParams(searchParams)
            const currentCategory = params.get(searchParamCategory)

            
            return (
            <li key={category.id} onClick={() => handleCategoryClick(category)} className={clsx("text-sm", {"font-semibold":  category.id == currentCategory})}>
              {category.name}
            </li>
          )})}
       </ul>
  )
}