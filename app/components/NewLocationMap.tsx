interface Props {
  src: string
}
export function NewLocationMap({src}:Props) {
  return (
    <iframe
      className="w-full h-full"
      src={src}
      style={{ border: 0 }}
      allowFullScreen loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    >

    </iframe>
  )
}