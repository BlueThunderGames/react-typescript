import {HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/20/solid'
import { BenefitType, SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import Benefit from "@/scenes/benefits/Benefit"
import { motion } from "motion/react";
import HText from '@/shared/HText.tsx';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Top of the line equipment and facilities to cater to all your fitness needs."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Fusce vestibulum, elit sit amet tincidunt ultr"
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const Benefits = ({setSelectedPage}: Props) => {

  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* Header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5}}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{ hidden: { opacity: 0, x:-50 }, visible: { opacity: 1, x:0 } }}
            >
                <HText children="MORE THAN JUST A GYM"></HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </motion.div>
            {/* Benefits */}
            <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/* Graphics and Description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">

                {/* Graphic */}
                <img 
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                />

                {/* Description */}
                <div>

                    {/* Title */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <div>
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="my-5">Lorem ipsum odor amet, consectetuer adipiscing elit. Convallis laoreet condimentum bibendum scelerisque maecenas tellus urna porta. Fames facilisi litora tincidunt fames habitasse proin lobortis mattis? Scelerisque elit ut eget ridiculus felis penatibus et justo. Cubilia varius purus hendrerit rhoncus quam hac.</p>
                        <p className="mb-5">Enim commodo nascetur sem ante in suspendisse volutpat euismod. Mus volutpat etiam feugiat euismod consectetur at proin morbi. Lobortis vivamus nunc ultrices maecenas, urna risus. Non lectus congue sollicitudin litora et blandit class. Conubia mollis hendrerit aptent dui cras.</p>
                    </div>

                    {/* Button */}
                    <div className="relative mt-16">
                        <div className="before:absoltue before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        
    </section>
  )
}

export default Benefits