'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from 'next/link';
import { useState } from "react";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Trackify</SheetTitle>
          <SheetDescription>
            The best way to track your stock portfolio
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center divide-y">
          <div className="w-full">
            <Link href="/overview" className="hover:text-gray-600 px-4 py-3 w-full block" onClick={() => setIsOpen(false)}>
              Overview
            </Link>
          </div>
          <div className="w-full">
            <Link href="/performance" className="hover:text-gray-600 px-4 py-3 w-full block" onClick={() => setIsOpen(false)}>
              Performance
            </Link>
          </div>
          <div className="w-full">
            <Link href="/trade" className="hover:text-gray-600 px-4 py-3 w-full block" onClick={() => setIsOpen(false)}>
              Trade
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}