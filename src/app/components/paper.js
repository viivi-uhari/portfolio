'use client';

import styles from '@/app/ui/papers.module.css';
import { useState, useRef } from 'react';
import { Titan_One, Days_One, Noto_Sans } from 'next/font/google'
import Image from 'next/image';
import useListenToResize from '../hooks/listenToResize';

const titanOne = Titan_One({ weight: '400', subsets: ['latin'] });
const daysOne = Days_One({ weight: '400', subsets: ['latin'] });
const notoSans = Noto_Sans({ weight: '300', subsets: ['latin'] });
const notoSansH4 = Noto_Sans({ weight: '500', subsets: ['latin'] });


export default function Paper({paper, papers, setPapers}) {

  const [showFullAbstract, setShowFullAbstract] = useState(false);
  const buttonRef = useRef(null);

  const transition = () => {
    if (buttonRef.current && !paper.isSelected) {
      // Scroll the entire page to the images-background
      setTimeout(() => {
        buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
    if (paperRef.current && paper.isSelected) {
      // Scroll the entire page to the images-background
      paperRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  };


  return (
    <div className={`${styles['paper-container']}
      ${paper.id % 2 === 0 ? styles['first-column'] : styles['second-column']}`}
      style={{ width: paper.width, scrollMarginTop: paper.scrollMarginTop}}
      >
        <div className={styles['top-info']}>
          <p className={`${styles['date-text']} ${notoSans.className}`} style={{ position: paper.datePosition, top: '23px', left: '25px' }}>
          {paper.date}
          </p>
          { paper.typeTitle &&
            <p className={`
                ${styles['paper-type']} 
                ${styles[paper.typeTitle === "Master's Thesis" ? 'masters' : 'bachelors']}
                ${notoSans.className}
              `}>
              {paper.typeTitle}
            </p>
          }
        </div>
        
            <div className={styles['paper-layout']}>
        { paper.image &&
          <Image
            src={`/images/${paper.image}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: paper.imageWidth, height: paper.imageHeight }}
            className={styles['paper-image']}
            alt=""
            placeholder="blur"
            blurDataURL={`/images/${paper.image}`}
          />
        }
      <div className={styles['paper-text']}>
        <div className={styles['paper-titles']}>
          <h3 className={titanOne.className}>{paper.title}</h3>
          <h4 className={notoSansH4.className}>{paper.secondaryTitle}</h4>
        </div>
        <div>
           <p className={notoSans.className}>{paper.abstract}</p>
          <p className={`${notoSans.className} ${styles.abstract} ${
            showFullAbstract ? styles.full : ''
          }`}>
            {paper.abstractExtra}
          </p>
        </div>
        { paper.abstractExtra &&
          <button ref={buttonRef} className={styles['button-container']} onClick={() => {
                setShowFullAbstract(!showFullAbstract);
              }}>
              <p className={notoSans.className}>{showFullAbstract ? 'Show less' : 'Show more'}</p>
                <div className={`${styles['select-arrow']} ${showFullAbstract ? styles['move-down'] : ''} `}/>
              
            </button>
        }
      </div>
    </div>
        <div className={styles['bottom-container']}>
         <div className={styles['paper-links']}>
          { paper.link &&
            <a className={daysOne.className} href={paper.link} rel="noopener noreferrer" target='_blank'>
              View paper
            </a>
          }
        </div>
        </div>
      </div>
  )
}