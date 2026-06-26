import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Mainpage from "../components/Mainpage";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleStart = () => {
  setOpen(true);

};

  return (
    <div
  className={`relative h-screen w-full ${
    open ? "overflow-y-auto" : "overflow-hidden"
  }`}
  style={{ perspective: "1800px" }}
>
      {/* ---------------- Main Page ---------------- */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
        animate={{
          scale: open ? 1 : 0.9,
          opacity: open ? 1 : 0,
          filter: open ? "blur(0px)" : "blur(10px)",
        }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
      >
        <Mainpage />
      </motion.div>

      {/* ---------------- Landing Page ---------------- */}
      <AnimatePresence>
        {!open && (
          <motion.div
            className="absolute inset-0 z-20"
            exit={{ opacity: 0 }}
            transition={{ delay: 1.4, duration: 0.2 }}
          >
            {/* LEFT PAGE */}
            <motion.div
              className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600"
              style={{
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
              }}
              exit={{
                rotateY: -110,
                x: -60,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="absolute right-0 top-0 h-full w-20"
                exit={{ opacity: 0.8 }}
                style={{
                  background:
                    "linear-gradient(to left, rgba(255,255,255,.15), transparent)",
                }}
              />
            </motion.div>

            {/* RIGHT PAGE */}
            <motion.div
              className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-indigo-600 via-purple-700 to-pink-600"
              style={{
                transformOrigin: "right center",
                transformStyle: "preserve-3d",
              }}
              exit={{
                rotateY: 110,
                x: 60,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="absolute left-0 top-0 h-full w-20"
                exit={{ opacity: 0.8 }}
                style={{
                  background:
                    "linear-gradient(to right, rgba(255,255,255,.15), transparent)",
                }}
              />
            </motion.div>

            {/* CENTER LINE */}
            <AnimatePresence>
  {open && (
    <motion.div
      initial={{
        scaleY: 0,
      }}
      animate={{
        scaleY: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      style={{
        transformOrigin: "top",
        boxShadow: "0 0 12px rgba(255,255,255,.8)",
      }}
      className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white z-40"
    />
  )}
</AnimatePresence>

            {/* CONTENT */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              exit={{
                opacity: 0,
                scale: 0.85,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-6xl font-bold text-white"
              >
                Welcome to My World
              </motion.h1>

              {/* <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-5 text-gray-300"
              >
                Fold Animation Demo
              </motion.p> */}

              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={handleStart}
                className="mt-10 rounded-full bg-white px-8 py-3 font-semibold text-black"
              >
                Let's go
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}