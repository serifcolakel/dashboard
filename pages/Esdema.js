import React from "react";
import { HiDocumentText } from "react-icons/hi";
import { BsFacebook, BsTwitter, BsGithub, BsInstagram } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";
import { GiRibbonMedal, GiHamburgerMenu } from "react-icons/gi";
import {
  FaUserFriends,
  FaRocket,
  FaFingerprint,
  FaHtml5,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Esdema() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="w-full md:h-[300vh] ">
      <div className="absolute md:-top-[390px] -top-[100px] w-full md:h-[1090px] -skew-y-3 h-[600px] bg-esdema-bg bg-cover bg-no-repeat" />
      <div className="absolute md:-top-[390px] -top-[100px] w-full md:h-[1090px] -skew-y-3 h-[600px] bg-[#00000099] " />
      <div className="relative max-w-screen-xl text-white w-full h-[600px] mx-auto z-10">
        <div className="flex flex-row items-center justify-between p-4 text-sm font-bold  ">
          <div className="flex flex-row items-center gap-x-8 px-4 ">
            <a href="#">
              <p>ESDEMA</p>
            </a>

            <div className="md:flex flex-row hidden">
              <a href="#" className="text-white flex flex-row items-center">
                <HiDocumentText size={25} /> <p>DOCS</p>
              </a>
            </div>
          </div>
          <div
            className={
              isOpen
                ? "flex flex-col md:flex-row items-center gap-x-4 absolute top-[66px] w-[92%] bg-gray-400 rounded-lg p-4 gap-y-8"
                : "hidden md:flex flex-row items-center gap-x-4"
            }
          >
            <p>DEMO PAGES</p>
            <BsFacebook size={25} />
            <BsTwitter size={25} />
            <BsGithub size={25} />
            <button className="flex flex-row items-center font-bold text-black p-2 gap-x-2 bg-white rounded-lg">
              <MdDownloadForOffline size={20} /> DOWNLOAD
            </button>
          </div>

          <GiHamburgerMenu
            onClick={() => setIsOpen(!isOpen)}
            size={45}
            className="md:hidden block border-[1px] rounded-lg border-white p-[8px] "
          />
        </div>
        <div className="flex flex-col items-center justify-center pt-[150px] ">
          <p className="text-3xl md:text-5xl font-bold text-center">
            Your story starts with us.
          </p>
          <p className="text-lg mt-4 font-bold text-center">
            This website is currently under development.
            <br /> Come back to us soon...
          </p>
        </div>
      </div>
      <div className="relative max-w-screen-xl mx-auto flex flex-col md:flex-row gap-y-4 p-8 md:gap-x-8 -top-[200px] md:top-0 z-10 ">
        <div className="md:w-[384px] h-[232px] bg-white rounded-xl shadow-lg flex flex-col gap-y-4 text-center p-4 md:mt-8">
          <GiRibbonMedal
            size={48}
            className="text-white bg-[#f87171] rounded-full p-2 mx-auto"
          />
          <p className="text-[#323232] font-semibold text-lg">Awarded Agency</p>
          <p className="text-[#768499] font-semibold text-sm">
            Divide details about your product or agency work into parts. A
            paragraph describing a feature <br /> will be enough.
          </p>
        </div>
        <div className="md:w-[384px] h-[232px] bg-white rounded-xl shadow-lg flex flex-col gap-y-4 text-center p-4  ">
          <GiRibbonMedal
            size={48}
            className="text-white bg-[#38bdf8] rounded-full p-2 mx-auto"
          />
          <p className="text-[#323232] font-semibold text-lg">Free Revisions</p>
          <p className="text-[#768499] font-semibold text-sm">
            Keep you user engaged by providing meaningful information. Remember
            that by this time, the user <br />
            is curious.
          </p>
        </div>
        <div className="md:w-[384px] h-[232px] bg-white rounded-xl shadow-lg flex flex-col gap-y-4 text-center p-4 mt-4">
          <GiRibbonMedal
            size={48}
            className="text-white bg-[#34d399] rounded-full p-2 mx-auto"
          />
          <p className="text-[#323232] font-semibold text-lg">
            Verified Company
          </p>
          <p className="text-[#768499] font-semibold text-sm">
            Write a few lines about each one. A paragraph describing a feature
            will be enough. Keep you <br /> user engaged!
          </p>
        </div>
      </div>
      <div className="hidden absolute md:-top-[390px] -top-[100px] w-full md:h-[1090px] -skew-y-3 h-[600px] bg-[#00000099] " />
      <div className="absolute md:top-[690px] top-[500px] w-full md:h-[990px] -skew-y-3 h-[1900px] bg-[#e2e8f0] " />
      <div className="relative max-w-screen-xl mx-auto md:pt-[200px]  flex flex-col md:flex-row justify-between md:p-20">
        <div className="md:w-[40%] w-full flex flex-col gap-y-4 px-8">
          <FaUserFriends
            size={70}
            className="text-gray-500 bg-white rounded-full p-4 shadow-lg "
          />
          <p className="text-gray-800 font-bold text-3xl">
            Working with us is a pleasure
          </p>
          <p className="text-[#768499] font-medium text-base">
            Do not let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
          <p className="text-[#768499] font-medium text-base">
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you are good to go.
            Just make sure you enable them first via JavaScript.
          </p>
          <a href="#" className="text-gray-800 font-bold">
            Check Notus React!
          </a>
        </div>
        <div className="relative w-full md:w-[416px] h-[492px] overflow-hidden rounded-lg md:p-0 p-4">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            className="w-[90%] md:w-full mx-auto h-[80%] object-cover rounded-lg"
          />
          <div className="absolute -bottom-6 -skew-y-6 w-[82.5%] md:left-0 left-[33px] md:w-full h-1/2 bg-[#0ea5e9] " />
          <div className="absolute px-8 md:pl-8 bottom-[40px] md:bottom-[40px]">
            <p className="text-white font-bold text-xl pb-2 ">
              Top Notch Services
            </p>
            <p className="text-white text-base pb-2 overflow-hidden">
              The Arctic Ocean freezes every <br />
              winter and much of the sea-ice then thaws every summer, and that
              process will continue whatever happens.
            </p>
          </div>
        </div>
      </div>
      <div className="relative max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between md:p-20">
        <img
          src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          className="md:w-[416px] h-[576px] w-[80%] object-cover rounded-xl mx-auto pt-20"
        />
        <div className="md:w-[40%] w-full flex flex-col gap-y-4 px-8 mx-auto my-auto pt-8">
          <div className="text-[#0284c7] bg-[#7dd3fc] rounded-full shadow-lg w-16 h-16 flex items-center justify-center ">
            <FaRocket size={40} />
          </div>
          <p className="text-gray-800 font-bold text-3xl">A growing company</p>
          <p className="text-[#768499] font-medium text-base">
            The extension comes with three pre-built pages to help you get
            started faster. You can change the text and images and you re good
            to go.
          </p>
          <ul>
            <li>
              <p className="flex flex-row items-center gap-x-4 text-[#768499] font-medium text-base mb-4">
                <FaFingerprint
                  size={25}
                  className="text-[#0284c7] bg-[#7dd3fc] rounded-full p-1"
                />{" "}
                Carefully crafted components
              </p>
            </li>
            <li>
              <p className="flex flex-row items-center gap-x-4 text-[#768499] font-medium text-base mb-4">
                <FaHtml5
                  size={25}
                  className="text-[#0284c7] bg-[#7dd3fc] rounded-full p-1"
                />{" "}
                Amazing page examples
              </p>
            </li>
            <li>
              <p className="flex flex-row items-center gap-x-4 text-[#768499] font-medium text-base mb-4">
                <FaTelegramPlane
                  size={25}
                  className="text-[#0284c7] bg-[#7dd3fc] rounded-full p-1"
                />{" "}
                Dynamic components
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative max-w-screen-xl mx-auto text-center md:w-4/12 w-[90%] ">
        <p className="md:text-4xl text-3xl font-bold pb-4">
          Here are our <br className="block md:hidden" /> heroes
        </p>
        <p className="text-lg text-gray-500">
          According to the National Oceanic and Atmospheric Administration,
          <br /> Ted, Scambos, NSIDClead scentist, puts the potentially record{" "}
          <br /> maximum.
        </p>
      </div>
      <div className="relative max-w-screen-xl mx-auto text-center w-full">
        <div className="flex md:flex-row flex-col gap-y-4 justify-between">
          <div className="flex flex-col items-center gap-y-4">
            <img
              src="https://demos.creative-tim.com/notus-react/static/media/team-1-800x800.fa5a7ac2.jpg"
              alt="ryn-tomp"
              className="w-[120px] h-[120px] rounded-full object-cover "
            />
            <div>
              <p className="text-xl font-bold">Ryan Tompson</p>
              <p className="text-lg text-gray-500">WEB DEVELOPER</p>
            </div>
            <div className="flex flex-row gap-x-4">
              <BsTwitter className="text-[#38bdf8]" size={25} />
              <BsFacebook className="text-[#0284c7]" size={25} />
              <BsInstagram className="text-[#ec4899]" size={25} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <img
              src="https://demos.creative-tim.com/notus-react/static/media/team-2-800x800.3e08ef14.jpg"
              alt="ryn-tomp"
              className="w-[120px] h-[120px] rounded-full object-cover "
            />
            <div>
              <p className="text-xl font-bold">Romina Hadid</p>
              <p className="text-lg text-gray-500">MARKETING SPECIALIST</p>
            </div>
            <div className="flex flex-row gap-x-4">
              <BsTwitter className="text-[#38bdf8]" size={25} />
              <BsFacebook className="text-[#0284c7]" size={25} />
              <BsInstagram className="text-[#ec4899]" size={25} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <img
              src="https://demos.creative-tim.com/notus-react/static/media/team-3-800x800.19201574.jpg"
              alt="ryn-tomp"
              className="w-[120px] h-[120px] rounded-full object-cover "
            />
            <div>
              <p className="text-xl font-bold">Alexa Smith</p>
              <p className="text-lg text-gray-500">UI/UX DESIGNER</p>
            </div>
            <div className="flex flex-row gap-x-4">
              <BsTwitter className="text-[#38bdf8]" size={25} />
              <BsFacebook className="text-[#0284c7]" size={25} />
              <BsInstagram className="text-[#ec4899]" size={25} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <img
              src="https://demos.creative-tim.com/notus-react/static/media/team-4-470x470.4ef82ef4.png"
              alt="ryn-tomp"
              className="w-[120px] h-[120px] rounded-full object-cover "
            />
            <div>
              <p className="text-xl font-bold">Jenna Kardi</p>
              <p className="text-lg text-gray-500">FOUNDER AND CEO</p>
            </div>
            <div className="flex flex-row gap-x-4">
              <BsTwitter className="text-[#38bdf8]" size={25} />
              <BsFacebook className="text-[#0284c7]" size={25} />
              <BsInstagram className="text-[#ec4899]" size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:top-[3090px] top-[4600px] w-full md:h-[1290px] -skew-y-3 h-[1650px] bg-[#1e293b] z-10 " />
      <div className="relative max-w-screen-xl mx-auto text-center md:w-4/12 w-[90%] md:pt-[400px] pt-[150px] z-20">
        <p className="md:text-4xl text-white text-3xl font-bold pb-4 ">
          Build something
        </p>
        <p className="text-lg text-white">
          Put the potentially record low maximum sea ice extent tihs year down
          to <br />
          low ice. According to the National Oceanic and Atmospheric
          <br /> Administration, Ted, Scambos.
        </p>
      </div>
      <div className="relative max-w-screen-xl mx-auto flex flex-col md:flex-row gap-y-4 p-8 md:gap-x-8 z-20">
        <div className="md:w-[384px] h-[232px] flex flex-col gap-y-4 text-center p-4 md:mt-12">
          <GiRibbonMedal
            size={48}
            className="text-[#1e293b] bg-[#f87171] rounded-full p-2 mx-auto"
          />
          <p className="text-white font-semibold text-lg">Excelent Services</p>
          <p className="text-[#768499] font-semibold text-sm">
            Some quick example text to build on the card title and make up the
            bulk of the card is content.
          </p>
        </div>
        <div className="md:w-[384px] h-[232px] flex flex-col gap-y-4 text-center p-4 md:mt-8">
          <GiRibbonMedal
            size={48}
            className="text-[#1e293b] bg-[#38bdf8] rounded-full p-2 mx-auto"
          />
          <p className="text-white font-semibold text-lg">Grow your market</p>
          <p className="text-[#768499] font-semibold text-sm">
            Some quick example text to build on the card title and make up the
            bulk of the card is content.
          </p>
        </div>
        <div className="md:w-[384px] h-[232px] flex flex-col gap-y-4 text-center p-4 md:mt-4">
          <GiRibbonMedal
            size={48}
            className="text-[#1e293b] bg-[#34d399] rounded-full p-2 mx-auto"
          />
          <p className="text-white font-semibold text-lg">Launch time</p>
          <p className="text-[#768499] font-semibold text-sm">
            Some quick example text to build on the card title and make up the
            bulk of the card is content.
          </p>
        </div>
      </div>

      <form className="relative w-[90%] mx-auto bg-[#e2e8f0] md:w-4/12 p-10 rounded-xl flex flex-col gap-y-4 z-20">
        <p className="text-2xl font-semibold">Want to work with us? </p>
        <p className="text-[#768499] font-semibold text-sm">
          Complete this form and we will get back to you in 24 hours.
        </p>
        <label className="text-sm  text-gray-600">FULL NAME</label>
        <input
          type="text"
          placeholder="Full Name"
          className="shadow-lg w-full p-2 rounded-lg"
        />
        <label className="text-sm  text-gray-600">EMAIL</label>
        <input
          type="text"
          placeholder="Full Name"
          className="shadow-lg w-full p-2 rounded-lg"
        />
        <label className="text-sm  text-gray-600">MESSAGE</label>

        <textarea className="shadow-lg w-full p-2 rounded-lg" />
        <div className="flex items-center justify-center ">
          <button className="bg-[#1e293b] text-white font-bold rounded-lg p-2 w-[200px]">
            SEND MESSAGE
          </button>
        </div>
      </form>
      <div className="absolute md:top-[4260px] top-[6150px] w-full md:h-[450px] h-[600px] bg-[#e2e8f0] " />
      <div className="relative max-w-screen-xl mx-auto flex flex-col pt-[250px] text-red-500 z-50">
        <div>
          Lets keep in touch! Find us on any of these platforms, we respond 1-2
          business days.
        </div>
      </div>
    </div>
  );
}
