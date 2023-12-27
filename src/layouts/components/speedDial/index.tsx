import { useState } from "react";
import {
  IoAddOutline,
  IoPrintOutline,
  IoShareSocialOutline,
  IoCloudDownloadOutline,
  IoCopyOutline,
} from "react-icons/io5";

function SpeedDial() {
  const [isDialOpen, setIsDialOpen] = useState(false);

  const handleDialToggle = () => {
    setIsDialOpen(!isDialOpen);
  };

  return (
    <div data-dial-init className="fixed end-6 bottom-6 group">
      <div
        id="speed-dial-menu-bottom-right"
        className={`"flex flex-col items-center mb-4 space-y-2 transition-all duration-300 ${
          isDialOpen ? "" : "hidden"
        } "`}
      >
        <button
          type="button"
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-dark-500 hover:text-dark-900 bg-white rounded-full border border-dark-200 dark:border-dark-600 shadow-sm dark:hover:text-white dark:text-dark-400 hover:bg-dark-50 dark:bg-dark-700 dark:hover:bg-dark-600 focus:ring-4 focus:ring-dark-300 focus:outline-none dark:focus:ring-dark-400"
        >
          <IoShareSocialOutline className="w-5 h-5" />
          <span className="sr-only">Share</span>
        </button>
        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-dark-700"
        >
          Share
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          data-tooltip-target="tooltip-print"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-dark-500 hover:text-dark-900 bg-white rounded-full border border-dark-200 dark:border-dark-600 shadow-sm dark:hover:text-white dark:text-dark-400 hover:bg-dark-50 dark:bg-dark-700 dark:hover:bg-dark-600 focus:ring-4 focus:ring-dark-300 focus:outline-none dark:focus:ring-dark-400"
        >
          <IoPrintOutline className="w-5 h-5" />
          <span className="sr-only">Print</span>
        </button>
        <div
          id="tooltip-print"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-dark-700"
        >
          Print
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          data-tooltip-target="tooltip-download"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-dark-500 hover:text-dark-900 bg-white rounded-full border border-dark-200 dark:border-dark-600 shadow-sm dark:hover:text-white dark:text-dark-400 hover:bg-dark-50 dark:bg-dark-700 dark:hover:bg-dark-600 focus:ring-4 focus:ring-dark-300 focus:outline-none dark:focus:ring-dark-400"
        >
          <IoCloudDownloadOutline className="w-5 h-5" />
          <span className="sr-only">Download</span>
        </button>
        <div
          id="tooltip-download"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-dark-700"
        >
          Download
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          data-tooltip-target="tooltip-copy"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-dark-500 hover:text-dark-900 bg-white rounded-full border border-dark-200 dark:border-dark-600 dark:hover:text-white shadow-sm dark:text-dark-400 hover:bg-dark-50 dark:bg-dark-700 dark:hover:bg-dark-600 focus:ring-4 focus:ring-dark-300 focus:outline-none dark:focus:ring-dark-400"
        >
          <IoCopyOutline className="w-5 h-5" />
          <span className="sr-only">Copy</span>
        </button>
        <div
          id="tooltip-copy"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-dark-700"
        >
          Copy
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <button
        onClick={() => handleDialToggle()}
        type="button"
        data-dial-toggle="speed-dial-menu-bottom-right"
        aria-controls="speed-dial-menu-bottom-right"
        aria-expanded="false"
        className={`flex items-center justify-center text-white bg-primary-700 rounded-full w-14 h-14 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800 transition-all duration-300 ${
          isDialOpen ? "rotate-45" : ""
        } `}
      >
        <IoAddOutline className="w-6 h-6 font-bold" />
      </button>
    </div>
  );
}

export default SpeedDial;
