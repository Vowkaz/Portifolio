import { useState } from 'react';
import { InfoCard } from '@/components/InfoCard';
import { Icons } from '@/components/ui/icons';

const Exp = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const nextProject = () => {
    let x = projectIndex + 1;
    if (x == projects.length) {
      x = 0;
    }
    setProjectIndex(x);
  };

  const beforeProject = () => {
    let x = projectIndex - 1;
    if (x < 0) {
      x = projects.length - 1;
    }
    setProjectIndex(x);
  };
  const projects = [
    {
      id: 1,
      name: 'Exploring Spring',
      description: 'Design of an ApiREST in SpringBOOT 3 with JPA mapping and H2 database, ' +
                'Visualization Routes, creation and update of users, Orders and their items',
      link: 'https://github.com/Vowkaz/Exploring-Spring',
      icon: [
        'spring',
        'java',
      ],
    },
    {
      id: 2,
      name: 'Laravel Setup',
      description: 'Dockerized laravel project based on laradock',
      link: 'https://github.com/Vowkaz/laravel-setup',
      icon: [
        'php',
        'laravel',
        'docker',
      ],
    },
    {
      id: 3,
      name: 'Whatsapp bot with ChatGPT',
      description: 'Bot for whatsapp using davinci from openAI to generate images and text',
      link: 'https://github.com/Vowkaz/Bot_whats-with-chat_GPT',
      icon: [
        'js',
      ],
    },
  ];

  return (
        <>
            <section className="h-screen relative flex overflow-hidden flex-col text-left
                 md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
                <h3 className="absolute top-24 uppercase tracking-[20px] text-neutral-500 text-2xl">
                    Experience
                </h3>
                <h3 className="absolute top-36 uppercase tracking-[5px] text-gray-400 text-sm">
                    See some projects I've worked on
                </h3>

                <div
                    className={`w-max inline-flex
                        z-10 overflow-x-hidden mt-24
                    `}>
                    {/*    projects     */}

                    <InfoCard
                        id={projects[projectIndex].id}
                        name={projects[projectIndex].name}
                        description={projects[projectIndex].description}
                        link={projects[projectIndex].link}
                        icon={projects[projectIndex].icon}
                    />
                </div>

                <div
                    className={`absolute right-0 top-1/2 w-8 h-4 mr-4 z-20
                        `}
                    onClick={nextProject}
                >
                    <Icons.ChevronRight className={'w-8 h-8 sm:w-12 sm:h-12 text-sky-50 ' +
                        'hover:text-sky-500'}/>
                </div>

                <div
                    className={`absolute left-0 top-1/2  w-8 h-4 ml-4 z-20
                        `}
                    onClick={beforeProject}
                >
                    <Icons.ChevronLeft className={'w-8 h-8 sm:w-12 sm:h-12 text-sky-50 ' +
                        'hover:text-sky-500'}/>
                </div>

                <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[460px]
                -skew-y-12"/>
            </section>
        </>
  );
};


export default Exp;