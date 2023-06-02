import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ContactsPage from './pages/ContactsPage';
import CreateContact from './components/Contacts/CreateContact';
import ModifyContact from './components/Contacts/ModifyContact';
import ChartsMapsPage from './pages/ChartsMapsPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  const [isSubMenuHidden, setSubMenuHidden] = useState(false);
  const [isSidebarHidden, setSidebarHidden] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuHidden(!isSubMenuHidden);
  };

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  // Auto-close sidebar for smaller devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarHidden(true);
      } else {
        setSidebarHidden(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize sidebar visibility on load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-white-600">
        <span
          className="absolute text-white text-4xl top-1 left-1 cursor-pointer"
          onClick={toggleSidebar}
        >
          <i className="fa-solid fa-bars py-1 px-3 text-2xl text-blue-500 rounded-md"></i>
        </span>
        <div className="flex">
          {!isSidebarHidden && (
            <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
              <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center">
                  <Link to="/" className="flex">
                    <i className="fa-brands fa-nfc-symbol px-2 py-1 rounded-full bg-blue-500"></i>
                    <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                      C.M.S
                    </h1>
                  </Link>
                  <i
                    className="fa-solid fa-xmark cursor-pointer ml-auto lg:hidden"
                    onClick={toggleSidebar}
                  ></i>
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
              </div>
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white">
                <i className="fa-regular fa-address-book"></i>
                <Link
                  to="/contacts"
                  className="text-[15px] ml-4 text-gray-200 font-bold"
                >
                  Contacts
                </Link>
              </div>
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white">
                <i className="fa-solid fa-chart-line"></i>
                <Link
                  to="/chartsmaps"
                  className="text-[15px] ml-4 text-gray-200 font-bold"
                >
                  Charts and Maps
                </Link>
              </div>
              <div className="my-4 bg-gray-600 h-[1px]"></div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={toggleSubMenu}
              >
                <i className="fa-solid fa-circle-nodes"></i>
                <div className="flex justify-between w-full items-center">
                  <span className="text-[15px] ml-4 text-gray-200 font-bold">
                    Connect With Me
                  </span>
                  <span
                    className={`text-sm ${isSubMenuHidden ? 'rotate-0' : ''}`}
                    id="arrow"
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
              </div>
              <div
                className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
                  isSubMenuHidden ? 'hidden' : ''
                }`}
                id="submenu"
              >
                <a
                  href="https://github.com/itsvaibhavmishra"
                  className="block cursor-pointer p-2 hover:bg-white hover:text-black duration-300 rounded-md mt-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github mr-4 text-lg"></i>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/itsvaibhavmishra/"
                  className="block cursor-pointer p-2 hover:bg-[#0077B5] duration-300 rounded-md mt-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in mr-4 text-lg"></i>
                  LinkedIn
                </a>
                <a
                  href="https://vaibhaw.netlify.app/"
                  className="block cursor-pointer p-2 hover:bg-[#EA4335] duration-300 rounded-md mt-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-user-tie mr-4 text-lg"></i>
                  Portfolio
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#161B22] flex justify-center">
                <a
                  href="https://github.com/itsvaibhavmishra/cms-dashboard"
                  className="w-full max-w-screen-lg p-2.5 pl-16 flex items-center px-4 duration-300 cursor-pointer hover:bg-white hover:text-black text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github-alt"></i>
                  <span className="text-[15px] ml-4 font-bold">
                    GitHub Repository
                  </span>
                </a>
              </div>
            </div>
          )}
          <div
            className={` flex-1 p-4 ${
              isSidebarHidden ? '' : 'ml-[300px]'
            } transition-all duration-300`}
          >
            {/* Content goes here */}
            <div className="grid place-items-center">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="flex justify-center items-center min-h-screen">
                      <div className="bg-white p-8 rounded shadow-lg">
                        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
                          Assignmet By
                          <img
                            src="https://taiyo.ai/wp-content/uploads/Taiyo-logo.png"
                            alt="TaiyoLogo"
                          />
                        </h1>
                        <p className="text-lg text-center text-gray-600">
                          Thank you for visiting! Feel free to explore.
                        </p>
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/contacts"
                  element={
                    <>
                      <ContactsPage />
                    </>
                  }
                />

                <Route
                  path="/contacts/create"
                  element={
                    <>
                      <CreateContact />
                    </>
                  }
                />

                <Route
                  path="/contacts/edit/:id"
                  element={
                    <>
                      <ModifyContact />
                    </>
                  }
                />

                <Route
                  path="/contacts/edit/:id"
                  element={
                    <>
                      <ModifyContact />
                    </>
                  }
                />

                <Route
                  path="/chartsmaps"
                  element={
                    <>
                      <ChartsMapsPage />
                    </>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
