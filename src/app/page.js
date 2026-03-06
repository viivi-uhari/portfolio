'use client';

import styles from '@/app/ui/home.module.css';
import { useState, useRef, createRef } from 'react';
import { Oi, Titan_One, Noto_Sans } from 'next/font/google';
import Link from 'next/link'
import Image from 'next/image';
import Project from './components/project';
import React from 'react';
import ImagesBackground from './components/imagesBackground';
import projectsInfo from './constants/projects';
import {homeDescription} from './constants/descriptions';

const oi = Oi({ weight: '400', subsets: ['latin'] });
const titanOne = Titan_One({ weight: '400', subsets: ['latin'] });
const notoSans = Noto_Sans({ weight: '300', subsets: ['latin'] });

export default function Home() {

  const [projects, setProjects] = useState(projectsInfo);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const projectRefs = useRef({});

  return (
    <main>
      <div className={styles['page-container']}>
        <div className={styles['home-container']}>
          <div className={styles['header-name']}>
            <h1 className={oi.className}>
              Viivi<br/>Uhari
            </h1>
            <h2 className={titanOne.className}>
              MASTER OF SCIENCE<br/>(TECHNOLOGY)
            </h2>
          </div>
          <div className={styles['header-description']}>
            <p id={styles['description']} className={notoSans.className}>{homeDescription}</p>
            <Link id={styles['projects-btn']} className={titanOne.className} href="/projects">
              PROJECTS
              <svg id={styles['arrow']} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7071 8.07112C15.0976 7.6806 15.0976 7.04743 14.7071 6.65691L8.34315 0.292946C7.95262 -0.0975785 7.31946 -0.0975785 6.92893 0.292946C6.53841 0.68347 6.53841 1.31664 6.92893 1.70716L12.5858 7.36401L6.92893 13.0209C6.53841 13.4114 6.53841 14.0446 6.92893 14.4351C7.31946 14.8256 7.95262 14.8256 8.34315 14.4351L14.7071 8.07112ZM0 7.36401V8.36401H14V7.36401V6.36401H0V7.36401Z"/>
              </svg>
            </Link>
          </div>
          <div className={styles['image-container']}>
            <Image
              src="/images/myself.png"
              width={0}
              height={0}
              sizes="100vw"
              id={styles.myself}
              alt="My picture"
              placeholder="blur"
              blurDataURL={"/images/myself.png"}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
