import React from 'react'
import Link from 'next/link'
import { getMenu } from '@/lib/shopify'
import { GrCodeSandbox } from 'react-icons/gr'
import { ModeToggle } from './ThemeButton'

export default async function Footer() {
  const menu = await getMenu('footer')

  return (
    <footer className="container my-8">
      <div className="flex flex-col items-center text-center">
        <Link
          href="/"
          className="transition-all duration-300 ease-out hover:text-accent"
        >
          <GrCodeSandbox size={35} />
        </Link>

        <ul className="my-8 flex flex-col flex-wrap justify-between gap-x-8 sm:my-2 md:flex-row">
          {menu.length &&
            menu.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className="p-2 text-sm font-medium leading-10 underline-offset-4 hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          <li>
            <ModeToggle className="rounded-full" />
          </li>
        </ul>
      </div>

      <hr className="border-px" />

      <div className="my-8 flex flex-col items-center sm:my-2 sm:flex-row sm:justify-between">
        <p className="py-2 text-sm">Coroto Store</p>

        {/* 'RRSS icons' */}
        <div className="flex gap-x-4 py-2">
          <div className="ml-auto flex items-center gap-3">
            <a
              className="text-lg hover:opacity-80"
              target="_blank"
              href="mailto:eliasgui32@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="224 56 128 144 32 56"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></polyline>
                <path
                  d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
                <line
                  x1="110.5"
                  y1="128"
                  x2="34.5"
                  y2="197.7"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <line
                  x1="221.5"
                  y1="197.7"
                  x2="145.5"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
              </svg>
            </a>
            <a
              className="text-lg hover:opacity-80"
              target="_blank"
              href="https://twitter.com/eliasablan"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
              </svg>
            </a>
            <a
              className="text-lg hover:opacity-80"
              target="_blank"
              href="https://instagram.com/eliasablan"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <circle
                  cx="128"
                  cy="128"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="16"
                ></circle>
                <rect
                  x="36"
                  y="36"
                  width="184"
                  height="184"
                  rx="48"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></rect>
                <circle cx="180" cy="76" r="12"></circle>
              </svg>
            </a>
            <a
              className="text-lg hover:opacity-80"
              target="_blank"
              href="https://linkedin.com/in/eliasablan"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <rect
                  x="36"
                  y="36"
                  width="184"
                  height="184"
                  rx="8"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></rect>
                <line
                  x1="120"
                  y1="112"
                  x2="120"
                  y2="176"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <line
                  x1="88"
                  y1="112"
                  x2="88"
                  y2="176"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <path
                  d="M120,140a28,28,0,0,1,56,0v36"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
                <circle cx="88" cy="80" r="12"></circle>
              </svg>
            </a>
            <a
              className="text-lg hover:opacity-80"
              target="_blank"
              href="https://github.com/eliasablan"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M84,240a23.9,23.9,0,0,0,24-24V168"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
                <path
                  d="M172,240a23.9,23.9,0,0,1-24-24V168"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
                <path
                  d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
                <path
                  d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
                <path
                  d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
