"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timelineData = [
  {
    id: "01",
    title: "My Dad & Mom Marriage 💍",
    desc1:
      "The beginning of a beautiful journey where two hearts became one.",
    desc2:
      "This memory represents love, blessings and the foundation of our family.",
    image: "/tiny/images/photo1.jpeg",
  },
  {
    id: "02",
    title: "My Mom’s Beautiful Maternity Journey 🤍",
    desc1:
      "A beautiful phase of motherhood filled with care, patience and love.",
    desc2:
      "A symbol of hope, emotion, and unconditional bond.",
    image: "/tiny/images/photo2.jpeg",
  },
  {
    id: "03",
    title: "My Dad ❤️",
    desc1:
      "A strong pillar of our family who guides us with love and discipline.",
    desc2:
      "His presence gives strength, confidence, and inspiration.",
    image: "/tiny/images/photo3.jpeg",
  },
  {
    id: "04",
    title: "My Mom ❤️",
    desc1:
      "A pure soul who fills our home with love, care and warmth.",
    desc2:
      "She is the heart of our family and our greatest strength.",
    image: "/tiny/images/photo4.jpeg",
  },
];

export default function Mainpage() {
  return (
    <main
      className="text-white"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #020617 0%, #0f172a 50%, #312e81 100%)",
      }}
    >
      {/* ---------------- NAVBAR ---------------- */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container m-0 py-3"
      >
        <h1
          className="display-6 m-0"
          style={{ fontFamily: '"Brush Script MT", cursive' }}
        >
          Tiny ❤️
        </h1>
      </motion.nav>

      {/* ---------------- HERO ---------------- */}
      <section className="container py-5 pb-2 text-center position-relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto"
          style={{ maxWidth: "750px" }}
        >
          <Image
            src="/tiny/images/family photo.jpeg"
            alt="Family"
            width={900}
            height={600}
            className="img-fluid rounded shadow-lg"
          />
        </motion.div>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="fw-bold mt-4"
        >
          This is My Family ❤️
        </motion.h2>

        <p className="text-light mt-3">
          Every smile, every memory, every moment together makes our family special. This website is dedicated to preserving our beautiful journey and unforgettable memories.
        </p>
      </section>

      {/* ---------------- INTRO SECTION ---------------- */}
      <div className="container py-3">
        <div className="row align-items-center">

          {/* TEXT */}
          <motion.div
            className="col-12 col-md-6"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="fw-bold mb-3">
              My Cute Name -{" "}
              <span className="text-warning">Dhrithika Sreegar</span>
            </h2>

            <p className="fs-5">
              This website is built with memories, love, and emotions that
              define my family journey.
            </p>

            <p className="text-secondary">
              Every section here reflects real moments — simple, meaningful and
              unforgettable.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="col-12 col-md-6 text-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/tiny/images/minnu2.jpeg"
              className="img-fluid rounded shadow-lg"
              alt="profile"
              style={{ maxHeight: "400px" }}
            />
          </motion.div>
        </div>
      </div>

      <div className="mx-5">
      <hr className="border-white opacity-75" />
      </div>
      {/* ---------------- TIMELINE ---------------- */}
      <div className="container py-3 position-relative">

        {/* CENTER LINE (desktop only) */}
        <div
          className="d-none d-md-block"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: "3px",
            background: "rgba(255,255,255,0.5)",
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
        />

        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.id}
              className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5 position-relative"
              style={{ zIndex: 1 }}
            >

              {/* LEFT */}
              <div className="col-12 col-md-5 text-center text-md-end">
                {isEven ? (
                  <motion.img
                    src={item.image}
                    className="img-fluid rounded shadow"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="fw-bold">{item.title}</h3>
                    <p className="text-light">{item.desc1}</p>
                    <p className="text-white-50">{item.desc2}</p>
                  </motion.div>
                )}
              </div>

              {/* CENTER NUMBER */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: "60px",
                  height: "60px",
                  background: "white",
                  color: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  zIndex: 10,
                  margin: "20px 0",
                }}
              >
                {item.id}
              </motion.div>

              {/* RIGHT */}
              <div className="col-12 col-md-5 text-center text-md-start">
                {!isEven ? (
                  <motion.img
                    src={item.image}
                    className="img-fluid rounded shadow"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="fw-bold">{item.title}</h3>
                    <p className="text-light">{item.desc1}</p>
                    <p className="text-white-50">{item.desc2}</p>
                  </motion.div>
                )}
              </div>

            </div>
          );
        })}
      </div>
      <footer className="text-center text-light py-4 mt-5 border-top border-white border-opacity-25">

  <h5
    className="mb-2"
    style={{ fontFamily: '"Brush Script MT", cursive' }}
  >
    Tiny ❤️
  </h5>

  <p className="mb-3 text-secondary">
    Made with love, memories & emotions
  </p>

  {/* Instagram Link */}
  <a
    href="https://www.instagram.com/ads.tinytales?igsh=dTdnb3l0MHBsYjFw"
    target="_blank"
    rel="noreferrer"
    className="text-light text-decoration-none d-inline-flex align-items-center gap-2"
    style={{ fontSize: "16px" }}
  >
    <i className="bi bi-instagram"></i>
    Follow on Instagram
  </a>

  <div className="mt-3 text-secondary">
    <small>© {new Date().getFullYear()} All Rights Reserved</small>
  </div>

</footer>
    </main>
  );
}