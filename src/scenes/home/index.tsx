import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "motion/react";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
    <section id="home" className="flex flex-col min-h-screen gap-16 bg-gray-20 lg:min-h-full py-10 lg:pb-0">
        { /* Image and Main Header */}
        <motion.div 
            className="lg:flex mx-auto w-5/6 items-center justify-center "
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* Main Header */}
            <div className="z-10 mt-32 lg:basis-3/5">
                {/* Headings */}
                <motion.div 
                    className="lg:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{ hidden: { opacity: 0, x:-50 }, visible: { opacity: 1, x:0 } }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 lg:before:content-evolvetext before:-left-20 before:z-[-1]">
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                    </div>
                    <p className="mt-8 text-sm lg:text-start">
                        Unrivaled Gym. Unparalleled Training Fitnesses Classes. Studios to get the Body Shapes that you dream of... Get Your Dream Body Now.
                    </p>
                </motion.div>
                
                 {/* Actions */}
                <motion.div 
                    className="mt-8 flex items-center gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{ hidden: { opacity: 0, x:-50 }, visible: { opacity: 1, x:0 } }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    <AnchorLink 
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>
           
            {/* Image */}
            <div className="flex basis-3/5 lg:z-10 lg:ml-40 mt-16 lg:justify-items-end">
                <img src={HomePageGraphic} alt="home-page-graphic" />
            </div>
        </motion.div>
        { /* Sponsors */}
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img src={SponsorRedBull} alt="sponsor-redbull" />
                        <img src={SponsorForbes} alt="sponsor-forbes" />
                        <img src={SponsorFortune} alt="sponsor-fortune" />
                    </div>
                </div>
            </div>

        )}
    </section>
    )
};

export default Home