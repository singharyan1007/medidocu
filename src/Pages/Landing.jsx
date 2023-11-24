import React from "react"

const Landing = () => {

  return (
    <section >



      <div className="mx-auto max-w-6xl px-4 sm:px-6 font-sans">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-28 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-6xl md:text-9xl leading-tight font-extrabold tracking-tighter mb-4 md:leading-tight">Zospital <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Medical Search</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Elevate your Medical Search</p>
              <div className="max-w-xs mx-auto flex flex-col items-center sm:max-w-none sm:flex-row sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="inline-flex items-center justify-center rounded font-bold leading-tight p-2 text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 sm:mr-4" href="#0">
                    Login with Google &rarr;
                  </a>
                </div>
                <div>
                  <a className="inline-flex items-center justify-center rounded font-bold leading-tight p-2 text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto" href="#0">
                    Continue without Login
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


    </section>
  )
}

export default Landing
