import { Icons } from '@/components/ui/icons';
import Link from 'next/link';
import { InfoIcons } from '@/components/InfoIcons';

type InfoType = {
  id: number,
  name: string,
  description: string,
  link: string,
  icon: string[]
};

export function InfoCard({ id, name, description, link, icon }: InfoType) {
  return (
        <>
            <div
                className={'w-screen flex-shrink-0 relative'}>

                <section
                    className={`
                        rounded-xl flex flex-col z-20 overflow-hidden shadow-sm shadow-slate-900 
                        mt-20 sm:mt-16
                        mx-[calc(10dvw-2rem)] bg-slate-400/20
                        w-w-[calc(100dvw-0.125rem)] sm:w-[calc(100dvw-15rem)] 
                        lg:w-[calc(100dvw-20rem)] 
                        h-[calc(100dvh-17rem)] lg:h-[calc(100dvh-30rem)] 
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
                                <h4 className="tracking-[3px] font-bold text-lg text-start">Case
                                    Study {id}: <label>{name}</label></h4>
                            </div>
                            <p className={'text-justify text text-lg'}>
                                {description}
                            </p>
                            <Link href={link} target="_blank">
                                <p className="border border-gray-400 py-2 px-4 mt-8 mx-auto
                                justify-center w-fit rounded-xl hover:border-gray-200
                                bg-slate-400/20 hover:bg-slate-400/40 tracking-[5px] "> See
                                    at here</p>
                            </Link>
                        </div>


                        <div className={`mx-auto inline justify-center items-center grid
                        grid-cols-4 gap-5 text-sky-50 items-center content-center justify-center 
                        text-center`}>
                            {icon.map((e: string, i: number) => {
                              return <InfoIcons key={i} icon={e}/>;
                            })}
                        </div>

                    </article>
                    {/*</div>*/}
                </section>


            </div>
        </>
  );
}