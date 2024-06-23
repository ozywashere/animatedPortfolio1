import React, {useEffect} from 'react';
import {useInView} from "react-intersection-observer";
import {useActiveSection} from "@/context/active-section-context";
import type {SectionName} from "@/lib/type";


const UseSectionInView = (sectionName: SectionName, threshold = 0.75) => {
    const {ref, inView} = useInView({threshold})

    const {setActiveSection, timeOfLastClick} = useActiveSection()

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName])

    return {ref}
};

export default UseSectionInView;