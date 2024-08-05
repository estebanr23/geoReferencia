import { Sidebar } from "flowbite-react";
import { AlignCenter, ArrowRight, Inbox, Kanban, LayoutDashboard, ShoppingCart, User } from "lucide-react";

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
        <div className="w-1/6 h-full">
          <Sidebar className="w-full" aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={LayoutDashboard}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Collapse icon={Kanban} label="E-commerce">
                  <Sidebar.Item href="#">Products</Sidebar.Item>
                  <Sidebar.Item href="#">Sales</Sidebar.Item>
                  <Sidebar.Item href="#">Refunds</Sidebar.Item>
                  <Sidebar.Item href="#">Shipping</Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item href="#" icon={Inbox}>
                  Inbox
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={User}>
                  Users
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={ShoppingCart}>
                  Products
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={ArrowRight}>
                  Sign In
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={AlignCenter}>
                  Sign Up
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>

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