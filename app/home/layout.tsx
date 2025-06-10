// import { Footer } from "../components/Footer";
// import { Header } from "../components/Header";

export default function HomeLayout({children}: {children: React.ReactNode}){
  return (
       <>
        {/* <Header /> */}
        <main className="mt-40">{children}</main>
        {/* <Footer /> */}
      </> 
  )
}