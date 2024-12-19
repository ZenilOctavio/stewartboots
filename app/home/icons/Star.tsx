export function StarIcon(props: React.SVGAttributes<SVGSVGElement>) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      data-name="star filled"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 4" />
      <path
        strokeMiterlimit={10}
        fill="#e1b53e"
        strokeWidth={1.5}
        d="m12 18-5.878 3.09 1.123-6.545L2.489 9.91l6.572-.955L12 3l2.939 5.955 6.572.955-4.755 4.635 1.123 6.545Z"
      />
    </svg>
  )
}