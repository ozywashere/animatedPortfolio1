"use client"
import React, {useEffect} from 'react';
import SectionHeading from "@/components/section-heading";
import {projectsData} from "@/lib/data";
import Project from "@/components/project";

import useSectionInView from "@/lib/useSectionInView";


const Projects = () => {
    const {ref}=useSectionInView("Projects")
    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    );
};

export default Projects;




