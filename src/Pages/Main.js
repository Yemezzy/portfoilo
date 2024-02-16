import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import {
  FaTelegram,
  FaInstagram,
  FaGithub,
  FaGripLinesVertical,
  FaCode
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Main = () => {
  const [navbar, setNavbar] = useState("logo");
  const [color, setColor] = useState("def");
  const [col, setCol] = useState("col");

  window.addEventListener("scroll", () => { 
     if (window.scrollY > 420) {
       setNavbar("yellow");
       setColor("cha")
       setCol("coll")

     } else {
       setNavbar("logo");
        setColor("def");
        setCol("col");
     }
     if (window.scrollY > 965) {
       setNavbar("gr");
       setColor("gree");
       setCol("gre");
     } 
    console.log(window.scrollY);
})

  return (
    <>
      <div className="py-10 md:px-5 w-full">
        <p className={navbar}>
          <marquee behavior="" direction="right">
            Logo
          </marquee>
        </p>

        <div className="flex mt-10 ">
          <div className={color}>
            <section className=" p-2 text-3xl">
              <a href="">
                <FaTelegram className="mb-9" />
              </a>
              <a href="">
                {" "}
                <FaInstagram className="mb-9" />
              </a>
              <a href="">
                <FaXTwitter className="mb-9" />
              </a>
              <a href="">
                <FaGithub className="mb-9" />
              </a>
              <div className="">
                <FaGripLinesVertical />
                <FaGripLinesVertical />
                <FaGripLinesVertical />
                <FaGripLinesVertical />
                <FaGripLinesVertical />
              </div>
            </section>
          </div>

          <div className="md:w-[92%] md:px-20  md:ml-10 ml-8">
            <div className="md:flex pt-10 md:pt-5 gap-2 justify-center">
              <section className=" h-[310px] p-2 w-full">
                <p className="md:text-4xl font-bold md:mt-28 mt-10 md:text-left text-2xl text-center">
                  AYUBA JOEL YELMI
                </p>
                <p className="md:text-xl md:pl-0 pl-3 font-semibold  mt-2">
                  I am a Mern stack Developer, Very good at Fontend websites
                  with high skills in the following:
                </p>
                <ol className="mt-3 md:pl-0 pl-3 list-disc ml-5 md:text-lg font-semibold grid grid-cols-2 md:grid-cols-3">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Javascript</li>
                  <li>React Js</li>
                  <li>Twailwind css</li>
                  <li>Node js</li>
                </ol>
              </section>
              <div className="grid w-[92%] md:w-[40%] gap-2">
                <section className="text-center pt-14 aa h-[150px] w-full">
                  <a
                    href="https://thegreatchinesecommunityparty.vercel.app/"
                    className="text-gray-300 hover:text-xl underline font-bold"
                  >
                    Click Here to view <br /> this Website..
                  </a>
                </section>

                <section className="text-center  pt-14 bb h-[150px] w-full">
                  <a
                    href="https://investors-grain.vercel.app/ "
                    className="text-black hover:text-xl underline font-bold"
                  >
                    Click Here to view <br /> this Website..
                  </a>
                </section>
              </div>
            </div>
            <div className="md:grid grid-cols-3 hidden mt-2 gap-2">
              <section className="pt-14 text-center h-[150px] w-full cc">
                <a
                  href="https://reactjs-sepia-one.vercel.app/"
                  className="text-black text-lg hover:text-xl underline font-bold"
                >
                  Click Here to view <br /> this Website..
                </a>
              </section>
              <section className="pt-14 text-center h-[150px] dd w-full">
                <a
                  href="https://konga-mu.vercel.app/"
                  className="text-black text-lg hover:text-xl underline font-bold"
                >
                  Click Here to view <br /> this Website..
                </a>
              </section>
              <section className="border-2 pt-14 ee text-center h-[150px] w-full">
                <a
                  href="https://portfoilo-lovat.vercel.app/"
                  className="text-black text-lg hover:text-xl underline font-bold"
                >
                  Click Here to view <br /> this Website..
                </a>
              </section>
            </div>

            <div className="mt-20">
              <section className="flex items-center md:gap-10 gap-3">
                <p className="md:text-4xl text-xl font-bold text-yellow-300">
                  About Me
                </p>
                <div className="w-[60%] mt-2 border-yellow-300 border-2"></div>
              </section>

              <p className="md:text-lg text-sm py-5 md:py-10 px-2 md:px-5">
                Highly skilled React Developer with over two years of
                professional experience. Proficient with React js, Twailwind,
                and Git. Proven ability to develop user interface components
                with React.js and troubleshoot complex issues. Have made
                significant contributions in creating high-quality code with
                excellent uptime and optimized performance. Looking forward to
                adding value through my passion and expertise.
              </p>
              <div>
                <p className="text-lg font-bold text-yellow-300">PASSIONS</p>
                <p className="md:text-lg text-sm pt-5 px-2 md:px-5">
                  * I love creating interactive, efficient, and user-friendly
                  web applications that add value to businesses.
                </p>
                <p className="md:text-lg text-sm py-5 px-2 md:px-5">
                  * Spending time deep-diving into new coding languages and web
                  technologies stimulates and inspires me.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold text-yellow-300">
                  CERTIFICATION
                </p>
                <p className="md:text-lg text-sm pt-5 px-2 md:px-5">
                  * Certificate Course by bizzmorrow focusing on advanced
                  concepts of Node js and python.
                </p>
                <p className="md:text-lg text-sm py-5 px-2 md:px-5">
                  * Completed comprehensive course by Bizzmorrow on Mern Stack
                  Development and Blockchain Development.
                </p>
              </div>
              <p className="flex justify-center">
                <FaXTwitter className="md:mb-9 mb-4 text-3xl" />
              </p>
              <div className="w-[92%] mt-2 border-yellow-300 border-2"></div>
            </div>

            <div className="mt-20">
              <section className="flex items-center md:gap-10 gap-3">
                <div className="md:w-full w-[70%]  mt-2 border-green-500 border-2"></div>
                <p className="md:text-4xl text-xl font-bold text-green-500">
                  Strengths
                </p>
              </section>

              <p className="md:text-lg text-sm py-5 pt-10 px-2 md:px-5">
                <p className="text-lg font-bold mb-2 text-green-500">
                  Technical proficiency
                </p>
                Expertise in React.js, JavaScript, CSS, and HTML. I have proven
                experience in developing and optimizing user interface
                components.
              </p>
              <p className="md:text-lg text-sm py-5 px-2 md:px-5">
                <p className="text-lg font-bold mb-2 text-green-500">
                  Problem-solving skill
                </p>
                Strong ability to debug code, troubleshoot issues, and implement
                robust solutions to coding problems.
              </p>
              <p className="md:text-lg text-sm py-5 px-2 md:px-5">
                <p className="text-lg font-bold mb-2 text-green-500">
                  Team collaboration
                </p>
                Skilled at working collaboratively with a team in developing and
                ensuring the robustness of front-end components.
              </p>
              <p className="flex justify-center">
                <FaXTwitter className="md:mb-9 mb-4 text-3xl" />
              </p>
              <div className="md:w-full w-[92%] mt-2 border-green-500 border-2"></div>
            </div>

            <div className="mt-10">
              <p className="text-center md:text-xl font-bold text-green-500 uppercase">
                I am very good at what i do and i keep learning Everyday.. Check
                out some of my preview above.
              </p>
            </div>
          </div>

          <div className={col}>
            <div className="w-[4%] fixed bottom-0 md:right-5 right-7">
              <section className=" p-2 text-3xl">
                <div>
                  <FaGripLinesVertical />
                  <FaGripLinesVertical />
                  <FaGripLinesVertical />
                  <FaGripLinesVertical />
                  <FaGripLinesVertical className="mb-9" />
                </div>
                <a href="">
                  <FaTelegram className="mb-9" />
                </a>
                <a href="">
                  <FaInstagram className="mb-9" />
                </a>
                <a href="">
                  <FaXTwitter className="mb-9" />
                </a>
                <a href="">
                  <FaGithub className="mb-9" />
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>

    //  <div>
    //         <div className="flex gap-3">
    //
    //       </div>
  );
};

export default Main;
