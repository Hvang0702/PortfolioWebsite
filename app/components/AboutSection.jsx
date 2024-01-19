"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>C++</li>
                <li>C#</li>
                <li>Haskell</li>
                <li>JavaScript</li>
                <li>Php</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Html</li>
                <li>Css</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Typescript</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>California State University - Fresno</li>
                <li>2020 - Present</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>None yet!</li>
                
            </ul>
        )
    },
    {
        title: "Tools",
        id: "tools",
        content: (
            <ul className='list-disc pl-2'>
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Visual Studio</li>
                
            </ul>
        )
    },

]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
  };

  return <section className="text-white">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/Hue.JPG" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg '>
                As a committed Computer Science student at California State University Fresno, I excel in combining creativity with technology. With a solid 3.2 GPA and a diverse course load, my academic journey is geared towards a Spring 2025 graduation. My programming skills span languages like C++, Python, and JavaScript, and technologies such as MongoDB, MySQL, NextJS, Node.js, and React. My projects, including a Social Media App using MERN, a Pixel Jump Adventure game using Unity & C#, and a Sorting Algorithm Visualizer, reflect my full-stack expertise and dedication to user-friendly, efficient solutions. I aim to keep exploring and innovating in the ever-evolving tech landscape.

                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}
                    > 
                    {" "}
                    Skills{" "} 
                    </TabButton>
                    <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab === "education"}
                    > 
                    {" "}
                    Education{" "} 
                    </TabButton>
                    <TabButton 
                    selectTab={() => handleTabChange("certifications")} 
                    active={tab === "certifications"}
                    > 
                    {" "}
                    Certifications{" "} 
                    </TabButton>
                    <TabButton 
                    selectTab={() => handleTabChange("tools")} 
                    active={tab === "tools"}
                    > 
                    {" "}
                    Tools{" "} 
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>;
}

export default AboutSection;