import "./App.css";
import io from "socket.io-client";
import { useEffect, useMemo } from "react";

function App() {
  const socket = useMemo(() => {
    return io("http://localhost:8000");
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center my-6 text-green-700">
        Chat Application
      </h1>
    </>
  );
}

export default App;
