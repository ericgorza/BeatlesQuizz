import cardStyles from "./card.module.css"

import React from 'react'

interface CardProps {
  headerTitle:string;
  children:React.ReactNode;
}

export const Card = (props) => {
  return (
    <div className={cardStyles.card}>
        <header className={cardStyles.cardHeader}>
            <h1 className={cardStyles.cardHeaderTitle}>{props.headerTitle}</h1>
        </header>
        <section className={cardStyles.cardBody}>
            {props.children}
        </section>
    </div>
  )
}
