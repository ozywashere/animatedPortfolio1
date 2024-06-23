"use client";
import React from 'react';
import SectionHeading from "@/components/section-heading";
import UseSectionInView from "@/lib/useSectionInView";

import {FaPaperPlane} from "react-icons/fa";

import {motion} from "framer-motion";

const Contact = () => {
    const {ref} = UseSectionInView("Contact");


    return (
        <motion.section
            ref={ref}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            viewport={{once: true}}
            id="contact" className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] ">
            <SectionHeading>Contact Me</SectionHeading>
            <div ref={ref} className="flex flex-col items-center justify-center mt-20">
                <p className="text-center text-gray-600 -mt-6">
                    Please contact me directly at
                    <a className="underline mx-2" href="mailto:example@gmail.com">
                        example@gmail.com
                    </a>
                    or through this form.
                </p>
                <form className="w-full mt-10 flex-col flex">
                    <input type="email"
                           placeholder="Your Email"
                           className="h-14 rounded-lg border border-black/10 px-4"
                           required={true}
                           maxLength={500}

                    />
                    <textarea
                        placeholder="Your Message"
                        className="h-52 my-3  p-4 borderBlack text-gray-950"
                        required={true}
                        maxLength={500}
                    />
                    <button type="submit"
                            className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none flex items-center justify-center gap-2 group hover:bg-gray-950 active:scale-105 hover:scale-110 forucs:scale-110 transition-all ">
                        Send
                        <FaPaperPlane
                            className="text-xs opacity-70 transition-all group-hover:-translate-y-2 duration-300"/>
                    </button>
                </form>
            </div>

        </motion.section>
    );
};

export default Contact;