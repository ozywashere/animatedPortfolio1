"use client";
import React from 'react';
import SectionHeading from "@/components/section-heading";
import useSectionInView from "@/lib/useSectionInView";
import {skillsData} from "@/lib/data";
import {motion} from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};
const Skills = () => {
    const {ref} = useSectionInView("Skills");
    return (
        <section ref={ref} className="mt-28 mb-28 scroll-mt-28 max-w-[52rem] text-center sm:mb-40" id="skills">
            <SectionHeading>
                Skills
            </SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        className="bg-white borderBlack rounded-xl px-5 py-3 "
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{
                            once: true,
                        }}
                        custom={index}>
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;