"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Github from "../../public/Github.svg";
import GithubGreen from "../../public/GithubGreen.svg";
import Out from "../../public/Out.svg";
import OutGreen from "../../public/OutGreen.svg";

import JavaScript from "../components/ProjectTechs/JavaScript";
import Node from "../components/ProjectTechs/Node";
import Svelte from "./ProjectTechs/Svelte";
import Puppeteer from "./ProjectTechs/Puppeteer";
import Express from "./ProjectTechs/Express";
import Mongo from "./ProjectTechs/Mongo";
import ReactTech from "./ProjectTechs/React";
import Next from "./ProjectTechs/Next";
import TypeScript from "./ProjectTechs/TypeScript";
import Tailwind from "./ProjectTechs/Tailwind";

const techComponents: { [key: string]: React.ElementType } = {
    JavaScript: JavaScript,
    Node: Node,
    Svelte: Svelte,
    Puppeteer: Puppeteer,
    Express: Express,
    Mongo: Mongo,
    React: ReactTech,
    Next: Next,
    TypeScript: TypeScript,
    Tailwind: Tailwind,
};

interface ProjectCardProps {
    description: string;
    projectTitle: string;
    projectSubText: string;
    projectUrl: string;
    imageUrl: string;
    heading: string;
    subheading: string;
    projectTechs: string[];
    reverse?: boolean;
    isDimmed?: boolean;
    onHover: () => void;
    onHoverOut: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    description,
    projectTitle,
    projectSubText,
    projectUrl,
    imageUrl,
    heading,
    subheading,
    projectTechs,
    reverse,
    isDimmed,
    onHover,
    onHoverOut,
}) => {
    const [gitHovered, setGitHovered] = useState(false);
    const [outHovered, setOutHovered] = useState(false);

    return (
        <motion.div
            className={`z-10 flex ${
                reverse
                    ? "flex-col xl:flex-row-reverse"
                    : "flex-col xl:flex-row"
            } justify-evenly xl:w-full mt-12 xl:-mt-60`}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
        >
            <div className="w-full xl:w-[40vw] pl-2">
                <h2 className="text-center xl:text-left text-3xl font-[500] flex justify-center">
                    {heading}
                </h2>
                <p className="opacity-80 mt-2 flex justify-center">
                    {subheading}
                </p>
                {heading ? (
                    <div className="flex justify-center py-4">
                        <a
                            href="https://github.com/charleskay5"
                            className="px-2"
                            onMouseEnter={() => setGitHovered(true)}
                            onMouseLeave={() => setGitHovered(false)}
                        >
                            {gitHovered ? (
                                <GithubGreen width={50} />
                            ) : (
                                <Github width={50} />
                            )}
                        </a>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <motion.div
                className={`flex justify-center bg-gradient-to-b from-neutral-800 to-transparent rounded-2xl xl:hover:scale-[1.02] transition duration-500 ease-in-out ${
                    isDimmed ? "opacity-50" : "opacity-100"
                }`}
                onMouseEnter={onHover}
                onMouseLeave={onHoverOut}
            >
                <div className="w-[calc(100%-8px)] xl:w-[40vw] bg-neutral-900 rounded-2xl flex flex-col items-start justify-start align-top m-1">
                    <Image
                        src={imageUrl}
                        alt="Project Image"
                        width={1000}
                        height={1000}
                        className="w-full rounded-t-2xl object-top object-scale-down"
                    />
                    <div className="flex justify-between align-middle items-center w-full mt-6 px-4 xl:px-8">
                        <div className="flex flex-col">
                            <h2 className="font-[500] text-xl xl:text-3xl hover:text-green-300">
                                {projectTitle}
                            </h2>
                            <p className="font-[500] opacity-60 hover:text-green-300">
                                {projectSubText}
                            </p>
                        </div>
                        <div className="flex opacity-80">
                            <a
                                href="https://github.com/charleskay5"
                                className="px-2"
                                onMouseEnter={() => setGitHovered(true)}
                                onMouseLeave={() => setGitHovered(false)}
                            >
                                {gitHovered ? (
                                    <GithubGreen width={30} />
                                ) : (
                                    <Github width={30} />
                                )}
                            </a>
                            <a
                                href={`https://${projectUrl}`}
                                className="pl-2 pt-[2px] transform scale-x-[-1]"
                                onMouseEnter={() => setOutHovered(true)}
                                onMouseLeave={() => setOutHovered(false)}
                                
                            >
                                {projectUrl &&
                                    (outHovered ? (
                                        <OutGreen width={30} />
                                    ) : (
                                        <Out width={30} />
                                    ))}
                            </a>
                        </div>
                    </div>
                    <div className="flex w-full justify-center xl:justify-start xl:ml-6 my-2 scale-75 xl:scale-100">
                        {projectTechs.map((tech, index) => {
                            const TechComponent = techComponents[tech];
                            return TechComponent ? (
                                <TechComponent key={index} />
                            ) : null;
                        })}
                    </div>
                    <div className="w-[96%] h-[2px] bg-neutral-800 mx-auto my-2"></div>
                    <p className="m-4 opacity-80 text-lg px-2 xl:px-4 pb-4">
                        {description}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
