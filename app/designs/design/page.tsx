'use client'

import React from "react";
import { ProductImages } from "./components/ProductImages";
import { ProductResume } from "./components/ProductResume";
import { ProductsSugestionsList } from "./components/ProductsSuggestionList";



export default function ProductPage() {


  return (
    <div className="flex flex-col-reverse lg:flex-row p-8 gap-10 pt-24">
      <React.Suspense fallback={<div>Loading...</div>}>
        <ProductImages
          className="basis-1/3 grid grid-cols-3 grid-rows-4 gap-4"
        />
      </React.Suspense>


      <main className="basis-3/5 flex flex-col gap-5">
        <React.Suspense
          fallback={<>Loading...</>}
        >
          <ProductResume className="flex flex-col gap-3" />
        </React.Suspense>
        <footer className="mt-auto" >
          <h2 className="font-roboto tracking-wide">OTHER PRODUCTS</h2>
          <React.Suspense
            fallback={<>Loading...</>}
          >
            <ProductsSugestionsList
              className="flex mt-4"
            />
          </React.Suspense>
        </footer>
      </main>


    </div >
  )
}