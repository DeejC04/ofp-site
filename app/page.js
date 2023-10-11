export default function Home() {
  return (
    <div className="min-h-[100vh] w-screen flex font-inter flex-col overflow-hidden bg-gradient-to-b from-slate-400 to-slate-300">
      <header className="flex flex-row justify-center items-center p-4">
        <div className="p-5 h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 flex flex-row justify-between items-center">
          <div className="flex basis-1/3">
            <h1 className="font-serif text-3xl basis-1/3 font- grow">Ocean Flower Photography</h1>
          </div>
          <div className="flex basis-1/3 group justify-center">
            <a href="/" className="p-3 hover:bg-white hover:text-black hover:rounded-md transition-all duration-500">Pricing</a>
            <a href="/" className="p-3 hover:bg-white hover:text-black hover:rounded-md transition-all duration-500">Gallery</a>
            <a href="/" className="p-3 hover:bg-white hover:text-black hover:rounded-md transition-all duration-500">About</a>
          </div>
          <div className="flex basis-1/3 justify-end space-x-4">
            <a href="/" className="border border-white p-3 rounded-md text-white">Log In</a>
            <a href="/" className="bg-white p-3 rounded-md text-black">Sign Up</a>
          </div>
        </div>
      </header>
      <div className="flex flex-row justify-around p-24">
        <h1 className="flex-wrap text-7xl w-5/12">Your photos <h1 className="font-bold">Your memories</h1></h1>
        <div className="p-5 basis-1/3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 flex flex-col justify-between items-center text-center space-y-6">
          <h1 className="text-5xl font-bold">I have a <span className="">camera</span></h1>
          <p>Hi I take cool pictures pay me please thanks very much have a good day. Would you like to buy my stuff? If so, great. Do that below please, thanks :)</p>
          <a href="/" className="bg-white p-3 rounded-md text-black text-xl">Sign Up To Get Started</a>
        </div>
      </div>
    </div>
  )
}