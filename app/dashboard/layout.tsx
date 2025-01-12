import SideNav from '@/app/ui/dashboard/sidenav';
import UserArea from '@/app/ui/dashboard/user-area';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-gray-50">
        <div className="lg:py-4">
         <UserArea/>
         </div>
        <div className="justify-center items-center flex flex-col h-full space-y-8 mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
