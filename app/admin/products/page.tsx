import { AdminProductsPage } from './client_page';
import { Suspense } from 'react';
import prisma from '@/lib/prisma';

export default function AdminProductsPageDataWrapper(){
  const products = prisma.product.findMany({include: {ProductImages: true}})

  return (
    <Suspense>
        <AdminProductsPage productsPromise={products}/>
    </Suspense>
  )

}

