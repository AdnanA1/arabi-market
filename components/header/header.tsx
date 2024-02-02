import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between flex flex-wrap items-center">
          <Link href="/" className="btn btn-ghost text-lg">
            <Image src="/logo.svg" alt="logo" width={170} height={50} />
          </Link>
          <ul className="flex">
            <li>
              <Link href="/cart" className="btn btn-ghost rounded-btn">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/cart" className="btn btn-ghost rounded-btn">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
