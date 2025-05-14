import { FacebookIcon, InstagramIcon } from "@/app/home/icons/SocialMedia";
import { Pen } from "lucide-react";

export default function AdminContactPage(){
  return (
    <>
      <header>
        <h1 className="text-3xl tracking-tight font-semibold">Contact Information</h1>
      </header> 
      <hr />
      <section className="mt-6 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold underline">Business Information</h2>
        <main className="mt-4 bg-white shadow-md p-2 rounded-md">
        <table className="h-full w-full">
          <thead>
            <tr>
              <th className="p-3 font-bold tracking-wider border-r-2 border-slate-300 last:border-none">Name</th>
              <th className="p-3 font-bold tracking-wider border-r-2 border-slate-300 last:border-none">Data</th>
              <th className="p-3 font-bold tracking-wider border-r-2 border-slate-300 last:border-none">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-200">
              <td className="p-3 font-bold border-r-2 border-slate-300 last:border-none">Location</td>
              <td className="p-3 border-r-2 border-slate-300 last:border-none">4939 E 29th ST</td>
              <td className="p-3 flex justify-center border-r-2 border-slate-300 last:border-none"><button className="bg-backgroundSecondary text-white p-2 rounded-md hover:bg-white hover:text-backgroundSecondary transition-colors"><Pen/></button></td>
            </tr> 
            <tr>
              <td className="p-3 font-bold border-r-2 border-slate-300 last:border-none">Phone number</td>
              <td className="p-3 border-r-2 border-slate-300 last:border-none">(520) 662-2706</td>
              <td className="p-3 flex justify-center border-r-2 border-slate-300 last:border-none"><button className="bg-backgroundSecondary text-white p-2 rounded-md hover:bg-white hover:text-backgroundSecondary transition-colors"><Pen/></button></td>

            </tr>
            <tr className="bg-slate-200 ">
              <td className="p-3 font-bold border-r-2 border-slate-300 last:border-none">Email</td>
              <td className="p-3 border-r-2 border-slate-300 last:border-none">stwboot50@gmail.com</td>
              <td className="p-3 flex justify-center border-r-2 border-slate-300 last:border-none"><button className="bg-backgroundSecondary text-white p-2 rounded-md hover:bg-white hover:text-backgroundSecondary transition-colors"><Pen/></button></td>
            </tr>
          </tbody>
        </table>  
        </main> 
      </section>
      <section>
        <h2 className="text-2xl font-semibold underline mt-6">Social Media</h2>
        <main className="mt-3 bg-white shadow-md p-2 rounded-md">
        <table className="w-full h-full">
          <thead>
            <tr>
              <th className="p-3 font-bold tracking-wider border-r-2 border-slate-300 last:border-none">Social Media</th>
              <th className="p-3 font-bold tracking-wider border-r-2 border-slate-300 last:border-none">Account name</th>
              <th className="p-3 font-bold tracking-wider border-r-2 border-slate-300 last:border-none">Link</th>
              <th className="p-3 font-bold tracking-wider border-r-2 border-slate-300 last:border-none">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-200">
             <td className="p-3 font-bold border-r-2 border-slate-300 last:border-none">
              <div className="flex gap-2">
                <FacebookIcon className="w-6 h-6 fill-backgroundSecondary "/>
                Facebook 
              </div> 
             </td>
              <td className="p-3 font-bold border-r-2 border-slate-300 last:border-none"><div className="flex items-center">Stw Boots</div></td>
              <td className="p-3 text-blue-800 hover:underline border-r-2 border-slate-300 last:border-none"><div className="flec items-center">https://www.facebook.com/profile.php?id=61571619759313&mibextid=ZbWKwL</div></td>
              <td className="p-3 border-r-2 border-slate-300 last:border-none"><button className="bg-backgroundSecondary text-white p-2 rounded-md hover:bg-white hover:text-backgroundSecondary transition-colors"><Pen/></button></td>
            </tr> 
            <tr>
              <td className="p-3 font-bold  border-r-2 border-slate-300 last:border-none">
                <div className="flex gap-2">
                <InstagramIcon className="w-6 h-6 fill-backgroundSecondary "/>
                Instagram
                </div>
              </td>
              <td className="p-3 font-bold  border-r-2 border-slate-300 last:border-none"><div className="flex items-center">Stw Boots</div></td>
              <td className="p-3 text-blue-800 hover:underline border-r-2 border-slate-300 last:border-none"><div>https://www.instagram.com/stewart.boot</div></td>
              <td className="p-3 border-r-2 border-slate-300 last:border-none"><button className="bg-backgroundSecondary text-white p-2 rounded-md hover:bg-white hover:text-backgroundSecondary transition-colors"><Pen/></button></td>
            </tr> 
            
          </tbody>
        </table>  
        </main> 
      </section>
    </>
  )
}