'use client'
import React from "react";
// import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { BuilderContent } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { GetStaticProps } from "next";

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + ((params?.page as string[])?.join("/") || ""),
      },
    })
    .toPromise();

  // Return the page content as props
  return {
    props: {
      page: page || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};

// Define a function that generates the
// static paths for all pages in Builder
export async function getStaticPaths() {
  // Get a list of all pages in Builder
  const pages = await builder.getAll("page", {
    // We only need the URL field
    fields: "data.url",
    options: { noTargeting: true },
  });

  // Generate the static paths for all pages in Builder
  return {
    paths: pages.map((page) => `${page.data?.url}`).filter(url => url !== '/'),
    fallback: 'blocking',
  };
}

// Define the Page component
export default function Page({ page }: { page: BuilderContent | null }) {
  // const router = useRouter();
  const isPreviewing = useIsPreviewing();

  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // If the page content is available, render
  // the BuilderComponent with the page content
  return (
    <>
      <Head>
        <title>{page?.data?.title}</title>
      </Head>
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={page || undefined} />
    </>
  );
}
// import { Footprints, Handshake, PencilRuler } from "lucide-react";
// import Image from "next/image";
// import { HomePageArticle } from "./components/HomePageArticle";
// import { Testimonial } from "./components/Testimonial";
// import { testimonials } from "./constants";
// import Link from "next/link";
// import { HomeCompanyLocation } from "./components/HomeLocation";

// export default function Home() {
//   return (
//     <div className="py-24 px-2 items-center w-full flex flex-col gap-10">
//       <h3 className="font-light text-xl md:text-3xl text-center"><i className="font-pdisplay">&quot;Footware designed to the proper care of your feet&quot;</i></h3>
//       <HomeCompanyLocation />
//       <section
//         className="w-full flex flex-col items-center justify-between gap-5"
//       >
//         <header className="flex flex-col items-center">
//           <h6 className="font-roboto text-xs">OUR SERVICE</h6>
//           <h2 className="text-xl md:text-3xl font-extrabold">Why choose Stewart Boot?</h2>
//         </header>
//         <main className="w-full flex flex-col items-center md:flex-row justify-between pt-4">
//           <ul className="flex flex-col items-center md:flex-row justify-between w-full gap-4 md:pl-5">
//             <li>
//               <HomePageArticle
//                 title="The perfect fit"
//                 content="We ensure your comfort by custom-fitting the boot to your foot, measuring and adapting it so you experience results from the very first step."
//                 Icon={PencilRuler}
//               />
//             </li>
//             <li className="self-end">
//               <HomePageArticle
//                 title="Foot Problems"
//                 content={<>We offer solutions for 14 of the most common foot problems. We assure you comfort since the first step.</>}
//                 Icon={Footprints}
//               />

//             </li>
//             <li>
//               <HomePageArticle
//                 title="Experience"
//                 content="With over 50 years of experience, we specialize in treating these foot problems and delivering thoughtfully designed solutions that prioritize comfort and performance."
//                 Icon={Handshake}
//               />

//             </li>
//           </ul>
//           <figure>
//             <Image
//               className="w-full h-full object-cover"
//               src="/boot-rope.png"
//               width={1000}
//               height={700}
//               alt="Boot with a rope"
//             />
//             <figcaption className="text-xs float-end">
//               Designed by <a href="https://www.freepik.com/" className="text-blue-700">Freepik</a>
//             </figcaption>
//           </figure>
//         </main>
//         <footer>
//           <Link href="/about/foot-conditions" className="text-sm underline">Discover more foot conditions we treat</Link>
//         </footer>
//       </section>

//       <hr className="border-backgroundSecondary mx-8" />
//       <article
//         className="bg-secondary flex flex-col md:flex-row justify-center md:justify-between items-center"
//       >
//         <main className="flex flex-col gap-2 justify-between p-4 md:p-10">

//           <span>
//             <p>Our footwear are made by artisanal bootmakers, using hand tools and vintage machinery.</p>

//             <p>Each pair is designed for comfort and to eliminate foot pain.</p>

//             <p><strong> Prices start at $3,450</strong>. A precise understanding and measurement of your feet takes between 2 and 3 hours.</p>
//           </span>

//         </main>
//       </article>
//       <hr className="border-backgroundSecondary mx-8" />

//       <section className="flex flex-col items-center gap-10 px-6">
//         <header className="flex flex-col items-center gap-4">
//           <h2 className="text-xl md:text-3xl font-extrabold">Testimonials</h2>
//           <p className="text-center">See how we&apos;ve made a difference for our customers. Their experiences speak to the care, comfort, and quality we deliver every day.</p>
//         </header>

//         <main className="mt-6">
//           <ul className="flex flex-col items-stretch md:flex-row gap-6">
//             {testimonials.map(testimonial => {
//               return (
//                 <li key={testimonial.author}>
//                   <Testimonial
//                     name={testimonial.author}
//                     date={''}
//                     content={testimonial.content}
//                   />
//                 </li>
//               )
//             })}

//           </ul>
//         </main>
//       </section>
//     </div>
//   );
// }
