/**
 * Nogx base layout
 */
import { Outlet } from "react-router-dom";

// components
import Header from "./components/header";
import Footer from "./components/footer";

function HomeLayout() {
  return (
    <div className="bg-gray-200 dark:bg-gray-700">
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
