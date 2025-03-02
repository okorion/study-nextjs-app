'use client';

import { useRef, useState } from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const t = useTranslations('ImagePicker'); // ✅ 다국어 번역 적용
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  const handlePickClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>{t('noImage')}</p>}
          {pickedImage && <Image src={pickedImage} alt={t('altText')} fill />}
        </div>
        <input
          ref={imageInput}
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept=".jpg,.jpeg,.png"
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handlePickClick}>
          {t('pickImage')}
        </button>
      </div>
    </div>
  );
}
