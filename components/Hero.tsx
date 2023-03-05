import {Cursor, useTypewriter} from "react-simple-typewriter";
import {Component} from "react";
import Link from "next/link";

type Props = {}

class BackgroundCircles extends Component {
    render() {
        return (
            <div className="relative flex justify-center items-center">
                <div className="absolute border border-gray-700 rounded-full h-[200px] w-[200px] mt-52
                animate-ping"/>
                <div className="absolute border border-gray-700 rounded-full h-[300px] w-[300px] mt-52
                animate-ping"/>
                <div className="absolute border border-gray-700 rounded-full h-[400px] w-[400px] mt-52
                animate-ping"/>
                <div className="absolute border border-yellow-400 rounded-full opacity-10 h-[550px] w-[550px]
                mt-52 animate-pulse"/>
                <div className="absolute border border-gray-700 rounded-full opacity-10 h-[700px] w-[700px] mt-52"/>
            </div>
        )
    }
}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["pleasure, i'm João Lucas", "Developer", "User experience", "Agile", ".PHP", ".Tsx .Ts", "RESTful"],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <>
            <section
                className="h-screen flex flex-col space-y-8 text-center overflow-hidden items-center justify-center">
                <BackgroundCircles/>
                <img src="https://avatars.githubusercontent.com/u/89817885?v=4"
                     alt="Hello"
                     className="relative rounded-full w-32 h-32 mx-auto object-cover"
                />

                <div className="z-20 items-center justify-center">
                    <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[0.5rem]">
                        Full-stack Developer
                    </h2>
                    <h1 className="text-4xl lg:text-5xl font-light px-10">
                        <span className="mr-3">{text}</span>
                        <Cursor cursorColor="#F7AB0A"/>
                    </h1>

                    <div className="pt-56">
                        <Link href="#about">
                            <button className="heroButton">
                                About
                            </button>
                        </Link>
                        <Link href="#exp">
                            <button className="heroButton">
                                Experience
                            </button>
                        </Link>
                        <Link href="#skill">
                            <button className="heroButton">
                                Skills
                            </button>
                        </Link>
                    </div>

                </div>

            </section>
        </>
    )
}