import { useState, useEffect } from "react"

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    loading && (
      <div className="w-screen h-screen fixed items-center justify-center z-50 bg-zinc-800">
        <div className="flex space-x-2 justify-center items-center h-screen w-screen">
          <span className="sr-only">Loading...</span>
          <div className="h-8 w-8 bg-rose-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-rose-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-rose-300 rounded-full animate-bounce"></div>
        </div>
      </div>
    )
  );
};

export default PreLoader;
