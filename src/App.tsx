import { useState } from "react";
import { SplashScreen } from "./pages/SplashScreen";
import { HomePage } from "./pages/Homepage";

export function App() {
  const [loading, setLoading] = useState<boolean>(true);

  function handleTimeout() {
    return setTimeout(() => {
      setLoading(false)
    }, 3*1000);
  }

  handleTimeout();

  return (loading ? <SplashScreen/> : <HomePage/>)
}