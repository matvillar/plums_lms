'use client';

import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { RiLogoutBoxLine } from 'react-icons/ri';

const TopBar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={80} height={40} />
        <p className="text-heading3-bold text-dark-2 max-xs:hidden">PLUMS</p>
      </Link>
      <div className="flex items-center gap">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <RiLogoutBoxLine size={28} />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
