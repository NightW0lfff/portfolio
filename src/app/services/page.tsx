"use client";

/* import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs"; */
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Offering professional web development services to create responsive, user-friendly websites that drive traffic and enhance online visibility",
    href: "",
  },
  {
    num: "02",
    title: "App Development",
    description:
      "Specialising in app development to build intuitive, high-performing mobile and web applications tailored to your business needs.",
    href: "",
  },
  {
    num: "03",
    title: "Software Engineer",
    description:
      "Experienced software engineer delivering customised, efficient, and scalable software solutions for businesses of all sizes.",
    href: "",
  },
  {
    num: "04",
    title: "SEO Engineer",
    description:
      "Boosting website rankings with advanced SEO strategies to increase online visibility, organic traffic, and lead generation.",
    href: "",
  },
];

function Services() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center flex-1 gap-6 group "
              >
                {/* top */}
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  {/*  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link> */}
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
