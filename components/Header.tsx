import {Icons} from "@/components/ui/icons";
import Link from "next/link";
import {motion} from "framer-motion"

type Props = {}

export default function Header({}: Props) {
    return (
        <>
            <section className="flex items-start overflow-hidden max-w-7xl mx-auto p-6 justify-between z-20 sticky top-0
                                xl:items-center">
                {/*  Icons  */}
                <motion.nav
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: .5
                    }}
                    className="flex flex-rows items-center">

                    <Link className="m-4" href="https://github.com/vowkaz" target="_blank">
                        <button className="rounded-full">
                            <Icons.gitHub className=" w-6 h-6 "/>
                        </button>
                    </Link>
                    <Link className="m-4" href="https://linkedin.com/in/joao-lucas-garmier/" target="_blank">
                        <button>
                            <Icons.Linkedin className=" w-6 h-6 text-transparent fill-sky-50"/>
                        </button>
                    </Link>


                </motion.nav>

                {/*  */}
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: .5
                    }}
                   >
                    <Link className="hidden md:flex items-center overflow-hidden cursor-pointer" href="#footer">
                        <Icons.Mails className="m-4  w-6 h-6 "/>
                        <p className="uppercase hidden md:inline-flex text-sm">
                            GET IN TOUCH
                        </p>
                    </Link>
                </motion.div>
            </section>
        </>
    )
}