import React, { useState, useEffect } from 'react';

export default function Body () {
  const phrases = ['Hello!', "I'm Sakshat.", 'Welcome!' ,'Have a look around.','Cheers!']; 
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
  
    if (displayedText !== currentPhrase) {
      // If the displayed text is not equal to the current phrase, update it letter by letter
      const timeoutId = setTimeout(() => {
        setDisplayedText((prevText) => currentPhrase.substring(0, prevText.length + 1));
      }, 100);
  
      // Clear the timeout when the component unmounts or when the phrase is fully displayed
      return () => clearTimeout(timeoutId);
    } else {
      // If the phrase is fully displayed, move on to the next one after a delay
      const timeoutId = setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setDisplayedText(''); // Reset displayedText when moving to the next phrase
      }, 1000);
  
      // Clear the timeout when the component unmounts or when moving to the next phrase
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
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary"><a href='#project_cards' >Go To Projects</a></button>
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

