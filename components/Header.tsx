"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import SearchButton from "./SearchButton";
import DropdownMenu from "./DropdownMenu";

const SORT_BY_MAP = {
  r: 'Default',
  rv: 'By Review',
  p: 'By Price (low to high)',
  pd: 'By Price (high to low)'
}

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
        <form>
          <div className={styles.containerBox}>
            <div className={styles.containerInput}>
              <MagnifyingGlassIcon
                style={{
                  height: "20px",
                  width: "20px",
                  color: "rgb(156 163 175)",
                }}
              />
              <input
                type="text"
                name="searchTerm"
                placeholder="Search..."
                className={styles.inputSearch}
              />
            </div>

            <SearchButton />
          </div>

          {/* categories */}
          <div style={{ position: "relative", zIndex: 6 }}>
            <DropdownMenu placeholder="pages" />
          </div>
         
        </form>
      </div>
    </header>
  );
}
