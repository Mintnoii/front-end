'use client'
import React from "react"
import { Navbar, Link, NavbarContent, NavbarItem } from "@nextui-org/react";
import { usePathname } from 'next/navigation'

import ThemeSwitch from '@/features/theme-switch'

const navItems = {
  '/': {
    name: 'home',
  },
  '/architecture': {
    name: 'architecture',
  },
  'https://www.mintnoii.com': {
    name: 'mintnoii',
  },
}

export function Nav() {
    // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname()
  
  return (
     <Navbar>
      <NavbarContent className="sm:flex gap-4" justify="center">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = pathname === path
              return (
                // <Link
                //   key={path}
                //   href={path}
                //   className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                // >
                //   {name}
                // </Link>
                <NavbarItem key={path} isActive={isActive}>
          <Link color="foreground"  href={path}>
            {name}
          </Link>
        </NavbarItem>
              )
            })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
