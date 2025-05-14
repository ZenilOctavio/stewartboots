import AdminNavigationBar from "./components/AdminNavigationBar";

export default async function AdminLayout({children}: {children: React.ReactNode}){
  return (
    <>
      <div className="flex h-screen gap-2">
        <AdminNavigationBar className="basis-80"/>
        <main className="basis-full py-3 px-5 overflow-y-auto">
          {children}
        </main>

      </div>
    </>
  )

}