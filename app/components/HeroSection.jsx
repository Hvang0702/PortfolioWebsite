"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-600'>
                        Hello, I'm{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        'Hue',
                        1000, 
                        'a Student',
                        1000,
                        'a Software Engineer Intern',
                        1000,
                        'a Web Developer Intern',
                        1000
                    ]}
                    wrapper="span"
                    speed={25}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    A student at the California State University - Fresno pursuing a career in Software Engineering.
                </p>
                <div>
                    
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                        src="/images/HuePictureRemoveBG.png"
                        //src="/images/hero-image.png" Tutorial Picture
                        alt='hero image/HuePicture.jpg'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>

    </section>
  );
};

export default HeroSection