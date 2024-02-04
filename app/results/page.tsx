"use client"
import React from 'react'
import Link from "next/link"
import { Footer } from '../_components/Footer';
import { Logo } from '../_components/LogoTop';

const EndSreen = () => {
  return (
    <main>
        <div className='congrats-container'>
            <div>
                <Logo />
            </div>
            <div>
                <h1>Voce finalizou o jogo.</h1>
                <p>De acordo com o seu Score, você é um beatlemaniac</p>
                <Link href="/game">
                    <button>
                        <span>Jogar Novamente</span>
                    </button>
                </Link>
            </div>
        </div>
        <Footer/>
    </main>
  )
}

export default EndSreen;