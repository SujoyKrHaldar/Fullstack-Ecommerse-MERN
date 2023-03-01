import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

function Landing() {
  return (
    <section className="w-full h-screen pt-32 pb-16 bg-black text-white overflow-hidden ">
      <div className="absolute w-full h-full bottom-0 left-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="background image"
        />

        {/* <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="background image"
        /> */}
      </div>
      <div className="w-full h-full container flex items-center">
        <div className="max-w-[700px]">
          <p className="tag py-1 px-4 bg-white text-black w-fit mb-3">
            Welcome to Justshop.com
          </p>
          <h1 className=" mb-2">From where you get your cloths.</h1>
          <p className="max-w-md">
            We create our best products to give you a shopping experience like
            no other.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Link
              to="/explore"
              className="py-3 px-6 duration-200 flex items-center gap-4 justify-between
            bg-orange-500 hover:bg-orange-700 text-black w-fit"
            >
              <p className="uppercase text-sm font-semibold">Shop now</p>
            </Link>
            <Link
              to="/join"
              className="py-3 px-6 duration-200 flex items-center gap-4 justify-between
              text-white w-fit"
            >
              <p className="uppercase text-sm  font-semibold">Join us</p>
              <div className="text-xl">
                <MdKeyboardArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
