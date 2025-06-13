import { NewLocationMap } from "@/app/components/NewLocationMap";
import { Button } from "@/app/ui/Button";
import { ArrowUpRight, Phone } from "lucide-react";
import Link from "next/link";
import { contactDictionary } from "../../constants";

interface NewLocationMapProps {
  title?: string
  content?: string
  mapURL?: string
  phone?: string
}

export function NewLocationAdvice({ title = "", content = "", mapURL = "", phone = "" }: NewLocationMapProps) {
  const mapSrc = mapURL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13504.617124999664!2d-110.8878656683988!3d32.20007318041942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d66ff0d77bb9d7%3A0x5c2a1d19412e7290!2s4939%20E%2029th%20St%2C%20Tucson%2C%20AZ%2085711!5e0!3m2!1ses!2sus!4v1734648046443!5m2!1ses!2sus"
  const phoneNumber = phone || contactDictionary['phone']['data']
  return (
    <article
      className="bg-secondary flex flex-col md:flex-row justify-center md:justify-between items-center"
    >
      <main className="flex flex-col gap-2 justify-between p-4 md:p-10">
        <h2 className="text-4xl font-extrabold tracking-widest">{title}</h2>
        <p>{content}</p>
        <div className="flex justify-between gap-4">
          <Link href={mapSrc}>
            <Button trailingIcon={<ArrowUpRight />} className="flex flex-1 items-center justify-between gap-2">Go to maps</Button>
          </Link>
          <Link href={`tel:${phoneNumber}`}>
            <Button variant="secondary" trailingIcon={<Phone />} className="flex flex-1 items-center justify-between gap-2">Call us</Button>
          </Link>

        </div>
      </main>
      <figure className="p-4 md:p-10 basis-1/3 h-96 md:w-auto">
        <NewLocationMap src={mapSrc} />
      </figure>
    </article>
  )
}