'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia logo"
          height={30}
          width={30}
          className="object-container"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Mobile Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link className="black_btn" href="/create-prompt">
              Create Prompt
            </Link>

            <button type="button" className="outline_btn" onClick={signOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <div>Login</div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
