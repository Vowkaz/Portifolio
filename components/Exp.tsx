import {Component} from "react";
import Link from "next/link";


class Exp extends Component {
    render() {
        const projects = [
            {
                id: 1,
                name: "Exploring Spring",
                description: "Design of an ApiREST in SpringBOOT 3 with JPA mapping and H2 database, Visualization Routes, creation and update of users, Orders and their items",
                link: "https://github.com/Vowkaz/Exploring-Spring"
            },
            {
                id: 2,
                name: "Laravel Setup",
                description: "Dockerized laravel project based on laradock",
                link: "https://github.com/Vowkaz/laravel-setup"
            },
            {
                id: 3,
                name: "Whatsapp bot with ChatGPT",
                description: "Bot for whatsapp using davinci from openAI to generate images and text",
                link: "https://github.com/Vowkaz/Bot_whats-with-chat_GPT"
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
                        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin">
                        {/*    projects     */}

                        {projects.map((i) => (
                            <div key={i.id+1} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                            items-center justify-center p-20 md:p-44 h-screen">
                                {/*<img src="img/about-test.jpg" alt="test"/>*/}

                                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                                    <h4 className="tracking-[5px] font-bold text-lg">Case Study {i.id} of {projects.length}: {i.name}</h4>
                                </div>
                                    <p className=" font-bold text-lg">{i.description}</p>
                                    <Link href={i.link} target="_blank" >
                                    <p className="border border-gray-700 p-2 rounded-xl hover:border-gray-200 tracking-[5px] "> See at here</p>
                                    </Link>
                            </div>
                        ))}

                    </div>

                    <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[460px] -skew-y-12"/>
                </section>
            </>
        )
    }
}

export default Exp;