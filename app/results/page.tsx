"use client"
import React from 'react'
import Link from "next/link"
import { Footer } from '../_components/Footer';
import { Logo } from '../_components/LogoTop';
import CardFinal from '../_components/CardFinal';

import finalPageStyles from './finalpagestyles.module.css'

const EndSreen = () => {
  return (
    <main className={finalPageStyles.screen} style={{ flex : 1 }}>
        <div className={finalPageStyles.container}>
            <div>
                <Logo />
            </div>
            <CardFinal topTitle="Você finalizou o jogo" topText="Considerando o seu score você é um beatlemanico.">
                <p>Os beatles com certeza foram a maior banda do mundo!</p>
                <p>Com certeza temos muito o que aprender com eles!</p>
                <p>Você conhece a carreira solo de George Harrisson?</p>
                <p>Recomendo que assista o documentário "Get Back"</p>
                <Link href="/game">
                    <button>
                        <span>Jogar Novamente</span>
                    </button>
                </Link>
            </CardFinal>
            <Footer/>
        </div>
    </main>
  )
}

export default EndSreen;