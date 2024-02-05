import React from 'react'
import cardfinalStyles from "./cardfinal.module.css"

const CardFinal = (props) => {
  return (
    <div className={cardfinalStyles.card}>
        <header className={cardfinalStyles.cardHeader}>
            <h1 className={cardfinalStyles.cardHeaderTitle}>{props.topTitle}</h1>
            <p className={cardfinalStyles.cardHeaderTitle}>{props.topText}</p>
        </header>
        <section className={cardfinalStyles.cardBody}>
            {props.children}
        </section>
    </div>
  )
}

export default CardFinal;