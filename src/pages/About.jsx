import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-14 mt-5 font-fontSedan">
      <div className="max-w-[500px] h-[80vh] mx-auto px-4 md:px-8">
        <div className="max-w-lg  border-2 rounded-xl border-orange-200 mx-auto p-5 shadow-xl ">
          <figure>
            <div className="flex justify-center items-center gap-x-4 mt-6">
              <img
                src="https://cdn.pixabay.com/photo/2017/09/07/08/06/bird-2724144_1280.png"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <span className="block text-gray-800 font-semibold">
                  KCRSLN
                </span>
              </div>
            </div>
            <blockquote className="flex text-4xl justify-center gap-5 mt-5 text-[#9a4286]">
              <Link
                to="https://www.linkedin.com/in/busrakocarslan/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <Link to="https://github.com/busrakocarslan" target="_blank">
                <FaGithub />
              </Link>
            </blockquote>
          </figure>
        </div>
        <div className="bg-form-bg bg-cover w-[250px] h-[250px] m-auto mt-5">
        </div>
      </div>
    </section>
  );
};

export default About;
