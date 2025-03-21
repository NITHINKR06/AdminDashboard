import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// import Error from './pages/Error';
// import Atom from './components/Atom';

const Layout = () => {
  // State to manage sidebar open/close on mobile screens
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`
            fixed inset-y-0 left-0 transform
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            transition-transform duration-300 ease-in-out
            md:relative md:translate-x-0
            z-50
          `}
        >
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
        {/* Main content */}
        <div className="flex-1 ml-0">
          <Navbar toggleSidebar={toggleSidebar} />
          <Outlet />
        </div>
      </div>
      <footer style={{ width: '100%', bottom: 0 }}>
        {/* <Footer /> */}
      </footer>
    </>
  );
};

const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    Loading...
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;