import clsx from "clsx";
import Image from "next/image";
// import { redirect } from "next/navigation";

interface FootConditionItemProps {
  title: string
  content: string
  imageSrc?: string
  imageAlt?: string
  imageClassName?: string
  itemId: string
}

const footConditions = [
  {
    title: "Bunions",
    content: "Many of our customers, particularly women, have shared their relief and gratitude after canceling planned bunionectomies, thanks to our innovative boot designs. What sets our bunion-friendly boots apart? Our unique approach ensures that while providing ample space and comfort for bunions, the exterior of the boots remains sleek and stylish—so you don't have to compromise between function and fashion. If bunions have been holding you back, discover the difference that our thoughtfully designed boots can make. Experience the comfort and confidence of footwear that works with your feet, not against them.",
    imageSrc: "/foot-conditions/bunions.png",
    imageAlt: "Bunions"
  },
  {
    title: "Pronation & Supination",
    content: "These conditions can affect your alignment, balance, and overall comfort, but the right footwear makes all the difference. Our boots are designed to provide the perfect combination of support and stability for those with pronation or supination. Whether your feet roll inward (pronation) or outward (supination), our designs help evenly distribute weight and reduce strain, so you can walk, work, and explore in comfort. Step confidently knowing that our boots are tailored to support your unique stride—helping you achieve balance and relief with every step.",
    imageClassName: "-scale-x-100",
    imageSrc: "/foot-conditions/hammertoe.png",
    imageAlt: "Hammertoes"
  },
  {
    title: "Collapsed Arches",
    content: "This condition can lead to discomfort and fatigue, but our expertly crafted designs provide the support and structure your feet need. Our boots are engineered with features that stabilize the foot and promote proper alignment, helping to alleviate the strain caused by collapsed arches. With our footwear, you can enjoy long-lasting comfort without sacrificing style or durability.",
    imageSrc: "/foot-conditions/athletefoot.png",
    imageAlt: "Athlete Foot"
  },
  {
    title: "Plantar Faciitis",
    content: "Crafted with cushioning and arch support in mind, our boots help reduce the strain on the plantar fascia, easing the pain and discomfort often associated with prolonged standing or walking. Whether you're on your feet all day or exploring the great outdoors, our boots work to keep you comfortable every step of the way. Discover how our expertly designed footwear can turn every step from a painful chore into a pain-free experience. Let our boots give your feet the support they deserve.",
    imageSrc: "/foot-conditions/heelspurs.png",
    imageAlt: "Plantar Faciitis"
  },
  {
    title: "Compatibility with Leg braces",
    content: "Our boots are engineered to provide ample space and adjustability, making them compatible with most leg braces. Whether you need extra support, easy access, or a durable design that can handle daily wear, our boots deliver solutions tailored to your lifestyle. With our expertise, you can count on boots that work seamlessly with your leg braces, offering the comfort, stability, and confidence you deserve in every step.",
    // imageSrc: "/foot-conditions/ingrowntoenails.png",
    imageAlt: "Ingrown Toe Nails"
  },
  {
    title: "Morton's Neuroma",
    content: "Our designs prioritize cushioning and pressure relief in the forefoot, helping to reduce irritation and support the sensitive areas between the toes. With our carefully engineered fits, you'll enjoy room for movement and all-day comfort without compromising on durability or appearance.",
    imageSrc: "/foot-conditions/mortons-neuroma.jpg",
    imageAlt: "Morton's Neuroma"
  },
  {
    title: "Drop foot",
    content: "Our boots feature thoughtful adjustments, such as reinforced support and ample room for custom orthotics or braces, ensuring a secure fit that aids in foot lift and stride balance. Durable yet lightweight, our designs help reduce fatigue while offering the protection and ease of movement you need.",
    imageClassName: "-scale-x-100",
    imageSrc: "/foot-conditions/man-stretching-his-legs-outside.png",
    imageAlt: "Morton's Neuroma"
  },
  {
    title: "Leg Length Difference",
    content: "Our expertise ensures that every step feels natural, regardless of the difference in leg length. Our boots are designed with adaptability in mind, allowing for modifications such as lifts or orthotic inserts to accommodate your specific needs. This means you can enjoy improved alignment, reduced strain, and greater comfort—all without sacrificing style or durability.",
    // imageSrc: "/foot-conditions/mortons-neuroma.jpg",
    imageAlt: "Morton's Neuroma"
  },
  {
    title: "Corns",
    content: "Our designs are built to reduce pressure and friction, helping to protect sensitive areas and prevent corns from worsening. Featuring soft, cushioned interiors and spacious toe boxes, our boots provide the gentle relief your feet need without compromising on style. Every pair is thoughtfully crafted to ensure comfort, durability, and protection, so you can go about your day pain-free.",
    // imageSrc: "/foot-conditions/mortons-neuroma.jpg",
    imageAlt: "Morton's Neuroma"
  },
  {
    title: "Different feet sizes",
    content: "Our boots are designed with adjustability and customization in mind, offering features like flexible lacing systems and adaptable insoles to accommodate each foot individually. This means a secure fit for both feet, without pinching, slipping, or uneven pressure.",
    // imageSrc: "/foot-conditions/mortons-neuroma.jpg",
    imageAlt: "Morton's Neuroma"
  },
  {
    title: "Nagging Issues with Knees, Hips or Lower Back",
    content: "Many people unknowingly struggle with knee, hip, or lower back pain without realizing that the root cause often lies in poorly fitted footwear. In most cases, when there's no underlying medical condition, adjusting footwear can significantly reduce or eliminate pain by improving posture and balance. Our boots are crafted with ergonomic designs that promote proper alignment and evenly distribute weight across your feet, relieving strain on the knees, hips, and lower back.",
    imageSrc: "/foot-conditions/man-stretching-knees.png",
    imageAlt: "Morton's Neuroma"
  }
];


