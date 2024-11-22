import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../images/banner/1.jpeg";
import banner2 from "../images/banner/2.jpeg";
import banner3 from "../images/banner/3.jpeg";
import banner4 from "../images/banner/4.jpeg";
import logo from "../images/logo.png";
import { Wifi, Signal, CreditCard, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    arrows: false,
  };

  const banners = [banner1, banner2, banner3, banner4];

  const testimonials = [
    {
      name: "Budi Santoso",
      service: "Fiber Optic",
      review:
        "Koneksi internet Raihan Telecom sangat stabil dan cepat. Cocok untuk bekerja dari rumah dan streaming.",
    },
    {
      name: "Ani Widya",
      service: "Wireless WiFi",
      review:
        "Saya sangat puas dengan layanan WiFi Raihan Telecom. Sinyal kuat dan harga terjangkau!",
    },
    {
      name: "Rudi Hartono",
      service: "Paket Bisnis",
      review:
        "Dukungan teknis mereka luar biasa. Selalu responsif dan membantu kapan pun dibutuhkan.",
    },
  ];

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen text-white font-sans">
      {/* Banner Section */}
      <section className="w-full max-w-full mx-auto relative px-4">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="relative">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-[80vh] object-cover rounded-xl opacity-20"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-center p-4 z-10 rounded-xl">
          <img
            src={logo}
            alt="RaihanTelecom Logo"
            className="w-32 h-32 mb-4 object-contain"
          />
          <h1 className="text-4xl font-bold text-white mb-4">RaihanTelecom</h1>
          <p className="text-2xl text-white/80 mb-6">
            Solusi Konektivitas Terdepan
          </p>
          <button
            className="bg-red-600 text-white font-semibold px-8 py-3 rounded hover:bg-red-700 transition duration-300"
            onClick={handleButtonClick}
          >
            Pilih Paket Sekarang
          </button>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      <main className="w-full max-w-6xl mx-auto mt-16 mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Layanan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Wifi,
              title: "WiFi Rumah",
              desc: "Koneksi stabil dan cepat untuk kebutuhan keluarga Anda.",
              link: "/services/home-wifi",
            },
            {
              icon: Signal,
              title: "Internet Fiber Optic",
              desc: "Kecepatan tinggi dengan teknologi serat optik terkini.",
              link: "/services/fiber-optic",
            },
            {
              icon: Globe,
              title: "Paket Bisnis",
              desc: "Solusi konektivitas profesional untuk kebutuhan bisnis Anda.",
              link: "/services/business",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <service.icon className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="mb-4 text-gray-300">{service.desc}</p>
              <Link
                to={service.link}
                className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-300"
              >
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="w-full bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Apa Kata Pelanggan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col border border-gray-700"
              >
                <p className="mb-4 italic text-gray-300">
                  {testimonial.review}
                </p>
                <div className="mt-auto flex items-center">
                  <div className="bg-red-900 rounded-full p-2 mr-3">
                    <CreditCard className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-red-500">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      Layanan {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
