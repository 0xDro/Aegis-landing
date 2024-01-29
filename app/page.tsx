import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-black text-white px-5 py-3">
      <div className="flex justify-center items-center w-full">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
      </div>
    </header>
  );
};
const MainContent = () => {
  return (
    <main className=" px-20 bg-black">
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
                  <p className="text-lg text-white font-mono">
                    {" "}
                    The New Way of Art
                  </p>
                  <div className="h-1/6 w-[3%] bg-black border-2 border-white rounded-full"></div>
                </div>
              </div>
              {/* TOP RIGHT */}
              <div className="container w-1/3 h-full border-b-[1px] border-black bg-black flex flex-col justify-around items-center">
                <div className="title-container w-2/3 my-4">
                  <p className="title text-white text-5xl font-bold text-center font-mono">
                    Patrons of Art
                  </p>
                </div>

                <div className="description-container w-5/6 text-white mt-5 p-4 flex flex-col gap-y-2">
                  <p className="description-text font-light text-xs text-center">
                    Forget traditional commissions schemes, aegis turns digital
                    art patronage into a comprehensive package
                  </p>
                  <p className="description-text font-light text-xs text-center">
                    Patrons get to support daring artistic projects; in return,
                    they get an exclusive insight into how the projects get
                    produced.
                  </p>
                </div>

                <div className="separator w-5/6 h-[1px] bg-white my-4"></div>

                <div className="footer-container flex flex-col justify-center items-center w-5/6 h-3/5  p-4">
                  <p className="text-sm font-bold  mt-8">
                    Be part of the revolution
                  </p>
                </div>
              </div>
            </div>

            <div className="h-2/5 w-full flex flex-row ">
              {/* BOTTOM LEFT */}
              <div className="w-1/3 h-full border-r-[1px] flex flex-col border-black justify-between items-center p-4">
                <p className="text-black font-mono text-2xl font-semibold">
                  {" "}
                  Our Mission{" "}
                </p>

                <p className="text-black font-mono text-lg text-center font-semibold">
                  {" "}
                  bringing structure to the patronage process
                </p>
                <div className="flex h-1/5 w-3/4 justify-center items-center">
                  <div className=" h-full w-full rounded-3xl bg-black "></div>
                </div>
              </div>

              {/* BOTTOM MIDDLE */}
              <div className="w-2/3 h-full  ">
                <div className="flex flex-col justify-between  h-full py-4 px-8">
                  <div className="flex flex-row justify-between h-2/3 items-center ">
                    <p className="text-3xl text-center font-bold">
                      Don't miss out on Aegis! Sign up for updates
                    </p>
                  </div>

                  <div className=" h-1/5 p-3 w-full rounded-3xl border border-black  text-black  justify-center flex items-center  flex-row ">
                    <input
                      className="w-full h-full bg-transparent outline-none items-center text-center justify-center"
                      placeholder="Enter Email"
                    />
                    <div className="w-1/5 rounded-full cursor-pointer text-black border border-black h-full flex justify-center items-center transition-colors duration-300 hover:bg-gray-300">
                      <p className="text-black">{" > "}</p>
                    </div>
                  </div>
                </div>
              </div>
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
      <div className="min-h-screen w-full bg-black">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
