import React from "react";
import ReactTextTransition from "react-text-transition";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa";
import users from "./users.json";
import Link from "next/link";

export default function Login() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const onSubmit = async (e) => {
    if (e.email === users[0].email && e.password === users[0].password) {
      setLoading(true);
      sleep(1000).then(() => {
        router.push("/dashboard");
      });
    } else alert("Wrong email or password");
  };
  return (
    <div className="flex flex-col items-center justify-center bg-login-bg bg-no-repeat bg-cover h-[100vh] mx-auto overflow-hidden">
      {/* <img
        src="https://i.hizliresim.com/5xsdmmm.png"
        alt="logo"
        className="w-[150px] h-auto object-cover absolute right-0 bottom-0 z-10"
      />
      <img
        src="https://i.hizliresim.com/8qx77qy.png"
        alt="logo"
        className="hidden md:block md:w-[150px] w-[80px] h-auto object-cover absolute left-0 md:left-[30%] md:bottom-[20%] z-20"
      />
      <img
        src="https://i.hizliresim.com/8qx77qy.png"
        alt="logo"
        className="hidden md:block md:w-[150px] w-[80px] h-auto object-cover absolute left-0 md:left-[25%] md:bottom-[12%] z-20"
      />
      <img
        src="https://i.hizliresim.com/31qx956.png"
        alt="logo"
        className="w-[150px] h-auto object-cover absolute right-[40%] bottom-[2%] z-10 rotate-[190deg]"
      />
      <img
        src="https://i.hizliresim.com/31qx956.png"
        alt="logo"
        className="w-[150px] h-auto object-cover absolute right-[40%] bottom-[10%] z-10"
      />
      <img
        src="https://i.hizliresim.com/31pa4m5.png"
        alt="logo"
        className="hidden md:block w-[250px] h-auto object-cover absolute left-1/4 bottom-1/2 z-10"
      />
      <img
        src="https://i.hizliresim.com/31pa4m5.png"
        alt="logo"
        className="w-[100px] md:w-[250px] h-auto object-cover absolute md:left-[20%] md:bottom-[35%] top-[20%] right-0 z-10"
      />
      <img
        src="https://i.hizliresim.com/hvxzsjf.png"
        alt="logo"
        className="hidden md:block w-[450px] h-auto object-cover absolute right-0 bottom-1/4 "
      />
      <img
        src="https://i.hizliresim.com/hvxzsjf.png"
        alt="logo"
        className=" w-[450px] h-auto object-cover absolute  bottom-1/4 z-10 "
      />
      <img
        src="https://i.hizliresim.com/hvxzsjf.png"
        alt="logo"
        className="hidden md:block w-[450px] h-auto object-cover absolute left-0 bottom-0 "
      /> */}
      <div className="relative flex flex-col items-center justify-center p-4  h-[600px] w-[300px]  md:w-[1520px] md:h-[736px] rounded-2xl">
        <div className="flex flex-col items-center justify-center md:w-[593px] md:h-[563px] z-20 gap-y-2 bg-white bg-opacity-30 bg-center rounded-2xl p-4">
          <img
            src="https://ake.com.tr/uploads/images/logo.png"
            alt="logo"
            className="w-[150px] h-auto object-cover"
          />
          <h1 className="md:text-xl text-sm text-center font-extrabold text-blue">
            AKE Asansör Sistemleri, Yürüyen Merdivenler ve Yollar, Engelli
            Asansör Sistemleri
          </h1>

          <h1 className="text-4xl font-extrabold text-black pt-4 ">
            {"Login".split("").map((n, i) => (
              <ReactTextTransition
                key={i}
                text={n}
                delay={i * 200}
                overflow
                inline
              />
            ))}
          </h1>

          <form
            className="w-full md:px-12 py-4 gap-y-4 flex flex-col "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col justify-center">
              <label
                htmlFor="email"
                className="text-black  text-lg font-bold text-left"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                {...register("email")}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                placeholder="username@hotmail.com"
              />
              <p className="text-red-900 ">{errors.email?.message}</p>
            </div>
            <div className="flex flex-col justify-center">
              <label
                htmlFor="password"
                className="text-black text-lg font-bold"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                {...register("password")}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                placeholder="Password"
              />

              <p className="text-red-900 ">{errors.password?.message}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <button
                type="submit"
                className="hover:scale-105 text-white hover:text-[#e32726] hover:bg-white font-bold py-2 px-4 rounded-lg w-full bg-[#e32726] "
              >
                {loading ? "Loading..." : "LOGIN"}
              </button>
            </div>
          </form>
          <div className="flex flex-row justify-between items-center w-full md:px-16 gap-x-4">
            <button className="bg-white hover:bg-blue-500 w-[70px] md:w-[150px] h-[40px] rounded-lg hover:text-white text-blue-500 ">
              <FaFacebook size={25} className="mx-auto" />
            </button>
            <button className="bg-white hover:bg-black w-[70px] md:w-[150px] h-[40px] rounded-lg hover:text-white text-black ">
              <FaGithub size={25} className="mx-auto" />
            </button>
            <button className="bg-white hover:bg-red-500 w-[70px] md:w-[150px] h-[40px] rounded-lg hover:text-white text-red-500 ">
              <FaGoogle size={25} className="mx-auto" />
            </button>
          </div>
          <div className="flex flex-row md:text-lg gap-x-4 text-black items-center justify-center text-[12px] ">
            <p>Do not have a account yet?</p>
            <Link href="/register">
              <p className="text-blue-500 font-bold hover:cursor-pointer ">
                Sing Up
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
