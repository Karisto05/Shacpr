const Navbar = () => {
  return (
    <nav className="hidden lg:block px-[188px] bg-gray-100">
      <div className="container bg-white mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="/" className="text-green-600 font-roboto text-xs font-bold">Home</a>
          <a href="/" className="text-gray-800 hover:text-gray-600 font-roboto text-xs font-bold">Courses</a>
          <a href="/" className="text-gray-800 hover:text-gray-600 font-roboto text-xs font-bold">Hybrid Courses</a>
          <a href="/" className="text-gray-800 hover:text-gray-600 font-roboto text-xs font-bold">Training Centers</a>
          <a href="/" className="text-gray-800 hover:text-gray-600 font-roboto text-xs font-bold">About Us</a>
          <a href="/" className="text-gray-800 hover:text-gray-600 font-roboto text-xs font-bold">Register</a>
          <a href="/" className="text-gray-800 hover:text-gray-600 font-roboto text-xs font-bold">Login</a>
        </div>
        <div className="flex space-x-2">
          <div className="relative inline-block text-left">
            <button className="px-4 py-2 bg-gray-100 rounded-md text-gray-600 font-medium inline-flex items-center">
              English
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul className="absolute hidden w-40 bg-white rounded-md shadow-lg mt-2">
              <li className="px-4 py-2 hover:bg-gray-100">English</li>
              <li className="px-4 py-2 hover:bg-gray-100">Spanish</li>
              <li className="px-4 py-2 hover:bg-gray-100">French</li>
            </ul>
          </div>
          <button className="px-4 py-2 bg-gray-100 rounded-md text-gray-600 font-medium inline-flex items-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;