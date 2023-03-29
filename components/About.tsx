import { Component } from 'react';
import { motion } from 'framer-motion';
// import img from "@/img/about-img.jpg"

class About extends Component {
  render() {
    return (
            <>
            <section className="flex flex-col relative h-screen text-center xl:text-left xl:flex-row
             max-w-7xl px-10  justify-evenly mx-auto items-center">
                <h3 className="absolute top-24 text-transparent uppercase tracking-[20px]
                text-slate-900 xl:text-neutral-500 text-2xl">
                    About
                </h3>

                <motion.img
                    initial= {{
                      x: -200,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    src={'https://avatars.githubusercontent.com/u/89817885?v=4'}
                    // src={"/img/about-test.jpg"}
                    alt="test"
                    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-72 rounded-full object-cover
                    xl:w-[500px] xl:h-[600px] "
                    // className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                    // md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] "
                />

                <div className="space-y-10 px-4 py-8 z-20 md:px-10 xl:-mx-8 bg-slate-800 shadow-sm
                shadow-black rounded-2xl">
                    <h4 className="text-4xl font-extralight ">
                        That it's <span className="underline decoration-yellow-400/40">
                        me
                    </span>{' '}
                    </h4>
                    <p className="text-base text-start px-4">
                        {/*I offer solutions in digital services in the field of web development.
                        <br/>*/}
                        Motivated by technology,  I've had the opportunity to work on various
                        projects . I possess a understanding of software engineering principles and
                        practices, and I'm eager to learn and expand my skillset.
                    </p>
                </div>
            </section>
            </>
    );
  }
}

export default About;