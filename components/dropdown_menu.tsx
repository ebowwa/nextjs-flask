"use client";

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon, ChevronRightIcon, CheckIcon } from '@radix-ui/react-icons';

const SiteDirectoryMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Open site directory"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-gray-100 rounded-lg p-4 shadow-sm border border-gray-200"

          sideOffset={5}
        >
          {/* Simple items */}
          <DropdownMenu.Item className="dropdown-item">Home</DropdownMenu.Item>
          <DropdownMenu.Item className="dropdown-item">Pricing</DropdownMenu.Item>
          <DropdownMenu.Item className="dropdown-item">Team</DropdownMenu.Item>

          {/* Nested dropdown for Store section */}
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="dropdown-trigger">Store</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent className="dropdown-content">
              <DropdownMenu.Item className="dropdown-item">All Products</DropdownMenu.Item>
              <DropdownMenu.Item className="dropdown-item">New Arrivals</DropdownMenu.Item>
              <DropdownMenu.Item className="dropdown-item">Best Sellers</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          {/* Nested dropdown for Documentation */}
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="dropdown-trigger">Documentation</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent className="dropdown-content">
              <DropdownMenu.Item className="dropdown-item">API Docs</DropdownMenu.Item>
              <DropdownMenu.Item className="dropdown-item">Component Usage</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          {/* Account related links */}
          <DropdownMenu.Item className="dropdown-item">Login</DropdownMenu.Item>
          <DropdownMenu.Item className="dropdown-item">Sign Up</DropdownMenu.Item>

          {/* Additional sections */}
          <DropdownMenu.Item className="dropdown-item">Share</DropdownMenu.Item>
          <DropdownMenu.Item className="dropdown-item">Affiliate Program</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default SiteDirectoryMenu;
