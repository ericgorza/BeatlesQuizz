import React from 'react'
import indexStyles from './style.module.css'

interface AlternativeProps {
    label: string;
    order: number;
}

export const Alternative = (props: AlternativeProps) => {
  return (
    <label className={indexStyles.label} tabIndex={0}>
        <input
            tabIndex={-1}
            type="radio"
            id={`alternative-${props.order}`}
            name="alternative"
            defaultValue={props.order}
            className={indexStyles.input}
            />
            {props.label}
    </label>
  )
}
