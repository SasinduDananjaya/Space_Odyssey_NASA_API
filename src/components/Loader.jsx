import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="w-full content-full-height backdrop-blur-xl flex justify-center items-center">
      <Loader2 className="animate-spin" size={50} />
    </div>
  );
};

export default Loader;
