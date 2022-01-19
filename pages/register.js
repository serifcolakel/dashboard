import React from "react";
import ReactTextTransition from "react-text-transition";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Register() {
  const router = useRouter();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const schema = yup
    .object({
      name: yup.string().min(5).max(20).required(),
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
  const onSubmit = async (data) => {
    if (data.email && data.password && data.name) {
      await sleep(1000).then(() => {
        router.push("/login");
      });
    } else alert("Wrong email or password");
  };
  return (
    <div className="flex flex-col items-center justify-center bg-login-bg bg-no-repeat bg-cover h-[100vh] mx-auto overflow-hidden">
      <div className="relative gap-x-4 flex flex-row items-center justify-around bg-login-form-bg bg-no-repeat  bg-center p-4  h-[600px] w-[300px]  md:w-[1520px] md:h-[736px] rounded-2xl">
        <img
          src="/register-logo.svg"
          alt="logo"
          className="hidden md:block w-[650px] h-auto object-cover "
        />
        <div className="flex flex-col items-center justify-center md:w-[593px] md:h-[563px] z-20 gap-y-4 bg-white bg-opacity-20 bg-backdrop-brightness-[75%] border-2 rounded-2xl p-4">
          <h1 className="text-4xl font-extrabold bg-bgskills text-clip ">
            {"Register".split("").map((n, i) => (
              <ReactTextTransition
                key={i}
                text={n}
                delay={i * 100}
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
                htmlFor="name"
                className="text-white  text-lg font-bold text-left"
              >
                Name
              </label>
              <input
                name="name"
                type="name"
                {...register("name")}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                placeholder="Serif Colakel"
              />
              <p className="text-yellow-300 font-bold text-center">
                {errors.name?.message}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <label
                htmlFor="email"
                className="text-white  text-lg font-bold text-left"
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
              <p className="text-yellow-300 font-bold text-center">
                {errors.email?.message}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <label
                htmlFor="password"
                className="text-white text-lg font-bold"
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

              <p className="text-yellow-300 font-bold text-center">
                {errors.password?.message}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-4">
              <button
                type="submit"
                className="hover:scale-105 text-white font-bold py-2 px-4 rounded-lg w-full bg-[#e32726] "
              >
                REGISTER
              </button>
              <div className="flex flex-row gap-x-4">
                <p>Alreay a Member ? </p>
                <a href="/login" className="text-blue-400 font-bold">
                  Login{" "}
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
