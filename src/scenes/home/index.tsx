import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return <section 
    id="home" 
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        { /* Image and Main Header */}
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
            {/* Main Header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* Headings */}
                <div className="md:-mt-20">
                    <div className="relative">
                        <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]">
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                    </div>
                    <p className="mt-8 text-sm md:text-start">
                        Unrivaled Gym. Unparalleled Training Fitnesses Classes. Studios to get the Body Shapes that you dream of... Get Your Dream Body Now.
                    </p>
                </div>
                
                 {/* Actions */}
                <div className="mt-8 flex items-center gap-8">
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    <AnchorLink 
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>
           
            {/* Image */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 mt-16 md:justify-items-end">
                <img src={HomePageGraphic} alt="home-page-graphic" />
            </div>
        </div>
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
};

export default Home