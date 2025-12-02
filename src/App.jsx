import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import GetInvolved from "./pages/GetInvolved";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
﻿

Press ctrl i to turn on code suggestions. Press ctrl x to disable code suggestions.
ctrl
i
 to turn on code suggestions. Don't show again NEW

Full stack trace AI agent in Performance panel
The Performance panel now integrates a more capable AI agent that has full access to the stack trace.

AI code completion in Sources and Console
Code completion powered by AI is now available in the Sources panel and the Console.

Google Developer Program support
The Google Developer Program, a ready-made subscription and community platform, is now in DevTools, offering a more personalized experience, a badge system, and easier discovery of new features.

One main 'Debug with AI' button
The primary action bar at the top of DevTools now features the primary "Debug with AI" button which opens the 'AI assistance' panel in a right-hand side bar.

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>

        {/* Page routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/GetInvolved" element={<GetInvolved />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
