"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <Image
          src="https://links.papareact.com/208"
          alt="logo"
          width={150}
          height={150}
          quality={100}
          className={styles.image}
        />
      </Link>

      <div>
        {/* FORM */}
        <form action="">
            <div>
                <div className={styles.containerInput}>
                    <MagnifyingGlassIcon style={{ height: '20px', width: '20px', color: 'rgb(156 163 175)' }} />
                    <input 
                        type="text"
                        name="searchTerm"
                        placeholder="Search..."
                        className={styles.inputSearch} 
                    />
                </div>
            </div>
        </form>
      </div>
    </header>
  );
}
