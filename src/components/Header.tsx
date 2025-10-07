import React from 'react'
import Link from 'next/link'
import { getMenu } from '@/lib/shopify'
import { Menu } from '@/lib/shopify/types'
import MobileMenu from './MobileMenu'
import Cart from './MobileCart'
import { GrCodeSandbox } from 'react-icons/gr'

import { cookies } from 'next/headers'
import { getCart } from '@/lib/shopify'

export default async function Header() {
  const menu = await getMenu('main-menu-1')
  const cartId = cookies().get('cartId')?.value
  let cart

  if (cartId) {
    cart = await getCart(cartId)
  }

  return (
    <div className="container sticky -top-4 z-50 flex items-center justify-between bg-background pb-4 pt-8 align-middle">
      <div className="flex items-center md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <Link
        href="/"
        className="flex items-center gap-x-4 text-2xl font-semibold transition-all duration-300 ease-out hover:text-accent"
      >
        <GrCodeSandbox size={35} />
        {process.env.SITE_NAME}
      </Link>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8">
          {menu.length &&
            menu.map((item: Menu) => (
              <li
                className="text-sm font-medium underline-offset-4 hover:underline"
                key={item.title}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          <li className="h-5">
            <Cart logoSize={20} cart={cart} className="mb-1.5" />
          </li>
        </ul>
      </nav>
      <Cart cart={cart} className="block md:hidden" />
    </div>
  )
}
