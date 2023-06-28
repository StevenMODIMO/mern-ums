import { useState } from "react";
import { LiaUniversitySolid, LiaHourglassStartSolid } from "react-icons/lia";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineClass, MdSlideshow } from "react-icons/md";
import { BsInfoCircle, BsCalendar3Event,BsFacebook,BsTwitter,BsInstagram,BsYoutube } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import Panel from "./Panel";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const togglePanel = () => setShow(!show);
  const [showPanel, setShowPanel] = useState(true)
  return (
    <main className="lg:flex justify-between lg:mt-5">
      <header
        className={
          show
            ? "flex justify-between transition-all duration-500 ease-in-out"
            : "flex justify-between bg-black border-b-2 border-red-900 transition-all duration-500 ease-in-out"
        }
      >
        <div className="flex text-4xl text-red-900">
          <LiaUniversitySolid className="mt-1" />
          <h1 className="font-bold">UMS</h1>
        </div>
        {show ? (
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
          show
            ? "bg-black text-red-900 h-0 overflow-hidden transition-all duration-500 ease-in-out lg:overflow-visible"
            : "bg-black text-red-900 h-screen transition-all duration-500 ease-in-out md:text-xl"
        }
      >
        <div className="text-xl lg:flex gap-3 lg:text-lg">
        <section className="flex gap-2 ml-3 pt-2 lg:gap-1 cursor-pointer md:hover:border-b-4 border-red-900  md:hover:border-r-0 border-red-900 transition-all duration-100 ease-in-out">
          <BsInfoCircle className="lg:mt-1" />
          <div>About UMS</div>
        </section>
        <section className="flex gap-2 ml-3 pt-2 lg:gap-1 cursor-pointer md:hover:border-b-4 border-red-900  md:hover:border-r-0 border-red-900 transition-all duration-100 ease-in-out">
          <MdOutlineClass className="lg:mt-1" />
          <div>Programmes</div>
        </section>
        <section className="flex gap-2 ml-3 pt-2 lg:gap-1 cursor-pointer md:hover:border-b-4 border-red-900  md:hover:border-r-0 border-red-900 transition-all duration-100 ease-in-out">
          <LiaHourglassStartSolid className="lg:mt-1" />
          <div>Enrollment</div>
        </section>
        <section className="flex gap-2 ml-3 pt-2 lg:gap-1 cursor-pointer md:hover:border-b-4 border-red-900  md:hover:border-r-0 border-red-900 transition-all duration-100 ease-in-out">
          <BsCalendar3Event className="lg:mt-1" />
          <div>News/Events</div>
        </section>
        <section className="flex gap-2 ml-3 pt-2 lg:gap-1 cursor-pointer md:hover:border-b-4 border-red-900  md:hover:border-r-0 border-red-900 transition-all duration-100 ease-in-out">
          <FiPhoneCall className="lg:mt-1" />
          <div>Contacts</div>
        </section>
        <section className="flex gap-2 ml-3 pt-2 lg:gap-1 mr-3 cursor-pointer md:hover:border-b-4 border-red-900  md:hover:border-r-0 border-red-900 transition-all duration-100 ease-in-out">
          <MdSlideshow className="lg:mt-1" />
          <div>How this System works</div>
        </section>
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
