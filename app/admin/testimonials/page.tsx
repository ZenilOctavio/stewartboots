import { Testimonial } from "@/app/home/components/Testimonial";

export default function AdminTestimonialsPage (){
  return(
    <>
      <header>
        <h1 className="text-3xl tracking-tight font-semibold">Testimonials</h1>
      </header>
      <hr />
      <main className="flex flex-col">

        {[1,2,3,4,5].map((v) => {
          return (
        <article key={v} className="border-2 p-3 flex group gap-5 appear-in-scroll">
              <div className="overflow-hidden rounded-xl peer group-odd:order-1 group-even:order-2 ">
                <iframe 
                  className="object-contain"
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/fj9_XXzIXwA?si=ok9lvOsV4QL2X3HC&autoplay=1&loop=1&controls=0&showinfo=0&modestbranding=0&rel=0" 
                  title="YouTube video player" 
                  allow=" 
                  autoplay; 
                  clipboard-write; 
                  encrypted-media; 
                  gyroscope; 
                  picture-in-picture; 
                  web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
          <main className="self-end basis-1/6 group-odd:order-2 group-even:order-1 shadow-lg group-even:ml-auto">
            <Testimonial
              name="Hello" 
              content={<span className="text-sm italic">&apos;This is the review from the person and he told us that they loved how well the boots fit and the fact that the pain disappeared in the first use&apos;</span>}
              date="2023"
            />
          </main>
        </article>
          )
        })}

      </main>
    </>
  )
}