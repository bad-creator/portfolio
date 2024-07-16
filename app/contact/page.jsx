"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0krmwuk",
        "template_e6jgqvv",
        e.target,
        "n2568wawtfaHlT7J4"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Nachricht wurde geschickt");
        },
        (error) => {
          console.log(error.text);
          alert("Fehler beim senden.");
        }
      );

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Tel.",
      description: "(+43) 677 617 55 832",
    },
    {
      icon: <FaEnvelope />,
      title: "E-Mail",
      description: "pascalserghei1985@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Adresse",
      description: "1120 Wien, Österreich",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container m-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-xl md:text-2xl lg:text-4xl text-accent text-center lg:text-start">
                Lass uns zusammenarbeiten
              </h3>
              <p className="text-white/60">
                Ich freue mich darauf, von Ihnen zu hören und über mögliche
                Kooperationen zu sprechen.
              </p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Vorname"
                  required
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  placeholder="Nachname"
                  required
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  placeholder="E-Mail"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  placeholder="Tel."
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* textarea */}
              <Textarea
                className="min-h-[140px]"
                placeholder="Nachricht..."
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              {/* button */}
              <Button type="submit" size="md" className="max-w-40">
                Senden
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-2 lg:gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="lg:text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
