import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="px-4 py-2 bg-slate-800">
        <div className="flex justify-start text-white">
          <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </div>
      </div>

      <div className="flex flex-grow">
        <Sidebar />

        <div className="flex-grow h-full">{children}</div>
      </div>

      <div className="p-4 bg-slate-800">
        <div className="flex justify-end text-white">
          <span className="self-center whitespace-nowrap dark:text-white">Modernización © 2024</span>
        </div>
      </div>
    </div>
  );
}

export default Layout;