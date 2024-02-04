import React from 'react'
import { LogoBottom } from '../LogoBottom'
import footerStyles from "./footer.module.css"

export const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <p>
          Desenvolvido por Eric Gorza
        </p>
      </div>
    </footer>
  )
}
