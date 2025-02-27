import { SelectedPage } from "@/shared/types";
import {motion} from "motion/react";
import {useForm} from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (selectedPage: SelectedPage) => void;
}

function ContactUs({setSelectedPage}: Props) {
    const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5`;
    const {
        register,
        trigger, 
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();

        if(!isValid)
        {
            e.preventDefault();
        }
    };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
            <motion.div className="lg:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{ hidden: { opacity: 0, x:-50 }, visible: { opacity: 1, x:0 } }}
            >
                <HText>
                    <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                </HText>
                <p className="my-5 ">
                    Congue at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien fauc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </motion.div>

            {/* Form and Image */}
            <div className="mt-10 justify-between gap-8 lg:flex">
                <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{ hidden: { opacity: 0, y:50 }, visible: { opacity: 1, y:0 } }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        method="POST"
                        action="https://formsubmit.co/anthonypgrossoo@gmail.com"
                    >
                        <input 
                            className={inputStyles}
                            type="text"
                            placeholder="NAME"
                            {...register("name", { required: true, maxLength: 100 })}
                        />
                        {errors.name && (<p className="-mt-2 mb-2 text-primary-500">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "This field cannot exceed 100 characters."}
                        </p>)}
                        <input 
                            className={inputStyles}
                            type="email"
                            placeholder="EMAIL"
                            {...register("email", { required: true, maxLength: 100, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && (<p className="-mt-2 mb-2 text-primary-500">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "maxLength" && "This field cannot exceed 100 characters."}
                            {errors.email.type === "pattern" && "Please enter a valid email address."}
                        </p>)}
                        <textarea 
                            className={inputStyles}
                            rows={4}
                            cols={50}
                            placeholder="MESSAGE"
                            {...register("message", { required: true, maxLength: 2000 })}
                        />
                        {errors.message && (<p className="-mt-2 mb-2 text-primary-500">
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "This field cannot exceed 2000 characters."}
                        </p>)}
                        <button 
                            type="submit"
                            className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                        >
                            SUBMIT
                        </button>
                    </form>
                </motion.div>
                <motion.div
                    className="relative mt-16 basis-2/5 lg:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{ hidden: { opacity: 0, y:50 }, visible: { opacity: 1, y:0 } }}
                >
                    <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                        <img 
                            className="w-full"
                            src={ContactUsPageGraphic}
                            alt="contact-us-page-graphic"
                        />
                    </div>
                    
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs