import { useMemo } from 'react';
import { ClientAudiophile, ClientDatabiz, ClientMaker, ClientMeet } from '../assets'
import hero from '../assets/image-hero-desktop.png'
import heroMobile from '../assets/image-hero-mobile.png'
export function Hero () {

    const isMobile = useMemo(() => {
        return window.innerWidth <= 768;
    }, [])


    return (
        <main className="flex w-full h-[calc(100vh-86px)] items-center  flex-col lg:flex-row">
            <section className='flex-1 flex flex-col text-center lg:text-start gap-y-4  lg:gap-y-12 lg:pl-44 dt:pl-36 lg:pt-20 lg:h-full dt:h-auto animate-fade-right order-1 lg:order-none px-2 lg:px-0'>
                <h1 className='font-bold text-3xl lg:text-7xl  dt:text-[5.6rem]  text-almost-back w-full'>
                    Make {isMobile ? '' : <br />}
                    remote work
                </h1>
                <div className='lg:block  w-auto lg:w-96 dt:w-[28rem] text-almost-gray lg:text-base dt:text-[18px]'>
                    <p className='inline'>Get yout team in sync, no matter your location.</p>
                    <p className='inline lg:block mr-2'>Streamline processes, create team rituals, and watch productivity soar.</p>
                </div>
                <a href="#" className='text-almost bg-almost-back border text-sm lg:text-lg px-8 py-3 lg:py-4 rounded-xl lg:self-start self-center hover:text-almost-back hover:bg-transparent hover:border hover:border-almost-back transition-all mb-4 lg:mb-0'>Learn More</a>
                <section className='flex-wrap flex justify-between gap-y-6 lg:gap-y-0 lg:justify-normal lg:flex-nowrap  lg:flex lg:gap-x-10 w-full lg:py-6 '>
                    <ClientDatabiz />
                    <ClientAudiophile />
                    <ClientMeet />
                    <ClientMaker />
                </section>
            </section>
            <section className='flex-1 animate-fade-left  '>
                <img src={isMobile ? heroMobile : hero} className='object-cover w-auto lg:w-[24rem]   lg:mx-auto dt:w-[34rem] '/>
            </section>
        </main>
    )
}