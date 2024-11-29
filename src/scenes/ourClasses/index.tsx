import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "motion/react";
import HText from "@/shared/HText";
import Class from "./Class";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget est eget.",
        image: image1
    },
    {
        name: "Yoga Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget est eget.",
        image: image2
    },
    {
        name: "Ab Core Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget est eget.",
        image: image3
    },
    {
        name: "Adventure Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget est eget.",
        image: image4
    },
    {
        name: "Fitness Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget est eget.",
        image: image5
    },
    {
        name: "Training Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget est eget.",
        image: image6
    }
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {

    var settings = {
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40 overflow-x-hidden">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{ hidden: { opacity: 0, x:-50 }, visible: { opacity: 1, x:0 } }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                       Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facillisis metus nibh. Rhoncus sit amet pharetra, sit amet. 
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 mx-auto">
                <Slider {...settings}>
                    {classes.map((item: ClassType, index) => (
                        <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </Slider>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses