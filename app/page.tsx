import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-black text-white px-5 py-3">
      <div className="flex justify-start pl-32 items-start w-full">
        <Image src="/aegislogo.png" alt="logo" width={80} height={80} />
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
              <div className="w-2/5 h-full border-r-[1px] border-b-[1px] flex flex-col border-black pt-5 bg-[url('/background.png')]">
                <div className="h-1/5 w-full text-black pl-5 flex items-center font-mono">
                  <p className="text-[50px] text font-semibold"> aegis.art </p>
                </div>
                <div className="h-1/5 w-11/12 flex bg-black flex-row justify-between items-center mt-5 rounded-r-[64px] px-5 tracking-widest">
                  <p className="text-md text-white font-mono py-5">
                    {" "}
                    a new home for art patrons
                  </p>
                </div>
                <div className="w-full h-full flex justify-center mt-10 p-4 font-semibold">
                  <p>
                    forget traditional commissions schemes, aegis turns digital
                    art patronage into an experience:
                    <br />
                    <br />
                    invest in a daring artistic project and get an exclusive
                    insight into how it gets produced
                  </p>
                </div>
              </div>
              {/* TOP RIGHT */}
              <div className="container w-3/5 h-full border-b-[1px] border-black bg-black flex flex-col justify-center items-center">
                <div className="flex justify-center text-white font-semibold p-4 text-sm">
                  <p>
                    front-row seats to the production process
                    <br />
                    <br />
                    no more one-off studio visits, presentations over Zoom and
                    getting updates on your commissions via IG DMs. aegis bring
                    patrons a new level of insight to the art production
                    process: a token-gated content calendar filled with deep
                    dive interviews on topics of your choosing, regular
                    short-form video updates on the projects' many features,
                    reading lists curated by the artist, an interactive
                    moodboard and production roadmap, plus many more perks and
                    benefits.
                    <br />
                    <br />
                    investing in emerging artists has never been this intuitive
                    <br />
                    <br />
                    at aegis, we focus on incentivizing digital art patrons to
                    invest in an artist's work at the concept stage of an
                    artwork's development. this is achieved through a novel sale
                    structure: artists come up with a sum that reflects the
                    production costs of the artwork, and they trade this sum
                    with a patron in exchange for a select number of pieces from
                    the future digital art collection. once an agreement is
                    finalized, the aegis team focuses on promoting the
                    collection via physical gallery shows and activations.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-2/5 w-full flex flex-row ">
              {/* BOTTOM LEFT */}
              <div className="w-1/3 h-full border-r-[1px] flex flex-col border-black justify-between items-center p-4">
                <p className="text-black font-mono text-3xl font-semibold">
                  {" "}
                  Our Mission{" "}
                </p>

                <p className="text-black font-mono text-xl text-center font-semibold">
                  {" "}
                  bringing structure to digital art patronage
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
                      Don't miss out on aegis! Sign up for updates
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
