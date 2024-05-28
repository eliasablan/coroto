import React from "react";
import Link from "next/link";
import { getMenu } from "@/lib/shopify";
import { Menu } from "@/lib/shopify/types";
import MobileMenu from "./MobileMenu";
import Cart from "./MobileCart";
import { LuBoxes } from "react-icons/lu";

import { cookies } from "next/headers";
import { getCart } from "@/lib/shopify";

export default async function Header() {
  const menu = await getMenu("main-menu");
  const cartId = cookies().get("cartId")?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return (
    <div className="mx-auto m-8 flex container items-center justify-between gap-4 px-6 md:gap-0 md:gap-y-12 xl:px-0">
      <div className="flex items-center md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <Link
        href="/"
        className="hover:text-accent transition-all duration-300 ease-out"
      >
        <LuBoxes size={35} />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-12">
          {menu.length &&
            menu.map((item: Menu) => (
              <li
                className="hover:underline font-medium transition-all duration-300 ease-out"
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
  );
}
