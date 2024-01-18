'use client';

import styles from '@/app/ui/home.module.css';
import { useState, useRef, createRef } from 'react';
import { Oi, Noto_Sans } from 'next/font/google';
import Image from 'next/image';
import Project from './components/project';
import React from 'react';
import ImagesBackground from './components/imagesBackground';
import projectsInfo from './constants/projects';
import description from './constants/description';

const oi = Oi({ weight: '400', subsets: ['latin'] });
const notoSans = Noto_Sans({ weight: '300', subsets: ['latin'] });

export default function Home() {

  const [projects, setProjects] = useState(projectsInfo);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const projectRefs = useRef({});

  return (
    <main>
      <div className={styles['home-page-container']}>
        <div className={styles.header}>
          <div className={styles['heading-picture']}>
            <h1 className={oi.className}>
              Viivi<br/>Uhari
            </h1>
            <Image
              src="/images/myself.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: '170px' }}
              id={styles.myself}
              alt="My picture"
              placeholder="blur"
              blurDataURL={"/images/myself.png"}
            />
          </div>
          <p id={styles['description']} className={notoSans.className}>{description}</p>
        </div>
        <div className={styles['grid-projects']}>
          { projects.map((project, index) => {
            projectRefs.current[project.id] = projectRefs.current[project.id] || createRef();
            return project.id % 2 === 0 && project.id < 6 ? 
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
            project.id === 6 ? 
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
           : <React.Fragment key={`fragment-${index}`}></React.Fragment>
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
          <button id={styles['top-btn']} className='__className_2a725e' onClick={() => {
            window.scrollTo({top: 0, behavior: "smooth"});
          }}>TO TOP</button>
        </div>
      </div>
    </main>
  )
}
