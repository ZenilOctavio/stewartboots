import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NewLocationAdvice } from "./components/NewLocation";

export default function AboutPage() {


  return (
    <div
      className="py-24 w-full flex flex-col gap-10"
    >
      <NewLocationAdvice
        title="Our new location"
        content="You can call us to make an order and take care of your feet."
      />
      
      <Link
        className="flex gap-2 self-center tracking-tight hover:scale-105 transition-all hover:border-b hover:border-b-foreground"
        href="/home/about/foot-conditions"
      >
        Check out the foot conditions we can help you with
        <ArrowRight />
      </Link>

      <hr />

      <section className="flex flex-col gap-16 p-3">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
          <figure className="basis-1/3">
            <Image
              className="object-cover w-full h-full"
              src="/victor-stewart.png"
              width={1200}
              height={600}
              alt="Victor Stewart - The Founder of Stewart Boot Company"
            />
            <figcaption className="text-xs">Victor Stewart - The Founder of Stewart Boot Company</figcaption>
          </figure>
          <main className="basis-1/3">
            At Steward Boot Company, we have over 50 years of experience delivering handcrafted boots that not only embody quality and style but also provide comfort and solutions for common foot problems. Our expert craftsmanship ensures a perfect fit, addressing issues like bunions, hammertoes, and heel discomfort.
          </main>
        </div>

        <div className="flex flex-col md:flex-row gap-8  justify-between items-center">
          <main className="basis-1/3">
            <p >First, we&apos;ve moved to a brand-new location to better serve you. Our new space is designed to offer an even more personalized experience, allowing us to continue crafting high-quality orthopedic and custom boots tailored to your needs.</p>
            <p > Second, we&apos;re introducing a new administration team, committed to enhancing our services and building upon the strong foundation of excellence you&apos;ve come to expect from us. With fresh perspectives and a shared vision for growth, our new leadership is dedicated to ensuring every step with us is as smooth and supportive as possible.</p>
          </main>
          <figure className="basis-1/3">
            <Image
              className="object-cover w-full h-full"
              src="/new-location.png"
              width={1200}
              height={600}
              alt="The new location of Stewart Boot Company"
            />
            <figcaption className="text-xs">The new location of Stewart Boot Company</figcaption>
          </figure>

        </div>
      </section>

    </div>
  )
}