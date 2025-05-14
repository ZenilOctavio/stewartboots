import { FacebookIcon, InstagramIcon } from "@/app/home/icons/SocialMedia";
import { CircleFadingPlusIcon, Mail, MapPin, Phone } from 'lucide-react'
export const websiteNavItems = [
  { content: "HOME", href: "/home" },
  { content: "OUR DESIGNS", href: "/home/designs" },
  { content: "ABOUT", href: "/home/about" },
  { content: "CONTACT", href: "/home/contact" }
]

export const mapsLink = 'https://maps.app.goo.gl/VWUVuZERAweCRv8w7'

export const socialMediaLinks = [
  { content: "INSTAGRAM", href: "https://www.instagram.com/stewart.boot" },
  { content: "FACEBOOK", href: "https://www.facebook.com/profile.php?id=61571619759313&mibextid=ZbWKwL" }
]

export const contactDictionary = {
  'location': { name: 'Location', data: '4939 E 29th ST' },
  'phone': { name: 'Phone number', data: '(520) 622-2706' },
  'email': { name: 'Email', data: 'stwboot50@gmail.com' },

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

export const testimonials = [
  {
    author: 'Bruce A. Wolpa',
    content: `I have known Victor at
      Stewart Boots for over 40
      years and I have had the
      pleasure of wearing his
      700% hand-crafted custom
      boots since I arrived in
      Tucson. Over the years (7
      pairs later) / can say that
      there is not a more
      comfortable, well-fitting
      custom designed boot
      available anywhere. You are
      able to select your leather,
      toe and heel style and
      custom stitching as well
      which makes for a great
      buying experience. The final
      product is like wearing a
      pair of house slippers!!!
      Treat yourself to a great one
      ofa kind boot, you and your
      feet deserve it.`
  },
  {
    author: 'Adriene Kyle',
    content: `Stewart Boots Company is
definitely an extraordinary
experience. Victor and Linda
are masterminds when it
comes to designing and
manufacturing customized
boots. Victor is very
meticulous tracing your feet
and identifying feet
issues. Linda is very
knowledgeable about the
various type of leather and
what will work best based
on your needs. Once the
manufacturing process was
complete, I received the
most beautiful and
comfortable boots I have
ever had. My boots are now
over 5 years old and they
are still as beautiful and
comfortable as the first day.`
  },
  {
    author: 'Michael Hart',
    content: `I wandered into their shop
    one day to ask directions
    and fell in love with the
    workmanship of their hand
    made boots. Been wearing
    them since 1980. Have gone
    through several pairs. Only
    boots that ever fit my wide
    feet. Still have two pairs in
    good condition that were
    purchased 9 years ago that
    will probably out live me. I
    grew up in Tucson and have
    worn boots all my life. These
    are the most comfortable
    boots I have ever had the
    opportunity to wear.`
  },
  {
    author: 'Danielle Borg-James',
    content: `Stewart Boot Company is a
diamond in the rough.
Victor and Linda run an
incredibly genuine and
professional business. They
are such kind,
understanding and generous
people. You can tell they are
experts at their craft. Victor
has a deep knowledge of
everything to do with
walking and foot ankle and
knee alignment, he knew /
was a downhill skier just by
the look of my feet! The
products Stewart Boot
creates are of the highest
quality! My pair of Stewart
Boots are my favorite and
best pair of shoes I've ever
owned! 70/70`
  },

]