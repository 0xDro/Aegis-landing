import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-black text-white px-5 py-3">
      <div className="container mx-auto flex justify-between items-center w-full">
        <Image src="/logo.png" alt="logo" width={60} height={60} />

        <nav>
          {/* Add your navigation items here */}
          <ul className="flex space-x-10">
            <li className="hover:cursor-pointer relative hover:after:content-[''] hover:after:block hover:after:w-0 hover:after:h-[1px] hover:after:bg-white hover:after:absolute hover:after:left-1/2 hover:after:-bottom-1 hover:after:transition-all hover:after:duration-300 hover:after:ease-out hover:hover:after:w-full hover:hover:after:left-0">
              Our Mission
            </li>
            <li className="hover:cursor-pointer relative hover:after:content-[''] hover:after:block hover:after:w-0 hover:after:h-[1px] hover:after:bg-white hover:after:absolute hover:after:left-1/2 hover:after:-bottom-1 hover:after:transition-all hover:after:duration-300 hover:after:ease-out hover:hover:after:w-full hover:hover:after:left-0">
              Become a Patron
            </li>
            <li className="hover:cursor-pointer relative hover:after:content-[''] hover:after:block hover:after:w-0 hover:after:h-[1px] hover:after:bg-white hover:after:absolute hover:after:left-1/2 hover:after:-bottom-1 hover:after:transition-all hover:after:duration-300 hover:after:ease-out hover:hover:after:w-full hover:hover:after:left-0">
              Contact Us
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
const MainContent = () => {
  return (
    <main className=" px-20">
      <div className="container mx-auto">
        {/* Big rounded square */}
        <div
          className="bg-white rounded-[48px] shadow-lg overflow-hidden max-w-screen-lg mx-auto my-8 border border-white"
          style={{ height: "90vh" }}
        >
          {/* Section container */}
          <div className=" h-full flex flex-col">
            <div className="h-3/5 w-full flex flex-row ">
              {/* TOP LEFT */}
              <div className="w-2/3 h-full border-r-[1px] border-b-[1px] border-black"></div>
              {/* TOP RIGHT */}
              <div className="w-1/3 h-full border-b-[1px] border-black"></div>
            </div>

            <div className="h-2/5 w-full flex flex-row ">
              {/* BOTTOM LEFT */}
              <div className="w-1/3 h-full border-r-[1px] border-black"></div>
              {/* BOTTOM MIDDLE */}
              <div className="w-1/3 h-full border-r-[1px] border-black"></div>
              {/* BOTTOM RIGHT */}
              <div className="w-1/3 h-full "></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white p-5">
      <div className="container mx-auto">
        {/* Add footer content here */}
        <p className="text-center">
          Copyright © 2024 Company Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
