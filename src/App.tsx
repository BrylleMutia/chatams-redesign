import { useState } from "react";
import "./App.css";

import Homepage from "./pages/Homepage";

function App() {
   const [count, setCount] = useState(0);

   return (
      <main style={{ height: "100%" }}>
         <Homepage />
      </main>
   );
}

export default App;
