import { useInView } from "framer-motion";
import React, { useRef } from "react";

interface TestProps {
  children?: React.ReactNode;
  direction?: string;
}

// interface VariantsProps {
//   directions: string;
//   className: string;
// }

const TestMotion = ({ children, direction }: TestProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className={` ${
        isInView ? "translate-x-0 -translate-x-0 opacity-100" : "opacity-0"
      } duration-1000 ${
        direction == "left" ? "-translate-x-28" : "translate-x-28"
      }`}
    >
      {children}
    </div>
  );
};

export default TestMotion;
