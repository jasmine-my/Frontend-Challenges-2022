import React from 'react';
import className from 'classnames/bind';
import style from './style.module.scss';
import Image from "next/image";
import logo from '../../logo.svg';
import thumbNail from "../../assets/images/previewCard/image-equilibrium.jpg";

const cx = className.bind(style);

interface IPreviewCardProps {
  title: string,
  description: string,
  price: number,
  leftDays: number,
  producerName: string,
}

export default function PreviewCard({title, description, price, leftDays, producerName}:IPreviewCardProps) {
  return (
    <div className={cx('background')}>
      <div className={cx('cardWrap')}>
        <div className={cx('image')}></div>
        <div className={cx('cardSubs')}>
          <p className={cx('cardTitle')}>{title}</p>
          <p className={cx('description')}>{description}</p>
          <div className={cx('infoBox')}>
            <div className={cx('unit')}>
              <image></image> {price} ETH
            </div>
            <div className={cx('leftDays')}>
              <image></image> {leftDays} days left
            </div>
          </div>
        </div>
        <hr className={cx('hr')} />
        <div className={cx('producerInfoBox')}>
          <image></image> Creation of <span className={cx('producerName')}>{producerName}</span>
        </div>
      </div>
      Challenge by Frontend Mentor. Coded by ysecode.
  </div>
)
};
