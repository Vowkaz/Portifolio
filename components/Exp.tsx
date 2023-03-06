import {Component} from "react";


class Exp extends Component {
    render() {
        const projects = [
            {
                id: 1,
                name: "Netflix Clone"
            },
            {
                id: 2,
                name: "Vehicle Websites"
            }];

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
                                    <h4 className="tracking-[5px] font-bold text-lg">Case Study {i.id} of {projects.length}: {i.name}</h4></div>
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