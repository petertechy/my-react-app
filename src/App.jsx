import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import Dashboard from "./component/Dashboard";
import Fetch from "./component/Fetch";
import SignUp from "./component/SignUp";

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/data"
          element={
            <Fetch
              title="Fetch Page Title"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, earum eveniet sint officia doloremque commodi nobis molestiae ullam sapiente repudiandae autem tempore blanditiis placeat velit laborum quaerat enim quisquam aut."
            />
          }
        />
        <Route path="/sign-up" element={<SignUp/>}/>
        {/* Fallback Route */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </>
  );
};

export default App;
