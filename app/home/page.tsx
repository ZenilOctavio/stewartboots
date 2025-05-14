import { ArrowUpRight, Footprints, Handshake, PencilRuler, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { HomePageArticle } from "./components/HomePageArticle";
import { Testimonial } from "./components/Testimonial";
import { contactDictionary, mapsLink } from "./constants";
import { testimonials } from "./constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-24 px-2 items-center w-full flex flex-col gap-10">
      <h3 className="font-light text-xl md:text-3xl text-center"><i className="font-pdisplay">&quot;Footware designed to the proper care of your feet&quot;</i></h3>

      <article
        className="bg-secondary flex flex-col md:flex-row justify-center md:justify-between items-center"
      >
        <main className="flex flex-col gap-2 justify-between p-4 md:p-10">
          <h2 className="text-4xl font-extrabold tracking-widest">Our new location</h2>
          <p>You can call us to make an order and take care of your feet.</p>
          <div className="flex justify-between gap-4">
            <a className="flex-1" href={mapsLink}><Button trailingIcon={<ArrowUpRight />} className="flex items-center justify-between gap-2">Go to maps</Button></a>
            <a className="flex-1" href={`tel:${contactDictionary.phone.data}`}><Button variant="secondary" trailingIcon={<Phone />} className="flex items-center justify-between gap-2">Call us</Button></a>
          </div>
        </main>
        <figure className="w-screen md:w-auto">
          <Image
            className="w-full h-full object-cover"
            src="/new-location.png"
            width={600}
            height={300}
            alt="Stewart Boots new location"
          />
        </figure>
      </article>


      <section
        className="w-full flex flex-col items-center justify-between gap-5"
      >
        <header className="flex flex-col items-center">
          <h6 className="font-roboto text-xs">OUR SERVICE</h6>
          <h2 className="text-xl md:text-3xl font-extrabold">Why choose Stewart Boot?</h2>
        </header>
        <main className="w-full flex flex-col items-center md:flex-row justify-between pt-4">
          <ul className="flex flex-col items-center md:flex-row justify-between w-full gap-4 md:pl-5">
            <li>
              <HomePageArticle
                title="The perfect fit"
                content="We ensure your comfort by custom-fitting the boot to your foot, measuring and adapting it so you experience results from the very first step."
                Icon={PencilRuler}
              />
            </li>
            <li className="self-end">
              <HomePageArticle
                title="Foot Problems"
                content={<>We offer solutions for 14 of the most common foot problems. We assure you comfort since the first step.</>}
                Icon={Footprints}
              />

            </li>
            <li>
              <HomePageArticle
                title="Experience"
                content="With over 50 years of experience, we specialize in treating these foot problems and delivering thoughtfully designed solutions that prioritize comfort and performance."
                Icon={Handshake}
              />

            </li>
          </ul>
          <figure>
            <Image
              className="w-full h-full object-cover"
              src="/boot-rope.png"
              width={1000}
              height={700}
              alt="Boot with a rope"
            />
            <figcaption className="text-xs float-end">
              Designed by <a href="https://www.freepik.com/" className="text-blue-700">Freepik</a>
            </figcaption>
          </figure>
        </main>
        <footer>
          <Link href="/about/foot-conditions" className="text-sm underline">Discover more foot conditions we treat</Link>
        </footer>
      </section>

      <hr className="border-backgroundSecondary mx-8" />
      <article
        className="bg-secondary flex flex-col md:flex-row justify-center md:justify-between items-center"
      >
        <main className="flex flex-col gap-2 justify-between p-4 md:p-10">

          <span>
            <p>Our footwear are made by artisanal bootmakers, using hand tools and vintage machinery.</p>

            <p>Each pair is designed for comfort and to eliminate foot pain.</p>

            <p><strong> Prices start at $3,450</strong>. A precise understanding and measurement of your feet takes between 2 and 3 hours.</p>
          </span>

        </main>
      </article>
      <hr className="border-backgroundSecondary mx-8" />

      <section className="flex flex-col items-center gap-10 px-6">
        <header className="flex flex-col items-center gap-4">
          <h2 className="text-xl md:text-3xl font-extrabold">Testimonials</h2>
          <p className="text-center">See how we&apos;ve made a difference for our customers. Their experiences speak to the care, comfort, and quality we deliver every day.</p>
        </header>

        <main className="mt-6">
          <ul className="flex flex-col items-stretch md:flex-row gap-6">
            {testimonials.map(testimonial => {
              return (
                <li key={testimonial.author}>
                  <Testimonial
                    name={testimonial.author}
                    date={''}
                    content={testimonial.content}
                  />
                </li>
              )
            })}

          </ul>
        </main>
      </section>
    </div>
  );
}
