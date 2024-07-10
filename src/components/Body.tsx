import React, { useState, useEffect } from 'react';

export default function Body () {
  const phrases = ['Hello!', "I'm Sakshat.", 'Welcome!' ,'Have a look around.','Cheers!']; 
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
  
    if (displayedText !== currentPhrase) {
      
      const timeoutId = setTimeout(() => {
        setDisplayedText((prevText) => currentPhrase.substring(0, prevText.length + 1));
      }, 100);
  
      
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setDisplayedText(''); 
      }, 1000);
  
      
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, currentPhraseIndex]);
  
  return (
    <>
    
      <div className="hero min-h-screen bg-base-200 flex flex-column item-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold overflow-hidden">{displayedText}</h1>
            <p className="py-6">
             A passionate and results-driven Web Developer. My journey has equipped me with a diverse skill set, combining technical expertise with a creative approach to web developemnet.
            </p>
            <div className='flex justify-center gap-4'>

            <button className="btn btn-primary"><a href='#project_cards' >Go To Projects</a></button>

            <a href="https://github.com/asakshat"
      ><button className="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
         Github
      </button></a
    >
            </div>
        


            <div className="p-10">
            <kbd className="kbd">npm</kbd>
            
            <kbd className="kbd">run</kbd>
            
            <kbd className="kbd">build</kbd>
        </div>
          </div>
          
        </div>
       
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Learned programming through :-{' '}
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 md:max-w-xl md:grid-cols-6 md:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
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
              src="https://raw.githubusercontent.com/asakshat/new_portfolio/main/public/udemy.png"
              alt="udemy"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://raw.githubusercontent.com/asakshat/new_portfolio/main/public/odin.png"
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

