'use client'

import styles from '@/app/ui/home.module.css';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ImagesBackground({project}) {

  const imagesBackgroundRef = useRef(null);

  /*
  useEffect(() => {
    if (imagesBackgroundRef.current && !project.isSelected) {
      // Scroll the entire page to the images-background
      imagesBackgroundRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });*/

  return (
    <div ref={imagesBackgroundRef} className={`${styles['images-background']} ${project.isSelected ? styles['visible'] : ''}`}>
      <div className={styles['images-content']}>
        <div className={styles['images-border']} style={{left: 0}}/>
        { project.images.map((image, index) => {
          return <Image
            key={index}
            src={`/images/${image.src}`}
            width={0}
            height={0}
            sizes="100vw"
            alt="Logo of Inclusive Helsinki"
            placeholder="blur"
            blurDataURL={`/images/${image.src}`}
            style={{position: 'absolute', width: image.width, top: image.top, left: image.left}}
          />
        })}
        <div className={styles['images-border']} style={{left: 1395}}/>
      </div>
    </div>
  )
}