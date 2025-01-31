import React from 'react'
import './styles.css'
import Nav from '@/components/header/Nav'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="fr" data-theme="dracula">
      <body  className="text-textmain bg-cover bg-no-repeat bg-right bg-fixed"
        style={{ backgroundImage: `url('/images/backgrounds/background-flipped.png')` }}>
        <div className=" bg-opacity-50 dark:bg-opacity-50">
          <header>
            <Nav/>
            </header>
          <main>{children}</main>
          <footer>{/* <MyFooter /> */}</footer>
        </div>
      </body>
    </html>
  )
}
