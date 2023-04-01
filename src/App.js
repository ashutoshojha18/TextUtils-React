import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";

//import router
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not.
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          toogleMode={toggleMode}
          navHeading1="Home"
          navHeading2="About"
        />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact
              path="/"
              element={ */}
                <TextForm
                  name="TextForm "
                  boxHeading="Enter the text to analyze:"
                  mode={mode}
                />
              {/* }
            />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
