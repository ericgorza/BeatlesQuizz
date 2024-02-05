"use client"
import React from 'react'
import Link from "next/link"
import { Footer } from '../../_components/Footer';
import { Logo } from '../../_components/LogoTop';
import CardFinal from '../../_components/CardFinal';

import finalPageStyles from "../finalpagestyles.module.css"

const EndSreen = () => {
  return (
    <main className={finalPageStyles.screen} style={{ flex : 1 }}>
        <div className={finalPageStyles.container}>
            <div>
                <Logo />
            </div>
            <CardFinal topTitle="Você finalizou o jogo" topText="Você precisa melhorar! Aqui vão dicas:">
                <p>Assista o documentário Get Back!</p>
                <p>Leia alguma biografia!</p>
                <p>Assista "Eight Days a Week"</p>
                <p>Tente entender o motivo por trás das letras!</p>
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