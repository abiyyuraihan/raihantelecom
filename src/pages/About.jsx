import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [text, setText] = useState("");
  const fullText =
    "RaaihanTelecom adalah penyedia layanan internet terpercaya yang berkomitmen untuk memberikan konektivitas berkualitas tinggi kepada pelanggan kami. Dengan fokus pada inovasi dan layanan pelanggan yang prima, kami menyediakan berbagai paket internet dan WiFi yang dirancang untuk memenuhi kebutuhan rumah tangga dan bisnis. Didukung oleh infrastruktur modern dan tim teknis yang berpengalaman, RaihanTelecom siap menjadi mitra andalan Anda dalam era digital.";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="min-h-screen p-8 mt-14">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-white"
        >
          Tentang RaihanTelecom
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="../images/logo.png"
            alt="RaihanTelecom Logo"
            className="w-64 h-64 rounded-md object-cover mb-8 md:mb-0"
          />

          <div className="md:w-1/2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-4 text-white"
            >
              {text}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm italic text-white"
            >
              Dikembangkan oleh Kelompok 6 untuk tugas AOL Mata Kuliah Computer
              Network Jurusan Computer Science, BINUS University
            </motion.p>
          </div>
        </div>

        <motion.div
          className="w-full py-12 mt-14 text-center text-white flex flex-col md:flex-row justify-around mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-4xl font-bold">5+</h3>
            <p className="text-lg">Tahun Pengalaman</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-4xl font-bold">10k+</h3>
            <p className="text-lg">Pelanggan Aktif</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-4xl font-bold">95%</h3>
            <p className="text-lg">Kepuasan Pelanggan</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="text-lg">Dukungan Teknis</p>
          </div>
        </motion.div>

        <motion.div
          className="w-full py-8 text-center text-white flex flex-col items-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Teknologi Yang Kami Gunakan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">📡</div>
              <p>Fiber Optic</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🌐</div>
              <p>4G LTE</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">📶</div>
              <p>5G Ready</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🔒</div>
              <p>Security System</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
