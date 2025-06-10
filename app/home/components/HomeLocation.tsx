import Image from 'next/image'
import { Button } from '@/app/ui/Button'
import { Phone, ArrowUpRight } from 'lucide-react'
import { mapsLink } from '../constants'
import { contactDictionary } from '../constants'


export function HomeCompanyLocation(){
  return (      
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
      )
}