function FootConditionItem({ title, content, imageSrc, imageAlt, itemId, imageClassName = "" }: FootConditionItemProps) {



  return (
    <li id={itemId} className="gap-4 basis-3/5 flex flex-col md:flex-row items-center justify-between w-full">
      {
        <figure>
          {
            imageSrc &&
            <><Image
              className={clsx("object-cover", imageClassName)}
              src={imageSrc}
              width={500}
              height={500}
              alt={imageAlt || ''}
            />
              <figcaption className="text-xs float-end">
                Designed by <a href="https://www.freepik.com/" className="text-blue-700">Freepik</a>
              </figcaption></>
          }
        </figure>
      }
      <article className="bg-secondary pt-6 text-center flex flex-col items-center  pb-10">
        <h3 className="text-xl font-roboto text-center font-bold">{title}</h3>
        <p className="md:w-[50ch] text-sm text-center md:text-start font-light mt-2 tracking-wide">{content}</p>
      </article>
    </li>
  )
}


export default function FootConditionsPage() {
  // redirect('/')

  return (
    <div className="pt-20 w-full flex flex-col gap-10 py-16">

      <section className="bg-secondary  flex flex-col-reverse items-center md:flex-row justify-between">
        <main className="md:px-20 px-4 md:py-10 py-4 md:basis-1/3 order-2 md:order-1">
          <h1 className="md:text-3xl text-xl font-bold tracking-widest">Foot Conditions We Treat</h1>
          <p className="font-light md:w-[45ch] md:text-base text-sm">With over half a century of experience, we have dedicated ourselves to understanding and treating a wide range of foot problems. From common issues like <strong>bunions</strong>, <strong>pronation</strong>, and <strong>supination</strong> to more complex conditions, our solutions are crafted to provide lasting relief and improve comfort.</p>
        </main>
        <figure className="md:basis-1/6 max-w-[60vw] order-1 md:order-2">
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
        <ol className={`flex flex-col flex-[0_0_1rem] flex-wrap overflow-hidden md:h-[8rem] mt-4`}>
          {
            footConditions.map(((footCondition, index) => {
              const itemId = footCondition.title.toLowerCase().replaceAll(" ", "-")

              return (
                <li
                  key={itemId}
                  className="block hover:text-primary transition-all"
                >
                  <a href={`#${itemId}`}>
                    {index + 1}. {footCondition.title}
                  </a>
                </li>
              )
            }))
          }
        </ol>
      </section>

      <section>

        <ul className={clsx(
          "flex flex-col gap-24",
          "[&>*:nth-child(odd)]:md:flex-row [&>*:nth-child(even)]:md:flex-row-reverse",
          "[&>*:nth-child(odd)>article]:md:pl-28 [&>*:nth-child(even)>article]:md:pr-28",
          "[&>*:nth-child(odd)>article]:md:pr-16 [&>*:nth-child(even)>article]:md:pl-16",
          "[&>*:nth-child(odd)>article]:md:rounded-l-full [&>*:nth-child(even)>article]:md:rounded-r-full",
        )}>

          {
            footConditions.map((footCondition => {
              const itemId = footCondition.title.toLowerCase().replaceAll(" ", "-")

              return (
                <FootConditionItem key={footCondition.title} itemId={itemId} {...footCondition} />
              )
            }))
          }
        </ul>
      </section>

    </div >
  )
}