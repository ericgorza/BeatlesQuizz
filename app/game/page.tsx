// /pages/game.js or /pages/game.tsx
// "image":"https://place-hold.it/1366x768" //
"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

import { Card } from '../_components/Card';
import { Footer } from '../_components/Footer';
import { Logo } from '../_components/LogoTop';
import { Alternative } from '../_components/Alternative';

import pageStyles from '../page.module.css';

import config from '../config.json'

const questions = config.questions || []

const answerStatesList = {
  DEFAULT:"",
  SUCCESS:"success",
  ERROR:"error"
}

const GameScreen = () => {

  const router = useRouter();
  let indiceAleatorio = Math.floor(Math.random() * config.mensagens.correct.length)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answerState, setAnswerState] = useState(answerStatesList.DEFAULT)
  const [userAnswers, setUserAnswers] = useState([])
  const questionNumber = currentQuestion + 1
  const question = questions[currentQuestion]
  const isLastQuestion = questionNumber === questions.length

  useEffect(() => {
    if (isLastQuestion) {
      const numeroDeTrue = userAnswers.filter(item => item === true).length;
      const numeroDeFalse = userAnswers.filter(item => item === false).length;
      alert("Você concluiu o teste." + ` Total de acertos: ${numeroDeTrue}` + ` Total de erros: ${numeroDeFalse}`);
      router.push('/');
      setCurrentQuestion(0);
    }
  }, [userAnswers]);

  function submitForm(event) {
    event.preventDefault();
    const $questionInfo = event.target as HTMLFormElement;
    const formData = new FormData($questionInfo)
    const {alternative} = Object.fromEntries(formData.entries())
    const answer = question.answer
    const isCorrectAnswer = alternative === answer;


    if (isCorrectAnswer){
      setUserAnswers([...userAnswers, true])
      setAnswerState(answerStatesList.SUCCESS)
      }
    else if(!isCorrectAnswer){
      setUserAnswers([...userAnswers, false])
      setAnswerState(answerStatesList.ERROR)
      }
    if(!isLastQuestion){
      setTimeout(()=> {
        setCurrentQuestion(currentQuestion + 1)
        setAnswerState(answerStatesList.DEFAULT)}
        ,1000)
  }}

  return (
    <main className={pageStyles.screen} style={{ flex: 1, backgroundImage: `url("/images/${question.image}")`, }}>
      <section className={pageStyles.container}>
        <Logo />
        <Card headerTitle={`Pergunta ${questionNumber} de ${questions.length}`}>
          <h1>{question.title}</h1>
          <p>{question.description}</p>
          <div className='form-container'>
            <form
              onSubmit={submitForm}
              >
              {question.alternativas.map((alternativa, index) => (
                <Alternative key={alternativa + index} order={index} label={alternativa}/>
              ))}
              {answerState == answerStatesList.DEFAULT &&
              <div className='button-container'>
                <button className='button-submit'>
                  <span>Confirmar</span>
                </button>
              </div>
              }
              {answerState == answerStatesList.SUCCESS &&
                <div style={{textAlign:"center"}}>
                  {config.mensagens.correct[indiceAleatorio]}
                </div>
                }
              {answerState == answerStatesList.ERROR &&
                <div style={{textAlign:"center"}}>
                  {config.mensagens.wrong[indiceAleatorio]}
                </div>
                }
            </form>
          </div>
        </Card>
        <Footer />
      </section>
    </main>
  );
};

export default GameScreen;
