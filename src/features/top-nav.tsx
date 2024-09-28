'use client'
import React from "react"
import { Navbar, Link, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { usePathname } from 'next/navigation'

import ThemeSwitch from '@/features/theme-switch'

const navItems = {
  '/': {
    name: 'home',
  },
  '/skill': {
    name: 'skill',
  },
  // '/category': {
  //   name: 'category',
  // },
  'https://www.mintnoii.com': {
    name: 'mintnoii',
  },
}

export default function TopNav() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname()
  return (
    <Navbar isBordered>
      <NavbarBrand className="mr-4">
        {/* <AcmeLogo /> */}
        <p className="hidden sm:block font-bold text-inherit">Front-end Fun</p>
      </NavbarBrand>
      <NavbarContent justify="center">

        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = pathname === path
          return (
            <NavbarItem key={path} isActive={isActive}>
              <Link color="foreground" className="px-2" href={path}>{name}</Link>
            </NavbarItem>
          )
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
