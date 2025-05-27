'use server'
import prisma from '@/lib/prisma'
import { Prisma } from '@/prisma/generated/prisma/client'
import { z } from 'zod'

interface ActionProductState<T> {
  errors: {
    [Key in keyof T]?: string[]
  }
  values: T,
  success: boolean,
  message?: string


}

const productCreationSchema = z.object({
  name: z.string()
    .min(10, 'Name must be at least 10 characters long')
    .max(128, 'Name must be shorter than 128 characters'),
  description: z.string()
    .min(10, 'Description must be at least 10 characters long')
    .max(512, 'Description must be shorter than 512 characters')
})


type CreateProductState = ActionProductState<{
  name: string
  description: string
}>
export async function createProductAction(prevState: CreateProductState, formData: FormData): Promise<CreateProductState> {
  const name = formData.get('name')
  const description = formData.get('description')


  const validatedData = productCreationSchema.safeParse({
    name,
    description
  })

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      success: false,
      values: {
        name: name as string || '',
        description: description as string || ''
      }
    }
  }

  try {
    await prisma.product.create({
      data: {
        name: validatedData.data.name,
        description: validatedData.data.description
      }
    })

    return {
      errors: {},
      success: true,
      message: 'Your product has been created successfully!',
      values: validatedData.data
    }


  } catch {
    return {
      errors: {},
      success: false,
      message: 'Something went wrong',
      values: validatedData.data
    }
  }


}
type EditingProductState = ActionProductState<{
  name: string,
  description: string,
  id: number
}>

export async function editProductAction(prevState: EditingProductState, formData: FormData): Promise<EditingProductState> {
  const id = Number(formData.get('id'))
  const name = formData.get('name')
  const description = formData.get('description')

  const validatedData = productCreationSchema.safeParse({
    name,
    description
  })

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      success: false,
      values: {
        id,
        name: name as string || '',
        description: description as string || ''
      }
    }
  }

  try {
    if (id == null) {
      return {
        errors: {},
        success: false,
        values: {
          id,
          name: name as string || '',
          description: description as string || '',
        },
        message: 'The provided product doesn\'t exist'
      }
    }
    await prisma.product.update({
      where: {
        id: id
      },
      data: {
        name: validatedData.data.name,
        description: validatedData.data.description
      }
    })

    return {
      errors: {},
      success: true,
      message: 'Your product has been updated successfully',
      values: { ...validatedData.data, id }
    }


  } catch (err) {

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      switch (err.code) {
        case 'P2025':
          return {
            errors: {},
            success: false,
            message: 'The product doesn\'t exist',
            values: { ...validatedData.data, id }

          }
      }
    }

    return {
      errors: {},
      success: false,
      message: 'Something went wrong',
      values: { ...validatedData.data, id }

    }
  }

}



type DeletingProductState = Omit<ActionProductState<{ id: number }>, 'errors'>

export async function deleteProductAction(_: DeletingProductState, formData: FormData): Promise<DeletingProductState> {

  const id = Number(formData.get('id'))

  try {
    await prisma.product.delete({
      where: {
        id: id
      }
    })

    return {
        message: 'The product was deleted successfully',
        values: {
          id
        },
        success: true
 
    }
  }
  catch (e) {

    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        message: 'The product does\'t exist',
        values: {
          id
        },
        success: false
      }

    }

    return {
      message: 'Something went wrong',
      values: {
        id
      },
      success: false
    }
  }


}