import React from "react";
import Link from "next/link";
import { getMenu } from "@/lib/shopify";
import { LuBoxes } from "react-icons/lu";
import { ModeToggle } from "./ThemeButton";
// import { getSettings } from '@/sanity/queries'
// import { BelenaSVG } from './BelenaLogo'
// import DynamicSanityIcon from '@/components/DynamicSanityIcon'

export default async function Footer() {
  const menu = await getMenu("footer");
  // const settings = await getSettings()

  return (
    <footer className="mx-auto mb-2 max-w-7xl px-6 xl:px-0">
      <div className="mx-auto max-w-7xl px-0 pt-6">
        <div className="flex flex-col items-center text-center">
          <Link
            href="/"
            className="hover:text-accent transition-all duration-300 ease-out"
          >
            <LuBoxes size={35} />
          </Link>

          <div className="-mx-4 my-6 flex flex-col flex-wrap justify-between sm:my-2 md:flex-row">
            <ul>
              {menu.length &&
                menu.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="mx-2 p-2 text-sm leading-10 transition-all duration-300 ease-in hover:opacity-70"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              <li>
                <ModeToggle />
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-indian-red" />

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
      </div>
    </footer>
  );
}
