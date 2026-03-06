'use client';

import styles from '@/app/ui/papers.module.css';
import { Oi, Titan_One, Noto_Sans } from 'next/font/google';
import React from 'react';
import { useState } from 'react';
import {papersDescription} from '../constants/descriptions';
import papersInfo from '../constants/papers';
import Paper from '../components/paper';

const oi = Oi({ weight: '400', subsets: ['latin'] });
const titanOne = Titan_One({ weight: '400', subsets: ['latin'] });
const notoSans = Noto_Sans({ weight: '300', subsets: ['latin'] });

export default function Papers() {

  const [papers, setPapers] = useState(papersInfo);

  return (
    <main>
      <div className={styles['page-container']}>
          <div className='header-text'>
            <h2 className={notoSans.className}>
              My Academic Papers
            </h2>
            <p id={styles['description']} className={notoSans.className}>{papersDescription}</p>
        </div>
        <div className={styles['column-papers']}>
          {papers.map((paper, index) => {
            return (
              <React.Fragment key={`paperContainer-${paper.id}-${index}`}>
                <Paper 
                  key={paper.id} 
                  paper={paper}
                  papers={papers}
                  setPapers={setPapers}
                />
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
