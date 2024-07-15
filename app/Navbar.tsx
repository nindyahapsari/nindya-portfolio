"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="desktop:max-w-5xl desktop:mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost desktop:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/resume">Resume</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </div>
          <div>
            <a href="/" className="btn btn-ghost text-md desktop:text-2xl">
              Nindya Hapsari
            </a>
          </div>
        </div>
        <div className="navbar-center hidden desktop:flex">
          <ul className="menu menu-horizontal px-1  desktop:max-w-screen-md">
            <li className="desktop:text-lg">
              <Link href="/">Home</Link>
            </li>
            <li className="desktop:text-lg">
              <Link href="/resume">Resume/CV</Link>
            </li>
            <li className="desktop:text-lg">
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a href="mailto:mail@nindyahapsari.info" className="btn">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
