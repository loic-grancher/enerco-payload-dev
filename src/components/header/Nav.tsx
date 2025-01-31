import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Image src="/logos/enerco/logo_inline_white.png" alt="" width={120} height={70} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/chaudieres">Chaudières</Link>
          </li>
          <li>
            <Link href="/pompes-a-chaleur">Pompes à chaleur</Link>
          </li>
          <li>
            <Link href="climatisation">Climatisation</Link>
          </li>
          <li>
            <Link href="plomberie">Plomberie</Link>
          </li>
          <li>
            <details>
              <summary>Actus</summary>
              <ul className="p-2">
                <li>
                  <Link href="/actus">Réalisations</Link>
                </li>
                <li>
                  <Link href="/articles">Articles</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/about">A propos</Link>
          </li>
          <li>
            <Link href="/contact">Contacts</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-secondary">Nous contacter</a>
      </div>
    </div>
  )
}
