import React from 'react'

const foot = `
<section class="bg-white">
    <div class="px-8 py-8 mx-auto sm:py-10 lg:py-20 max-w-7xl">
        <div class="relative py-6 overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 lg:py-12 md:px-6 lg:p-16 lg:flex lg:items-center lg:justify-between md:shadow-xl md:bg-purple-1000">
            <div class="absolute top-0 right-0 hidden w-full -mt-20 transform rotate-45 translate-x-1/2 bg-white sm:block h-96 opacity-5"></div>
            <div class="absolute top-0 left-0 hidden w-full -mt-20 transform rotate-45 -translate-x-1/2 bg-pink-300 sm:block h-96 opacity-5"></div>
            <div class="relative p-6 rounded-lg md:p-0 md:pb-4">
                <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10">Made with react and &#128153;</h2>
                <p class="w-full mt-2 text-base leading-6 text-pink-100 md:w-3/4">Leave a star If you like it.</p>
            </div>
            <div class="relative flex flex-col items-center w-full px-6 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
                <a href="https://github.com/pal404error/react-tvmaze" class="block w-full px-5 py-3 text-base font-medium leading-6 text-center text-purple-600 transition duration-150 ease-in-out bg-purple-100 rounded-md md:inline-flex md:shadow md:w-auto hover:bg-white focus:outline-none focus:shadow-outline">Star it 	&#127775;</a>
                
            </div>
        </div>
    </div>
</section>
`;
export const Footer = () => {
  return (
    <div dangerouslySetInnerHTML={{__html: foot}} />
  )
}
