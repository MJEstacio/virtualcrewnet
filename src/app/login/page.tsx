import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

const LoginPage = () => {
  return (
    <main className="mt-44">
      <section className="min-h-screen">
        <div className="max-w-xl mx-auto">
          <form className=" border rounded-2xl shadow-md mb-20 px-20 py-20">
            <h1 className="text-4xl text-center font-bold mb-10">Log in</h1>
            <div className="mb-5">
              <label htmlFor="username">Username</label>
              <div className="flex gap-2 items-center">
                <FaUser className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  className="border-b-2  w-full py-2 outline-none"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="password">Password</label>
              <div className="flex gap-2 items-center">
                <IoIosLock className="text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="border-b-2  w-full py-2 outline-none"
                />
              </div>
            </div>
            <div className="flex justify-end text-sm">
              <Link href={"/"}>Forgot password?</Link>
            </div>
            <div className="my-10">
              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold ">
                Login
              </button>
            </div>
            <div className="relative flex items-center gap-3 justify-center">
              <div className="w-10 h-[2px] rounded-full bg-gray-500"></div>
              <span>Or</span>
              <div className="w-10 h-[2px] rounded-full bg-gray-500"></div>
            </div>
            <div className="my-10 flex text-center">
              <Link
                href={"/"}
                className="border py-3 border-black rounded-lg  w-full font-semibold "
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
