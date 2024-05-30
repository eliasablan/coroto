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
  const menu = await getMenu('main-menu')
  const cartId = cookies().get('cartId')?.value
  let cart

  if (cartId) {
    cart = await getCart(cartId)
  }

  return (
    <div className="container sticky top-0 z-50 flex items-center justify-between gap-4 bg-background py-8 md:gap-0 md:gap-y-12">
      <div className="flex items-center md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <Link
        href="/"
        className="transition-all duration-300 ease-out hover:text-accent"
      >
        <GrCodeSandbox size={35} />
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
          <li>
            <Cart logoSize={20} cart={cart} className="mb-1.5" />
          </li>
        </ul>
      </nav>
      <Cart cart={cart} className="block md:hidden" />
    </div>
  )
}
