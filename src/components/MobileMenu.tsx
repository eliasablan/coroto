import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "@/lib/shopify/types";
import { GrMenu } from "react-icons/gr";

export default function MobileMenu({
  menu,
}: {
  menu?: Menu[];
  className?: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative flex items-center hover:text-accent transition-all duration-300 ease-out">
          <GrMenu />
        </button>
      </SheetTrigger>
      <SheetContent className="w-11/12 sm:w-[540px]" side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ul className="flex w-full flex-col gap-6 py-6">
          {menu?.length &&
            menu.map((item) => (
              <li className="text-2xl" key={item.title}>
                <SheetClose asChild>
                  <Link href={item.path}>{item.title}</Link>
                </SheetClose>
              </li>
            ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
