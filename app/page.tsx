import pageStyles from "./page.module.css"
import { Logo } from "./_components/LogoTop"
import { Footer } from "./_components/Footer"
import { Card } from "./_components/Card"
import Link from "next/link"

export default function Page() {
    return (
      <main className={pageStyles.screen} style={{ flex : 1 }}>
        <section className={pageStyles.container}>
          <Logo />
          <Card headerTitle="Teste suas habilidades">
            <p style={{marginBottom:"32px"}}>
              Teste os seus conhecimento sobre os Beatles e divirta-se.
            </p>
            <form>
              <input type="text" name="playerName" placeholder="Digite seu nome" />
              <Link href="/game">
                <div className="formButton-container">
                  <button>
                    <span>Jogar</span>
                  </button>
                </div>
              </Link>
            </form>
          </Card>
          <Footer />
        </section>
      </main>
    )
  }