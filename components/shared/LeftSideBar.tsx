'use client';
import { sidebarLinks } from '@/constants/index';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { SignOutButton, SignedIn } from '@clerk/clerk-react';
import { RiLogoutBoxLine } from 'react-icons/ri';
const LeftSideBar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && 'bg-dark-3'}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="max-lg:hidden text-light-1">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6 py-6">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push('/sign-in')}>
            <div className="flex cursor-pointer items-center">
              <RiLogoutBoxLine className="m-4" size={28} />{' '}
              <p className="max-lg:hidden">Log Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSideBar;
