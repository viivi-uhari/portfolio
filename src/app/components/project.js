'use client';

import styles from '@/app/ui/projects.module.css';
import { useRef } from 'react';
import { Titan_One, Days_One, Noto_Sans } from 'next/font/google'
import Image from 'next/image';
import useListenToResize from '../hooks/listenToResize';

const titanOne = Titan_One({ weight: '400', subsets: ['latin'] });
const daysOne = Days_One({ weight: '400', subsets: ['latin'] });
const notoSans = Noto_Sans({ weight: '300', subsets: ['latin'] });
const notoSansH3 = Noto_Sans({ weight: '600', subsets: ['latin'] });

function ProjectLayout1({project}) {
  return (
    <div className={styles['project-layout-1']}>
      <div className={styles['image-technologies']}>
        { project.image &&
          <Image
            src={`/images/${project.image}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: project.imageWidth, height: project.imageHeight }}
            className={styles['project-image']}
            alt=""
            placeholder="blur"
            blurDataURL={`/images/${project.image}`}
          />
        }
        <div className={styles['technologies-option1']}>
        { project.technologies.map((technology, index) => {
          return <p key={index} className={`${styles['technology']} ${daysOne.className}`}>{
            screenWidth < 550 && project.shortTechnologies ? project.shortTechnologies[index] : technology
          }</p>
        }) }
        </div>
      </div>
      <div className={styles['project-text']}>
        <h3 className={titanOne.className}>{project.title}</h3>
        <p className={notoSans.className}>{project.description}</p>
      </div>
    </div>
  )
};

function ProjectLayout2({project, screenWidth}) {
  return (
    <div className={`${styles['project-layout-2']} ${project.layout === 'option1' ? styles['extra'] : ''}`}>
    { project.image &&
      <Image
        src={`/images/${project.image}`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100vw', height: 'auto' }}
        className={styles['project-image']}
        alt=""
        placeholder="blur"
        blurDataURL={`/images/${project.image}`}
      />
    }
    <div className={styles['project-text']}>
      <h3 className={titanOne.className}>{project.title}</h3>
      <p className={notoSans.className}>{project.description}</p>
      <div className={styles['line-separator']}/>
      <div className={styles['technologies-option2']} style={{ 
        gridTemplateColumns: screenWidth < 550 && project.shortGridColumns ? project.shortGridColumns : project.gridColumns, 
        gridTemplateRows: project.gridRows 
      }}>
      { project.technologies.map((technology, index) => {
        return <p key={index} className={`${styles['technology']} ${daysOne.className}`}>{
          screenWidth < 550 && project.shortTechnologies ? project.shortTechnologies[index] : technology
        }</p>
      })}
      </div>
      <div className={styles['line-separator']}/>
    </div>
  </div>
 )
};

export default function Project({project, projects, setProjects}) {

  const projectClass = `project-container`;

  const transition = () => {
    const oldProjects = JSON.parse(JSON.stringify(projects));
    oldProjects.forEach(otherProject => {
      if (project.id !== otherProject.id) {
        oldProjects[otherProject.id].isSelected = false;
        oldProjects[otherProject.id].isMoved = false;
      }
    });
    const oldValueMoved = oldProjects[project.id].isMoved;
    const oldValueSelected = oldProjects[project.id].isSelected;
    oldProjects[project.id].isMoved = !oldValueMoved;
    oldProjects[project.id].isSelected = !oldValueSelected;
    setProjects(oldProjects);

    if (buttonRef.current && !project.isSelected) {
      // Scroll the entire page to the images-background
      setTimeout(() => {
        buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
    if (projectRef.current && project.isSelected) {
      // Scroll the entire page to the images-background
      projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  };

  const projectRef = useRef(null);
  const buttonRef = useRef(null);

  /* Get the position of this pop up (so the button that opens this pop up),
     and use it to configure its position in the desktop view */
  const newWidth = useListenToResize(projectRef);

  return (
    <div ref={projectRef} className={`${styles[projectClass]} 
      ${project.isMoved ? styles['move-down'] : ''} 
      ${project.id % 2 === 0 ? styles['first-column'] : styles['second-column']}`}
      style={{ width: project.width, scrollMarginTop: project.scrollMarginTop}}
      >
        <p className={`${styles['date-text']} ${notoSans.className}`} style={{ position: project.datePosition, top: '23px', left: '25px' }}>
          {project.date}
        </p>
        { project.layout === 'option1' && <ProjectLayout1 project={project} /> }
        <ProjectLayout2 project={project} screenWidth={newWidth.width}/>
        <div className={styles['bottom-container']}>
         <div className={styles['project-links']}>
          { project.link &&
            <a className={daysOne.className} href={project.link} rel="noopener noreferrer" target='_blank'>
              View project
            </a>
          }
          { project.github &&
            <a className={daysOne.className} href={project.github} rel="noopener noreferrer" target='_blank'>
              GitHub
            </a>
          }
        </div>
        { project.images.length !== 0 &&
          <div className={styles['button-container']}>
            <p className={notoSans.className}>View gallery</p>
            <button ref={buttonRef} className={styles['see-more']} onClick={() => {
              transition();
            }}>
              <div className={`${styles['circle-background']} ${project.isSelected ? styles['move-down'] : ''}`}>
                <div className={`${styles['select-arrow']} ${project.isSelected ? styles['move-down'] : ''} `}/>
              </div>
            </button>
          </div>
        }
        </div>
      </div>
  )
}