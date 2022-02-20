import React from 'react';
import className from 'classnames/bind';
import style from './style.module.scss';

const cx = className.bind(style);

export default function PreviewCard() {
    return (
        <>
            <div className={cx('cardWrap')}>
              this is card
            </div>
        </>
    )
};