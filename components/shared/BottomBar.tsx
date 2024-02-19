'use client';

import { sidebarLinks } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const BottomBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isActive && 'bg-dark-3'}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BottomBar;
