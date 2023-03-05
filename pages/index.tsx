import Head from "next/head";
import {NextPage} from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Vkz</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            <article className="snap-y snap-mandatory z-0">
            {/*    Header     */}
                <Header />
            {/*    Hero     */}
                <section id="hero" className="snap-start">
                    <Hero />
                </section>
            {/*    About    */}
                <section id="about" className="snap-center">
                    <About />
                </section>
            {/*    Exp      */}

            {/*    Skills   */}

            {/*    Footer   */}
            </article>
        </>

    );
}

export default Home;