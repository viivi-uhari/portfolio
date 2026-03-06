'use client';

import styles from '@/app/ui/projects.module.css';
import { useState, useRef, createRef } from 'react';
import { Oi, Titan_One, Noto_Sans } from 'next/font/google';
import Image from 'next/image';
import Project from '../components/project';
import React from 'react';
import ImagesBackground from '../components/imagesBackground';
import projectsInfo from '../constants/projects';
import {projectsDescription} from '../constants/descriptions';

const oi = Oi({ weight: '400', subsets: ['latin'] });
const titanOne = Titan_One({ weight: '400', subsets: ['latin'] });
const notoSans = Noto_Sans({ weight: '300', subsets: ['latin'] });

export default function Projects() {

  const [projects, setProjects] = useState(projectsInfo);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const projectRefs = useRef({});

  return (
    <main>
      <div className={styles['page-container']}>
        <div className='header-text'>
          <h2 className={notoSans.className}>
            My Programming and Design Projects
          </h2>
          <p id={styles['description']} className={notoSans.className}>{projectsDescription}</p>
        </div>
        <div className={styles['grid-projects']}>
          { projects.map((project, index) => {
            projectRefs.current[project.id] = projectRefs.current[project.id] || createRef();
            return project.id % 2 === 0 ? /* && project.id < 8 */
              <React.Fragment key={`projectContainer-${project.id}-${index}`}>
                <div className={styles['project-row']}>
                  <Project 
                    key={project.id} 
                    project={project}
                    projects={projects}
                    setProjects={setProjects}
                    reference={projectRefs.current[project.id]} 
                    setSelectedProjectId={setSelectedProjectId}
                  />
                  { projects[project.id + 1] &&
                    <Project 
                      key={projects[project.id + 1].id} 
                      project={projects[project.id + 1]} 
                      projects={projects}
                      setProjects={setProjects}
                      reference={projectRefs.current[project.id + 1]} 
                      setSelectedProjectId={setSelectedProjectId}
                  />
                  }
                </div>
                <ImagesBackground key={'back' + index} project={project} ></ImagesBackground>
                { projects[project.id + 1] &&
                  <ImagesBackground key={'back' + index + 1} project={projects[project.id + 1]} ></ImagesBackground>
                }
              </React.Fragment>
            : 
            <React.Fragment key={`fragment-${index}`}></React.Fragment>

            {/* project.id === 8 ? 
            <React.Fragment key={`projectContainer-${project.id}-${index}`}>
              <div className={styles['project-row']}>
                <Project 
                  key={project.id} 
                  project={project}
                  projects={projects}
                  setProjects={setProjects}
                  reference={projectRefs.current[project.id]} 
                  setSelectedProjectId={setSelectedProjectId}
                />
                <div className={styles['project-column']}>
                  { projects[project.id + 1] &&
                    <Project 
                      key={projects[project.id + 1].id} 
                      project={projects[project.id + 1]} 
                      projects={projects}
                      setProjects={setProjects}
                      reference={projectRefs.current[project.id + 1]} 
                      setSelectedProjectId={setSelectedProjectId}
                  />
                  }
                  { projects[project.id + 2] &&
                    <Project 
                      key={projects[project.id + 2].id} 
                      project={projects[project.id + 2]} 
                      projects={projects}
                      setProjects={setProjects}
                      reference={projectRefs.current[project.id + 2]} 
                      setSelectedProjectId={setSelectedProjectId}
                  />}
                </div>
              </div>
            </React.Fragment> 
            : */}
            
          })}
        </div>
        <div className={styles['column-projects']}>
          {projects.map((project, index) => {
            return (
              <React.Fragment key={`projectContainer-${project.id}-${index}`}>
                <Project 
                  key={project.id} 
                  project={project}
                  projects={projects}
                  setProjects={setProjects}
                  reference={projectRefs.current[project.id]} 
                  setSelectedProjectId={setSelectedProjectId}
                />
                <ImagesBackground key={'back' + index} project={project} ></ImagesBackground>
              </React.Fragment>
          )})}
        </div>
        <div className={styles['end-container']}>
          <button id='top-btn' className={titanOne.className} onClick={() => {
            window.scrollTo({top: 0, behavior: "smooth"});
          }}>BACK TO TOP</button>
        </div>
      </div>
    </main>
  )
}
