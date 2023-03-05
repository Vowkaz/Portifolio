import {Icons} from "@/components/ui/icons";
import Link from "next/link";
import { motion } from "framer-motion"

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
                        <Icons.gitHub className=" w-6 h-6 "/>
                    </Link>
                    <Link className="m-4" href="https://linkedin.com/in/joao-lucas-garmier/" target="_blank">
                        <Icons.Linkedin className=" w-6 h-6 text-transparent fill-sky-50"/>
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
                    className="flex items-center overflow-hidden cursor-pointer">
                    <Link className="m-4" href="mailto:jlucasgarmier@gmail.com" target="_blank">
                        <Icons.Mails className=" w-6 h-6 "/>
                    </Link>
                    <p className="uppercase hidden md:inline-flex text-sm">
                        GET IN TOUCH
                    </p>
                </motion.div>
            </section>
        </>
    )
}