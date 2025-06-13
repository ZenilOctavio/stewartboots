export interface BuilderProduct {
  id: string
  name: string
  description: string
  category: {name: string}
  images: Array<{image: string}>
}

export interface AppProduct {
  id: string
  name: string
  description: string
  category: string
  images: Array<string>
}

export function builderProductToAppProduct(builderProduct: BuilderProduct): AppProduct {
  return {...builderProduct, images: builderProduct.images.map(image => image.image), category: builderProduct.category.name}
}

export interface BuilderCategory {
  id: string
  name: string
}

