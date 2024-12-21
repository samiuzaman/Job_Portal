import { easeIn, easeInOut } from "motion";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <div className="bg-[#F2F6FD]">
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left">
                <motion.h1
                  animate={{ x: 20 }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    ease: easeIn,
                    repeat: Infinity,
                  }}
                  className="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj"
                >
                  The Easiest Way to Get Your
                  <motion.span
                    animate={{ color: ["#EA2027", "#2980b9", "#227093"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="ml-3"
                  >
                    New Job
                  </motion.span>
                </motion.h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                  Each month, more than 3 million job seekers turn to website in
                  their search for work, making over 140,000 applications every
                  single day
                </p>

                <form action="#" method="POST" className="mt-8 sm:mt-10">
                  <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter email address"
                      className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                      required=""
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                      <button
                        type="submit"
                        className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
                      >
                        Get Free Card
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className=" mx-auto">
              <motion.img
                animate={{ y: [25, 75, 25] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="w-72 rounded-t-3xl rounded-br-[40px] border-b-4 border-l-4 border-primary-500"
                src="https://images.unsplash.com/photo-1653669486789-72a1124a0a26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <motion.img
                animate={{ x: [100, 150, 100] }}
                transition={{ duration: 8, delay: 4, repeat: Infinity }}
                className="w-72 rounded-t-3xl rounded-br-[40px] border-b-4 border-l-4 border-primary-500 "
                src="https://images.unsplash.com/photo-1653669486432-26b9271c90cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
