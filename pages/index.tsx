import Head from 'next/head';
import { NextPage } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skill';
import Exp from '@/components/Exp';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons';

const Home: NextPage = () => {
  return (
        <>
            <Head>
                <title>Vkz</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            <article className=" z-0">
                {/*    Header     */}
                <Header/>

                {/*    Hero     */}
                <section id="hero" className="snap-start">
                    <Hero/>
                </section>

                {/*    Exp      */}
                <section id="exp" className="snap-start">
                    <Exp/>
                </section>

                {/*    About    */}
                {/*<section id="about" className="snap-start">*/}
                {/*    <About/>*/}
                {/*</section>*/}

                {/*    Skills   */}
                <section id="skill" className="snap-start">
                    <Skills/>
                </section>

                {/*    Footer   */}
                <section id="footer" className="snap-center">
                    <Footer />
                </section>

                <div className="sticky hidden md:flex bottom-5 items-center justify-center">
                    <Link href="#hero"  >
                        <Icons.ChevronUp className="h-10 w-10 bg-slate-900 rounded-full"/>
                    </Link>
                </div>
            </article>
        </>

  );
};

export default Home;