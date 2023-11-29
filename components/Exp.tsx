import {useState} from 'react';
import {InfoCard} from '@/components/InfoCard';
import {Icons} from '@/components/ui/icons';

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
            name: 'AgroOpenBank',
            studyCase: false,
            description: 'Desenvolvimento Web e Mobile para um aplicação para clientes da Creditares terem de maneira ágil e produtiva os dados de seus produtores.',
            link: null,
            list: null,
            icon: [
                'vue',
                'react',
            ],
        },
        {
            id: 2,
            name: 'AgroOpenBank API',
            studyCase: false,
            description: "API para consumo interno utilizando Laravel para automações de dados dos produtores para os clientes da Creditares, ampliando e melhorando a base de dados de clientes e produtores.",
            link: null,
            list: [
                "Criação de robôs para captura de dados e consultas em APIs de entidades fiscais como Bacen, SIGEF, BRAIN, SatSure, Sicar, entre outras, para alimentar a base com os dados dos produtores.",
                "Automações seguindo uma regra de negócio para facilitar o cotidiano dos usuários, como monitoramentos dos produtores do banker, ratings e indicadores."
            ],
            icon: [
                'laravel',
                'php',
                'python',
                'docker'
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
                        studyCase={projects[projectIndex].studyCase}
                        description={projects[projectIndex].description}
                        link={projects[projectIndex].link}
                        icon={projects[projectIndex].icon}
                        list={projects[projectIndex].list}
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