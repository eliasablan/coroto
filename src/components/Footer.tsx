import React from 'react'
import Link from 'next/link'
import { getMenu } from '@/lib/shopify'
import { GrCodeSandbox } from 'react-icons/gr'
import { ModeToggle } from './ThemeButton'
// import { getSettings } from '@/sanity/queries'
// import { BelenaSVG } from './BelenaLogo'
// import DynamicSanityIcon from '@/components/DynamicSanityIcon'

export default async function Footer() {
  const menu = await getMenu('footer')
  // const settings = await getSettings()

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
        {/* <p className="py-2 text-sm">{settings?.footer}</p> */}

        {/* <div className="flex gap-x-4 py-2">
            {settings?.socials?.map((social) => (
              <Link
                key={social.rrss?.url}
                href={social.rrss?.url + social.username}
                className="transition-all duration-300 ease-in hover:opacity-70"
              >
                <DynamicSanityIcon
                  icon={social.rrss?.icon}
                  className="mr-2 h-5 w-5"
                />
              </Link>
            ))}
          </div> */}
      </div>
    </footer>
  )
}
