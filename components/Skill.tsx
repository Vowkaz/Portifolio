import {Icons} from '@/components/ui/icons';


const Skills: () => JSX.Element = () => {
    return (
        <>
            <section
                className="flex flex-col relative h-screen text-center xl:text-left xl:flex-row max-w-7xl px-10
                      justify-evenly mx-auto items-center"
            >
                <h3 className="absolute top-24 uppercase tracking-[20px] text-neutral-500 text-2xl">
                    Skills
                </h3>

                <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-400 text-sm">
                    Skill for currency profieciency
                </h3>

                <div
                    className="grid  grid-cols-4 gap-5 text-sky-50 items-center content-center
                        justify-center text-center">
                    <Icons.Laravel/>
                    <Icons.Php/>
                    <Icons.React/>
                    <Icons.Vue/>
                    <Icons.Ts/>
                    <Icons.Python/>
                    {/*<Icons.Java/>*/}
                    {/*<Icons.Spring/>*/}
                    <Icons.Tailwind/>
                    <Icons.Docker/>
                    {/*<Icons.Mongo/>*/}


                </div>
            </section>
        </>
    )
}

export default Skills;