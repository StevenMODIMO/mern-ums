import { useState } from "react";
import { LiaUniversitySolid, LiaHourglassStartSolid } from "react-icons/lia";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineClass, MdSlideshow } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import {
  BsInfoCircle,
  BsCalendar3Event,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import Info from "./Info";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const togglePanel = () => setShow(!show);
  const [about, setAbout] = useState(false);
  const [programs, setPrograms] = useState(false);
  const [enroll, setEnroll] = useState(false);
  const [news, setNews] = useState(false);
  const [contact, setContacts] = useState(false);
  const [system, setSystem] = useState(false);
  return (
    <main className="lg:flex justify-between lg:mt-5">
      <header
        className={
          !show
            ? "flex justify-between transition-all duration-500 ease-in-out"
            : "flex justify-between bg-black border-b-2 border-red-900 transition-all duration-500 ease-in-out"
        }
      >
        <div className="flex text-4xl text-red-900">
          <LiaUniversitySolid className="mt-1 lg:text-7xl" />
          <h1 className="font-bold lg:hidden">UMS</h1>
          <h1 className="hidden lg:block text-xs font-bold w-20 mt-3">
            University Management System
          </h1>
        </div>
        {!show ? (
          <FaBars
            onClick={togglePanel}
            className="mt-1 mr-1 text-3xl text-red-900 lg:hidden"
          />
        ) : (
          <FaTimes
            onClick={togglePanel}
            className="mt-1 mr-1 text-3xl text-red-900 lg:hidden"
          />
        )}
      </header>
      <nav
        className={
          !show
            ? "bg-black text-red-900 h-0 overflow-hidden transition-all duration-500 ease-in-out lg:overflow-visible"
            : "bg-black text-red-900 h-screen transition-all duration-500 ease-in-out md:text-xl"
        }
      >
        <div className="text-lg sm:text-xl lg:flex gap-3 lg:text-lg">
          <main>
            <section
              onClick={() => setAbout(!about)}
              onMouseEnter={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
              className="flex gap-2 ml-3 pt-2 lg:hover:border-b-4 border-red-900 gap-1 cursor-pointer transition-all duration-100 ease-in-out"
            >
              <BsInfoCircle className="lg:mt-1" />
              <div className="flex justify-between w-64 sm:w-full">
                <div>About UMS</div>
                {!about ? (
                  <IoMdAdd className="text-2xl lg:hidden" />
                ) : (
                  <AiOutlineMinus className="text-2xl lg:hidden" />
                )}
              </div>
            </section>
            <div className={about ? "block bg-white p-4" : "hidden"}>
              <Info
                title="About Us"
                desc_one="UMS (University Management System) is a web based sytem that showcases how a university website works from a real life perspective"
                title_two="Our Mission"
                desc_two="Help candidates at UMS unlock their greatest potential for the greater good"
                title_three="Our Vision"
                desc_three="See our graduates play impactful roles on their societies."
              />
            </div>
          </main>
          <main>
            <section
              onClick={() => setPrograms(!programs)}
              onMouseEnter={() => setPrograms(true)}
              onMouseLeave={() => setPrograms(false)}
              className="flex gap-2 ml-3 pt-2 lg:hover:border-b-4 border-red-900 gap-1 cursor-pointer  transition-all duration-100 ease-in-out"
            >
              <MdOutlineClass className="lg:mt-1" />
              <div className="flex justify-between w-64 sm:w-full">
                <div>Programmes</div>
                {!programs ? (
                  <IoMdAdd className="text-2xl lg:hidden" />
                ) : (
                  <AiOutlineMinus className="text-2xl lg:hidden" />
                )}
              </div>
            </section>
            <div className={programs ? "block bg-white" : "hidden"}>
              <Info title="Programmes Offered" option={true} />
            </div>
          </main>
          <main>
            <section
              onClick={() => setEnroll(!enroll)}
              onMouseEnter={() => setEnroll(true)}
              onMouseLeave={() => setEnroll(false)}
              className="flex gap-2 ml-3 pt-2 lg:hover:border-b-4 border-red-900 gap-1 cursor-pointer  transition-all duration-100 ease-in-out"
            >
              <LiaHourglassStartSolid className="lg:mt-1" />
              <div className="flex justify-between w-64 sm:w-full">
                <div>Enrollment</div>
                {!enroll ? (
                  <IoMdAdd className="text-2xl lg:hidden" />
                ) : (
                  <AiOutlineMinus className="text-2xl lg:hidden" />
                )}
              </div>
            </section>
            <div className={enroll ? "block bg-white p-2" : "hidden"}>
              <Info
                title="Enroll Today"
                desc_one="Our enrollment is always open for the first 100 students to apply.Then it will be closed until further notice."
                button="Enroll Now"
              />
            </div>
          </main>
          <main>
            <section
              onClick={() => setNews(!news)}
              onMouseEnter={() => setNews(true)}
              onMouseLeave={() => setNews(false)}
              className="flex gap-2 ml-3 pt-2 lg:hover:border-b-4 border-red-900 gap-1 cursor-pointer transition-all duration-100 ease-in-out"
            >
              <BsCalendar3Event className="lg:mt-1" />
              <div className="flex justify-between w-64 sm:w-full">
                <div>News/Events</div>
                {!news ? (
                  <IoMdAdd className="text-2xl lg:hidden" />
                ) : (
                  <AiOutlineMinus className="text-2xl lg:hidden" />
                )}
              </div>
            </section>
            <div className={news ? "block" : "hidden"}>
              <Info title="News/Events" />
            </div>
          </main>
          <main>
            <section
              onClick={() => setContacts(!contact)}
              onMouseEnter={() => setContacts(true)}
              onMouseLeave={() => setContacts(false)}
              className="flex gap-2 ml-3 pt-2 lg:hover:border-b-4 border-red-900 gap-1 cursor-pointer transition-all duration-100 ease-in-out"
            >
              <FiPhoneCall className="lg:mt-1" />
              <div className="flex justify-between w-64 sm:w-full">
                <div>Contacts</div>
                {!contact ? (
                  <IoMdAdd className="text-2xl lg:hidden" />
                ) : (
                  <AiOutlineMinus className="text-2xl lg:hidden" />
                )}
              </div>
            </section>
            <div className={contact ? "block bg-white" : "hidden"}>
              <Info title="Contact Us!!" contact={true} />
            </div>
          </main>
          <main>
            <section
              onClick={() => setSystem(!system)}
              onMouseEnter={() => setSystem(true)}
              onMouseLeave={() => setSystem(false)}
              className="flex gap-2 ml-3 pt-2 lg:hover:border-b-4 border-red-900 gap-1 cursor-pointer transition-all duration-100 ease-in-out"
            >
              <MdSlideshow className="lg:mt-1" />
              <div className="flex justify-between w-64 sm:w-full">
                <div>How this System works</div>
                {!system ? (
                  <IoMdAdd className="text-2xl lg:hidden" />
                ) : (
                  <AiOutlineMinus className="text-2xl lg:hidden" />
                )}
              </div>
            </section>
            <div className={system ? "block" : "hidden"}>
              <Info title="Our System" />
            </div>
          </main>
        </div>
        <footer className="mt-16 lg:hidden">
          <section className="flex gap-2 ml-3 pt-2">
            <BsFacebook />
            <h1>Facebook</h1>
          </section>
          <section className="flex gap-2 ml-3 pt-2">
            <BsInstagram />
            <h1>Instagam</h1>
          </section>
          <section className="flex gap-2 ml-3 pt-2">
            <BsTwitter />
            <h1>Twitter</h1>
          </section>
          <section className="flex gap-2 ml-3 pt-2">
            <BsYoutube />
            <h1>Youtube</h1>
          </section>
        </footer>
        <footer className="flex text-sm mt-5 justify-center lg:hidden">
          <span>&copy; Copyright 2023</span>
          <div className="flex text-red-900">
            <LiaUniversitySolid className="mt-1" />
            <h1 className="font-bold">UMS</h1>
          </div>
        </footer>
      </nav>
    </main>
  );
}
