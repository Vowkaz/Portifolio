import {useState} from 'react';
import {InfoCard} from '@/components/InfoCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Mousewheel} from 'swiper/modules';
import {Icons} from '@/components/ui/icons';
import {useRef} from 'react';
import {Swiper as SwiperClass} from 'swiper/types';

const Exp = () => {
    const [projectIndex, setProjectIndex] = useState(0);
    const swiperRef = useRef<SwiperClass | null>(null);

    const nextProject = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const beforeProject = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const projects = [
        {
            id: 2,
            name: 'AgroOpenBank API',
            studyCase: false,
            description: "Laravel-based API for automating producer data management, enhancing and expanding the Creditares client and producer database, while streamlining access to valuable insights for improved decision-making",
            link: null,
            list: [
                '• Developed a Python API for real-time socio-environmental data scraping, removing reliance on third-party APIs and reducing associated costs.',
                '• Optimized backend systems in Laravel, improving query performance by 96% and reducing lead pagination from 20s to 800ms.',
                '• Led frontend development with Quasar.js, delivering a user-friendly interface and enhancing client satisfaction.'
            ],
            icon: [
                'laravel',
                'php',
                'python',
                'docker'
            ],
        },
        {
            id: 1,
            name: 'AgroOpenBank',
            studyCase: false,
            description: 'Web and Mobile development for an application that enables Creditares clients to quickly and efficiently access producer data, enhancing productivity and decision-making',
            link: null,
            list: null,
            icon: [
                'vue',
                'quasar',
                'amplify',
            ],
        },
    ];

    return (
        <>
            <section className="h-screen relative flex flex-col text-left
                 md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
                <h3 className="absolute top-24 uppercase tracking-[20px] text-neutral-500 text-2xl">
                    Experience
                </h3>
                <h3 className="absolute top-36 uppercase tracking-[5px] text-gray-400 text-sm">
                    See some projects I've worked on
                </h3>

                <div
                    className={`inline-flex z-10 overflow-x-hidden`}>
                    {/*    projects     */}
                    <Swiper
                        onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
                        pagination={{
                            clickable: true,
                            renderBullet: (index: number, className: string) => `<span class="${className} bg-gray-500"></span>`
                        }}
                        navigation
                        // loop={true}
                        mousewheel
                        modules={[Pagination, Mousewheel]}
                    >
                        {projects.map((src) => (
                            <SwiperSlide key={src.id}>
                                <InfoCard
                                    id={src.id}
                                    name={src.name}
                                    studyCase={src.studyCase}
                                    description={src.description}
                                    link={src.link}
                                    icon={src.icon}
                                    list={src.list}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className={`absolute left-0 right-0 top-1/2 flex justify-between z-20 max-w-[1640px] mx-auto`}>
                    <div
                        className={`w-12 h-12 ml-4`}
                        onClick={beforeProject}
                    >
                        <Icons.ChevronLeft className={'w-8 h-8 sm:w-12 sm:h-12 text-sky-50 hover:text-sky-500'} />
                    </div>
                    <div
                        className={`w-12 h-12 mr-4`}
                        onClick={nextProject}
                    >
                        <Icons.ChevronRight className={'w-8 h-8 sm:w-12 sm:h-12 text-sky-50 hover:text-sky-500'} />
                    </div>
                </div>

                <div className="absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[460px] -skew-y-12 w-screen"/>
            </section>
        </>
    );
};


export default Exp;