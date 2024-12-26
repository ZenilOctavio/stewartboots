import clsx from "clsx";
import Image from "next/image";
import { redirect } from "next/navigation";

interface FootConditionItemProps {
  title: string
  content: string
  imageSrc: string
  imageAlt: string
  imageClassName?: string
  itemId: string
}

function FootConditionItem({ title, content, imageSrc, imageAlt, itemId, imageClassName = "" }: FootConditionItemProps) {


  return (
    <li id={itemId} className="gap-4 basis-3/5 flex flex-col md:flex-row items-center justify-between w-full">
      <figure>
        <Image
          className={clsx("object-cover", imageClassName)}
          src={imageSrc}
          width={500}
          height={500}
          alt={imageAlt}
        />
        <figcaption className="text-xs float-end">
          Designed by <a href="https://www.freepik.com/" className="text-blue-700">Freepik</a>
        </figcaption>
      </figure>
      <article className="bg-secondary pt-6 pb-10">
        <h3 className="text-xl font-roboto font-bold">{title}</h3>
        <p className="w-[55ch] text-sm font-light mt-2 tracking-wide">{content}</p>
      </article>
    </li>
  )
}


export default function FootConditionsPage() {
  redirect('/')

  return (
    <div className="pt-10 w-full flex flex-col gap-10 py-16">

      <section className="bg-secondary  flex flex-col-reverse items-center md:flex-row justify-between">
        <main className="px-20 py-10 basis-1/3">
          <h1 className="text-3xl font-bold tracking-widest">Foot Conditions We Treat</h1>
          <p className="font-light w-[45ch]">With over half a century of experience, we have dedicated ourselves to understanding and treating a wide range of foot problems. From common issues like bunions, hammertoes, and heel spurs to more complex conditions, our solutions are crafted to provide lasting relief and improve comfort.</p>
        </main>
        <figure className="md:basis-1/6">
          <Image
            className="object-cover"
            src="/foot-problem1.png"
            width={400}
            height={800}
            alt="Someone rubbing their feet"
          />
          <figcaption className="text-xs float-end">
            Designed by <a href="https://www.freepik.com/" className="text-blue-700">Freepik</a>
          </figcaption>
        </figure>
      </section>

      <section className="px-10">
        <h2 className="text-3xl font-bold tracking-widest">Conditions</h2>
        <ol className="flex flex-col flex-wrap gap-4 mt-4">
          <li className="basis-1/3 hover:text-primary transition-all"><a href="#bunions">1. Bunions</a></li>
          <li className="basis-1/3 hover:text-primary transition-all"><a href="#hamertoe">2. Hammertoes</a></li>
          <li className="basis-1/3 hover:text-primary transition-all"><a href="#athletefoot">3. Athlete Foot</a></li>
          <li className="basis-1/3 hover:text-primary transition-all"><a href="#heelspurs">4. Heel Spurs</a></li>
          <li className="basis-1/3 hover:text-primary transition-all"><a href="#ingrowntoenails">5. Ingrown Toe Nails</a></li>
          <li className="basis-1/3 hover:text-primary transition-all"><a href="#mortons-neuroma">6. Morton&apos;s Neuroma</a></li>
        </ol>
      </section>

      <section>

        <ul className={clsx(
          "flex flex-col gap-24",
          "[&>*:nth-child(odd)]:md:flex-row [&>*:nth-child(even)]:md:flex-row-reverse",
          "[&>*:nth-child(odd)>article]:pl-28 [&>*:nth-child(even)>article]:pr-28",
          "[&>*:nth-child(odd)>article]:pr-16 [&>*:nth-child(even)>article]:pl-16",
          "[&>*:nth-child(odd)>article]:rounded-l-full [&>*:nth-child(even)>article]:rounded-r-full",
        )}>

          <FootConditionItem
            itemId="bunions"
            title="Bunions"
            content="Lorem ipsum dolor sit amet consectetur lajfsjfjsjkfh jkfahjls f kjafh klflsjka aj fkhsjaf jsalf"
            imageSrc="/foot-conditions/bunions.png"
            imageAlt="Bunions"
          />

          <FootConditionItem
            itemId="hammertoe"
            title="Hammertoe"
            imageClassName="-scale-x-100"
            content="Lorem ipsum dolor sit amet consectetur lajfsjfjsjkfh jkfahjls f kjafh klflsjka aj fkhsjaf jsalf"
            imageSrc="/foot-conditions/hammertoe.png"
            imageAlt="Hammertoes"
          />

          <FootConditionItem
            itemId="athletefoot"
            title="Athlete Foot"
            content="Lorem ipsum dolor sit amet consectetur lajfsjfjsjkfh jkfahjls f kjafh klflsjka aj fkhsjaf jsalf"
            imageSrc="/foot-conditions/athletefoot.png"
            imageAlt="Athlete Foot"
          />

          <FootConditionItem
            itemId="heelspurs"
            title="Heel Spurs"

            content="Lorem ipsum dolor sit amet consectetur lajfsjfjsjkfh jkfahjls f kjafh klflsjka aj fkhsjaf jsalf"
            imageSrc="/foot-conditions/heelspurs.png"
            imageAlt="Heel Spurs"
          />

          <FootConditionItem
            itemId="ingrowntoenails"
            title="Ingrown Toe Nails"
            content="Lorem ipsum dolor sit amet consectetur lajfsjfjsjkfh jkfahjls f kjafh klflsjka aj fkhsjaf jsalf"
            imageSrc="/foot-conditions/ingrowntoenails.png"
            imageAlt="Ingrown Toe Nails"
          />
          <FootConditionItem
            itemId="mortons-neuroma"
            title="Morton's Neuroma"
            content="Lorem ipsum dolor sit amet consectetur lajfsjfjsjkfh jkfahjls f kjafh klflsjka aj fkhsjaf jsalf"
            imageSrc="/foot-conditions/mortons-neuroma.jpg"
            imageAlt="Morton's Neuroma"
          />
        </ul>
      </section>

    </div >
  )
}