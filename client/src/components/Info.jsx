import { NavLink } from "react-router-dom";
import { GrCloudComputer } from "react-icons/gr";
import { MdOutlineArchitecture, MdOutlineRestartAlt } from "react-icons/md";
import { VscLaw } from "react-icons/vsc";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { AiOutlineFormatPainter, AiFillMail } from "react-icons/ai";
import { BiLocationPlus, BiSupport } from "react-icons/bi";

export default function Info({
  title,
  title_two,
  title_three,
  desc_one,
  desc_two,
  desc_three,
  option,
  button,
  contact,
  enroll,
  onClick,
}) {
  return (
    <div className="lg:p-2">
      <h1 className="underline text-center lg:text-2xl">{title}</h1>
      <main>
        <div className="text-lg text-center lg:text-xl">{desc_one}</div>
      </main>
      <h1 className="underline text-center lg:text-2xl">{title_two}</h1>
      <main>
        <div className="text-lg text-center lg:text-xl">{desc_two}</div>
      </main>
      <h1 className="underline text-center lg:text-2xl">{title_three}</h1>
      <main>
        <div className="text-lg text-center lg:text-xl">{desc_three}</div>
      </main>
      {option && (
        <div className="">
          <section className="flex gap-2 p-2">
            <GrCloudComputer className="text-2xl" />
            <div>Computer Science</div>
          </section>
          <section className="flex gap-2 p-2">
            <MdOutlineArchitecture className="text-2xl text-black" />
            <div>Civil Engineering</div>
          </section>
          <section className="flex gap-2 p-2">
            <VscLaw className="text-2xl text-black" />
            <div>Law</div>
          </section>
          <section className="flex gap-2 p-2">
            <LiaBusinessTimeSolid className="text-2xl text-black" />
            <div>Business</div>
          </section>
          <section className="flex gap-2 p-2">
            <AiOutlineFormatPainter className="text-2xl text-black" />
            <div>Arts</div>
          </section>
        </div>
      )}
      {enroll && <NavLink to="/enroll" onClick={onClick}>
        <main className="flex justify-center p-1">
        <button className="bg-red-900 text-black p-1 flex">
          <MdOutlineRestartAlt className="mt-1" />
          {button}
        </button>
      </main></NavLink>}

      {contact && (
        <div>
          <section className="flex gap-2 p-2">
            <AiFillMail />
            <div className="text-sm sm:text-lg">Email: mailus@ums.com</div>
          </section>
          <section className="flex gap-2 p-2">
            <BiSupport />
            <div className="text-sm sm:text-lg">
              Support: help.support@ums.com
            </div>
          </section>
          <section className="flex gap-2 p-2">
            <BiLocationPlus />
            <div className="text-sm sm:text-lg">
              P.O.Box third planet from then sun
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
