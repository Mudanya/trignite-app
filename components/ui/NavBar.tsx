'use client'
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from './MenuBar';
import { cn } from './cn';

const NavBar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Services" >
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
          </MenuItem>
         
        </Menu>
      </div>
    )}

    export default NavBar