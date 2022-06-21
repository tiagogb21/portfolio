import SideBar from "../components/SideBar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-6 lg:mb-0">
      <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
        <SideBar />
      </div>
      <div className="flex flex-col col-span-10 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
