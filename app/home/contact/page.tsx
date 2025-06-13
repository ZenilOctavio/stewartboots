import { ContactItem } from "./components/ContactItem";
import { NewLocationMap } from "@/app/components/NewLocationMap";
import { contactData, contactDataIconMapper } from "../constants";
import { socialMediaIconMapper, socialMediaLinks } from "../constants";
import { RoundedIcon } from "@/app/components/RoundedIcon";

export default function ContactPage() {
  return (
    <div
      className="py-10 w-full flex flex-col gap-10 px-10 pt-24"
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
          <NewLocationMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13504.617124999664!2d-110.8878656683988!3d32.20007318041942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d66ff0d77bb9d7%3A0x5c2a1d19412e7290!2s4939%20E%2029th%20St%2C%20Tucson%2C%20AZ%2085711!5e0!3m2!1ses!2sus!4v1734648046443!5m2!1ses!2sus"/>
        </figure>
      </main>

      <section>
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
      </section>

    </div>
  )
}