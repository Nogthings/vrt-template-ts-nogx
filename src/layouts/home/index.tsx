/**
 * Nogx base layout
 */
import { Outlet } from "react-router-dom";

// components
import Header from "./components/header";
import Footer from "./components/footer";

function HomeLayout() {
  return (
    <div className="bg-dark-50 dark:bg-dark-900 transition-all ease-in-out duration-300">
      <div className="px-4 max-w-4xl mx-auto">
        <Header />
        <div className=" px-4 py-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;
