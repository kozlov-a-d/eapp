import React from 'react';
// import styles from './Block.module.scss';

export interface BlockProps {
    children: JSX.Element | JSX.Element[];
    h2?: string;
}

export default function Block(props: BlockProps): JSX.Element {
    return (
        <div className="block">
            <div className="block__container">
                <div className="block__header">
                    <h2>{props.h2}</h2>
                </div>
                <div className="block__content">{props.children}</div>
            </div>
        </div>
    );
}
