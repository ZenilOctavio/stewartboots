import { ContactItem } from "./components/ContactItem";
import { NewLocationMap } from "../components/NewLocationMap";
import { RoundedIcon } from "../components/RoundedIcon";
import { contactData, contactDataIconMapper, socialMediaLinks } from "../home/constants";
import { socialMediaIconMapper } from "../home/constants";

export default function ContactPage() {
  return (
    <div
      className="py-10 w-full flex flex-col gap-10 px-10 pt-20"
    >
      <h1 className="text-4xl font-extrabold tracking-widest text-center">Contact Us</h1>
      <p className="text-center">At Steward Boot Company, we believe that exceptional customer service begins with personal, direct communication. Whether you need advice on finding the perfect fit or have questions about our orthopedic solutions, we’re here to help.</p>

      <main className="flex flex-col md:flex-row gap-10 md:gap-0 w-full justify-between">
        <section className="bg-secondary rounded-xl p-6 basis-1/3">
          <ul className="flex flex-col gap-4">
            {
              contactData.map(contactItem => {
                const Icon = contactDataIconMapper(contactItem.name)

                return (
                  <li key={contactItem.data}>
                    <ContactItem Icon={Icon} title={contactItem.name} content={contactItem.data} />
                  </li>
                )
              })
            }
          </ul>
        </section>
        <figure className="basis-1/3">
          <NewLocationMap />
        </figure>
      </main>

      {/* <section>
        <h2 className="text-2xl font-bold">Follow Us</h2>
        <ul className="flex gap-6 mt-6">
          {
            socialMediaLinks.map(link => {

              const Icon = socialMediaIconMapper(link.content)

              return (
                <li key={link.href}>
                  <a href={link.href} className="flex flex-col items-center justify-center">
                    <RoundedIcon className="fill-background" Icon={Icon} />
                    <span className="font-light">{link.content}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </section> */}

    </div>
  )
}