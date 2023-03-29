import { Icons } from '@/components/ui/icons';
import Link from 'next/link';
// import {SubmitHandler, useForm} from "react-hook-form";
//
// type Inputs = {
//     name: string,
//     email: string,
//     subject: string,
//     message: string,
// }


function Footer() {

  // const {register, handleSubmit,} = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = data => {
  //     window.location.href = `mainto:jlucasgarmier@gmail.com?subject=${data.subject}&body=nome:
  //     ${data.name}, mail: ${data.email}, data: ${data.message}`
  // }

  return (
        <>
            <section className="h-screen flex relative flex-col text-center md:flex-row
                max-w-7xl px-10 justify-evenly mx-auto items-center">
                <h3 className="absolute top-24 uppercase tracking-[20px] text-neutral-500 text-2xl">
                    Contact me
                </h3>
                <div className="flex flex-col space-y-10">
                    <h4 className="text-xl font-extralight text-center">
                        I offer solutions in digital services in the area of web development <span
                        className="underline decoration-yellow-400/40 ">Let's Talk</span>
                    </h4>

                    <div className="space-y-8">
                        <div className="flex items-center space-x-5 ">
                            <Icons.Phone/>
                            <p className="uppercase tracking-[3px] select-text">
                                +55 (65) 992122116
                            </p>
                        </div>
                        <div className="flex items-center space-x-5 ">
                            <Icons.MapPin/>
                            <p className=" tracking-[3px] select-text">Cuiabá - MT</p>
                        </div>
                        <div className="flex items-center space-x-5 ">
                            <Icons.Mails/>
                            <p className=" tracking-[3px] select-text">jlucasgarmier@gmail.com</p>
                        </div>
                    </div>
                    <section className="mt-8 flex items-center justify-center">
                        <Link href="https://api.whatsapp.com/send?l=pt&phone=5565992122116&text=Olá,
                         gostaria de mais informações." target="_blank">
                            <div  className="bg-green-700 hover:bg-green-500 text-slate-900
                            font-bold tracking-[3px]  w-52 xl:w-80 h-16 rounded-2xl flex text-center
                             items-center justify-center gap-4" >
                                Call me on whatsapp
                            </div>
                        </Link>
                    </section>
                </div>



                {/*<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-fit
                mx-auto">*/}
                {/*    <div className="flex space-x-2">*/}
                {/*        <input*/}
                {/*            {...register('name')}*/}
                {/*            placeholder="Your name"*/}
                {/*            className="contactInput"*/}
                {/*            type="text"*/}
                {/*        />*/}
                {/*        <input*/}
                {/*            {...register('email')}*/}
                {/*            placeholder="Your best Email"*/}
                {/*            className="contactInput"*/}
                {/*            type="email"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <input*/}
                {/*        {...register('subject')}*/}
                {/*        placeholder="Subject"*/}
                {/*        className="contactInput"*/}
                {/*        type="text"*/}
                {/*    />*/}

                {/*    <textarea*/}
                {/*        {...register('message')}*/}
                {/*        placeholder="Message"*/}
                {/*        className="contactInput"*/}
                {/*    />*/}

                {/*    <button*/}
                {/*        type="submit"*/}
                {/*        className="bg-[#F7AB0A]/40 hover:bg-[#F7AB0A]/60 py-5 px-10 rounded-md
                font-bold text-xl text-slate-900"*/}
                {/*    >*/}
                {/*        Submit*/}
                {/*    </button>*/}
                {/*</form>*/}

            </section>
        </>
  );
}

export default Footer;