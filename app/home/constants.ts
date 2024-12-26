import { FacebookIcon, InstagramIcon } from "@/app/home/icons/SocialMedia";
import { CircleFadingPlusIcon, Mail, MapPin, Phone } from 'lucide-react'
export const websiteNavItems = [
  { content: "HOME", href: "/" },
  { content: "PRODUCTS", href: "/products" },
  { content: "ABOUT", href: "/about" },
  { content: "CONTACT", href: "/contact" }
]

export const socialMediaLinks = [
  { content: "INSTAGRAM", href: "https://www.instagram.com/zeniloctavio/" },
  { content: "FACEBOOK", href: "https://www.facebook.com/octavio.zenillopez/" }
]

export const contactDictionary = {
  'location': { name: 'Location', data: '4939 E 29th ST' },
  'phone': { name: 'Phone number', data: '(520) 622-2706' },
  'email': { name: 'Email', data: 'lorem@ipsum.com' },

}

export const contactData = [
  contactDictionary['location'],
  contactDictionary['phone'],
  contactDictionary['email'],
]

export const socialMediaIconMapper = (name: string) => {

  const key = name.toLowerCase()

  switch (key) {

    case 'facebook':
      return FacebookIcon
    case 'instagram':
      return InstagramIcon
    default:
      return CircleFadingPlusIcon

  }

}

export const contactDataIconMapper = (name: string) => {

  const key = name.toLowerCase()

  switch (key) {

    case 'location':
      return MapPin
    case 'phone number':
      return Phone

    case 'email':
      return Mail

    default:
      return CircleFadingPlusIcon

  }
}