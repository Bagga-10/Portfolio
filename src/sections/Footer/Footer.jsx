import React from "react";
import { motion as _m } from "framer-motion";
import { SlideUp } from "../../animation/animate";

function Footer() {
  return (
    <footer className="mb-2 text-center text-gray-600 ">
      <div className="mt-2">
        <_m.h2
          variants={SlideUp(0.8)}
              initial="initial"
              whileInView="animate"
         className="text-lg mt-10 ">© 2025 Syed Farhan. All rights reserved.</_m.h2>
      </div>
    </footer>
  );
}

export default Footer;
