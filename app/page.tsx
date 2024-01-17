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
              <div className="w-2/3 h-full border-r-[1px] border-b-[1px] flex flex-col border-black pt-10 bg-[url('/background.png')]">
                <div className="h-1/5 w-full text-black pl-10 flex items-center font-mono">
                  <p className="text-6xl text font-semibold"> AEGIS </p>
                </div>
                <div className="flex gap-y-3 w-3/5 pl-10 flex-col justify-between">
                  <div className="h-1 w-3/4 rounded-3xl bg-slate-700"></div>
                  <div className="h-1 w-3/5 rounded-3xl bg-slate-500"></div>
                  <div className="h-1 w-3/4 rounded-3xl bg-slate-700"></div>
                  <div className="h-1 w-3/5 rounded-3xl bg-slate-500"></div>
                </div>

                <div className="h-[16%] w-[55%] flex bg-black flex-row justify-between items-center mt-10 rounded-r-[64px] px-5 tracking-widest">
                  <div className="h-1/6 w-[3%] bg-black border-2 border-white rounded-full"></div>
                  <p className="text-lg text-white font-mono"> The New Art</p>
                  <div className="h-1/6 w-[3%] bg-black border-2 border-white rounded-full"></div>
                </div>
              </div>
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
      <div className="container mx-auto mb-5">
        {/* Add footer content here */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col space-y-2 w-1/3">
            <div className="h-[3px] w-full bg-white"></div>
            <div className="h-[3px] w-full bg-white"></div>
          </div>
          <p>
            © 2024 <span className="font-bold">Aegis</span>
          </p>
          <div className="flex flex-col space-y-2 w-1/3">
            <div className="h-[3px] w-full bg-white"></div>
            <div className="h-[3px] w-full bg-white"></div>
          </div>
        </div>
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
