import {Icons} from '@/components/ui/icons';
import Link from 'next/link';
import {InfoIcons} from '@/components/InfoIcons';
import {useEffect, useState} from "react";

'use client'

type InfoType = {
    id: number,
    name: string,
    studyCase: boolean,
    description: string,
    link: string | null,
    icon: string[],
    list: string[] | null,
};

export function InfoCard({id, name, description, studyCase, link, icon, list}: InfoType) {
    const [viewHeight, setViewHeight] = useState<number>(0);

    useEffect(() => {
        const updateViewHeight = (): void => {
            setViewHeight(window.innerHeight);
        };

        updateViewHeight();
        window.addEventListener('resize', updateViewHeight);

        return (): void => {
            window.removeEventListener('resize', updateViewHeight);
        };
    }, []);

    return (
        <>
                <section
                    className={`
                        rounded-xl flex flex-col z-20 shadow-sm shadow-slate-900 min-h-[400px]
                        mt-20 sm:mt-16 max-w-[1440px] w-[calc(100dvw-12rem)] bg-slate-400/20 mx-auto
                        h-[calc(100dvh-17rem)] lg:h-[calc(100dvh-30rem)] flex-shrink-0 relative
                        `}>
                    <div
                        className={`w-full h-20 rounded-t-xl
                        border-b-2 border-gray-400/40 flex flex-row items-center justify-between
                        `}
                    >
                        <div className={'inline-flex'}>
                            <Icons.Circle className={'text-gray-500 fill-gray-500 w-4 ml-4'}/>
                            <Icons.Circle className={'text-gray-500 fill-gray-500 w-4 ml-4'}/>
                            <Icons.Circle className={'text-gray-500 fill-gray-500 w-4 ml-4'}/>
                        </div>

                        <Icons.GitCLose className={'text-gray-500 w-16  mr-4'}/>
                    </div>

                    {/*<div className={`h-full `}>*/}
                    <article className="snap-center grid grid-cols-1 lg:grid-cols-2
                        items-center justify-center px-20 h-full">

                        <div className={'text-sky-50 flex flex-col justify-center items-center'}>
                            <div className="px-0 md:px-10 max-w-6xl">
                                <h4 className="tracking-[2px] font-bold text-lg text-start">
                                    {studyCase &&
                                        'Case Study {id}:'}
                                    <label>{name}</label></h4>
                            </div>
                            <p className={'text-justify text text-lg font-normal'}>
                                {description}
                            </p>
                            {(viewHeight > 900) &&
                                !!list &&
                                list.map((li: string, i: number) => {
                                    return <li className="pt-2 mx-4 font-normal" key={i}>
                                        {li}
                                    </li>
                                })
                            }
                            {link &&
                                <Link href={link} target="_blank">
                                    <p className="border border-gray-400 py-2 px-4 mt-8 mx-auto
                                justify-center w-fit rounded-xl hover:border-gray-200
                                bg-slate-400/20 hover:bg-slate-400/40 tracking-[5px] "> See
                                        at here</p>
                                </Link>
                            }
                        </div>


                        <div className={`mx-auto grid justify-center
                        grid-cols-2 gap-5 text-sky-50 items-center content-center 
                        text-center`}>
                            {icon.map((e: string, i: number) => {
                                return <InfoIcons key={i} icon={e}/>;
                            })}
                        </div>

                    </article>
                    {/*</div>*/}
                </section>
        </>
    );
}