function Page() {
  return (
    <div className="flex items-center justify-center h-screen rounded-[32px] drop-shadow-2xl">
      <div className="relative max-w-screen-lg bg-gray-200 rounded-lg w-128 h-96">
        <div className=" px-4 float-left w-1/2 h-full rounded-lg bg-gradient-to-b from-light-slate-blue to-light-royal-blue font-hanken">
          <h1 className="pt-10 text-2xl font-bold text-light-lavender mb-4">Your Results</h1>
          <div className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-b from-violet-blue to-persian-blue mx-auto mt-auto">
            <div className="flex flex-col items-center">
              <p className="text-white text-5xl font-bold">76</p>
              <p className="text-white">of 100</p>
            </div>
          </div>


          <p className="font-hanken font-bold mt-6 mb-4 text-2xl text-white">Great</p>
          <p className="font-hanken text-light-lavender">You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div className="absolute inset-y-0 right-0 w-1/2 h-full px-6 bg-white">
          <p className="pt-10 font-bold text-left">Summary</p>

          <div className="p-2 mt-4 text-light-red bg-light-red/20 rounded-md flex items-center font-hanken justify-between">
            <div className="flex items-center">
              <img src="https://placehold.co/100" alt="Icon" className="w-6 h-6" />
              <p className="m-0 pl-4">Reaction</p>
            </div>
            <div className="flex items-center">
              <div className="text-black">80</div>
              <div className="text-dark-gray-blue/50">/100</div>
            </div>
          </div>


          <div className="p-2 mt-4 text-orangey-yellow bg-orangey-yellow/20 rounded-md flex items-center font-hanken justify-between">
            <div className="flex items-center">
              <img src="../assets/images/icon-memory.svg" alt="Icon" className="w-6 h-6" />
              <p className="m-0 pl-4">Memory</p>
            </div>
            <div className="flex items-center">
              <div className="text-black">92</div>
              <div className="text-dark-gray-blue/50">/100</div>
            </div>
          </div>

          <div className="p-2 mt-4 text-green-teal bg-green-teal/20 font-hanken rounded-md flex items-center justify-between">
            <div className="flex items-center">
              <img src="https://placehold.co/100" alt="Icon" className="w-6 h-6" />
              <p className="m-0 pl-4">Verbal</p>
            </div>
            <div className="flex items-center">
              <div className="text-black">61</div>
              <div className="text-dark-gray-blue/50">/100</div>
            </div>
          </div>

          <div className="p-2 mt-4 text-cobalt-blue font-hanken bg-cobalt-blue/20 rounded-md flex items-center justify-between">
            <div className="flex items-center">
              <img src="https://placehold.co/100" alt="Icon" className="w-6 h-6" />
              <p className="m-0 pl-4">Visual</p>
            </div>
            <div className="flex items-center">
              <div className="text-black ">72</div>
              <div className="text-dark-gray-blue/50">/</div>
              <div className="text-dark-gray-blue/50 ">100</div>

            </div>
          </div>

          <div className="px-4  py-2 mt-8 text-white bg-dark-gray-blue hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue rounded-full">Continue</div>
        </div>
      </div>
    </div>
  )
}

export default Page


