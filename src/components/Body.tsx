

export default function Body () {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button><br></br>
            <kbd className="kbd">npm</kbd>
            
            <kbd className="kbd">run</kbd>
            
            <kbd className="kbd">build</kbd>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Learned programming through :-{' '}
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://www.edx.org/images/logos/edx-logo-elm.svg"
              alt="udemy"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://www.svgrepo.com/show/306072/freecodecamp.svg"
              alt="FreeCodeCamp"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://www.svgrepo.com/show/513089/youtube-168.svg"
              alt="Youtube"
              width="158"
              height="48"
            />

            <img
              className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="src/udemy.png"
              alt="udemy"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="src/odin.png"
              alt="TheOdinProject"
              width="158"
              height="48"
            />
          </div>
        </div>
      </div>
    </>
  );
};

