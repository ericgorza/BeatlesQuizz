"use client"
import React from 'react'
import Link from "next/link"
import { Footer } from '../../_components/Footer';
import { Logo } from '../../_components/LogoTop';
import CardFinal from '../../_components/CardFinal';

import finalPageStyles from '../finalpagestyles.module.css'

const EndSreen = () => {
  return (
    <main className={finalPageStyles.screen} style={{ flex : 1 }}>
        <div className={finalPageStyles.container}>
            <div>
                <Logo />
            </div>
            <CardFinal topTitle="Você finalizou o jogo" topText="Você é um semi-beatlemaníco!">
                <p>Ouça as músicas impopulares!</p>
                <p>Pesquise sobre o produtor George Martin!</p>
                <p>Assista o filme Nowhere Boy!</p>
                <p>Leia sobre a banda Wings!</p>
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