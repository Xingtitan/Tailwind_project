const Footer = () => {
  return (
    <footer className="py-5 px-16 text-white bg-[#030917] relative">
      <ul className="w-full justify-center flex flex-col text-center sm:flex-row mx-auto space-y-2 sm:space-y-0 sm:space-x-2 mt-6 overflow-hidden">
        <li>
          <button className="sm:px-4 text-gray-300 hover:text-gray-50">
            About us
          </button>
        </li>
        <li>
          <button className="sm:px-4 text-gray-300 hover:text-gray-50">
            Featured Trips
          </button>
        </li>
        <li>
          <button className="sm:px-4 text-gray-300 hover:text-gray-50">
            Updates
          </button>
        </li>
        <li>
          <button className="sm:px-4 text-gray-300 hover:text-gray-50">
            Contact
          </button>
        </li>
      </ul>

      <div className="items-center justify-between mt-4">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6">
          <button className="text-gray-300 hover:text-gray-200 p-1 sm:p-2 inline-flex items-center dark:hover:text-gray-300">
            <svg
              className="w-7 h-7 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button className="text-gray-300 hover:text-gray-200 p-1 sm:p-2 inline-flex items-center dark:hover:text-gray-300">
            <svg
              className="w-7 h-7 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </button>
          <button className="text-gray-300 hover:text-gray-200  p-1 sm:p-2  inline-flex items-center dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </button>
        </div>
        <div className="mx-auto pt-5 text-sm text-gray-400 text-center">
          Email: info@himalayaguides.com
        </div>
        <div className="mx-auto py-2 text-sm text-gray-400 text-center">
          Call: +977 1 4821060
        </div>
        <div className="mx-auto text-sm text-gray-400 text-center">
          Top Himalaya Guides/Privacy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
