import clsx from "clsx";
import { Navbar } from "./Navbar";

export function Header() {


  return (
    <header
      className={
        clsx(
          "bg-backgroundSecondary flex justify-center items-center px-4 pb-4 md:pb-0 fixed top-0 left-0 w-full",
          "md:flex-col"
        )
      }
    >
      <section className="flex flex-col items-center basis-11/12">
        <div className="flex gap-6 items-center"><h2 className="text-primary">Since</h2> <h2 className="text-primary">1940</h2></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-background tracking-widest">Stewart Boots</h1>
      </section>
      <Navbar className="w-full mt-4 self-end basis-1/12" />
    </header>
  )
}