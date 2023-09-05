import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
       My name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
       Joseph Stanley Geddam.
      </motion.h2>
      <motion.h1
        className="hero-title-2"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
      I am a Front-End UI/UX lead developer at CVS Health.
      </motion.h1>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        With 12 years of professional experience in development and more than five years of React.js
        experience. I specialize in transforming codebases and creating mobile interfaces. I have built 
        several React.js projects from scratch, worked on prototypes for several innovative projects,
        and solved complex coding problems.I am currently a Senior Lead Reactjs Developer at Chai One,
        where i have built robust enterprise applications to power product launches, customer engagement,
        and more. I am dedicated to creating high-performing and user-focused solutions at&nbsp;
        <Link href="https://www.cvshealth.com/" target="_blank" className="link">
           CVS Health.
        </Link>
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        {/* <Button
          text="Check out my course"
          link="https://youtube.com/kishansheth21"
        /> */}
      </motion.div>
    </div>
  );
}

export default Hero;
