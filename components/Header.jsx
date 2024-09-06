"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import SearchButton from "./SearchButton";
import DropdownMenu from "./DropdownMenu";
import Avatar from "react-avatar";
import { useRouter } from "next/navigation";
import { useState } from "react";


const SORT_BY_MAP = {
  r: "Default",
  rv: "By Review",
  p: "By Price (low to high)",
  pd: "By Price (high to low)",
};

const numPages = [
  
    {page: "page 1"},
  
  
    {page: "page 2"},
  
  
    {page: "page 3"},
  
  
    {page: "page 4"},
  
];

const minPriceData  = {
  price: '0',
  price2: '100',
  price3: '200',
  price4: '300',
  price5: '400',
}

export default function HeminPriceader() {

  const [pages, setPages] = useState('')
  const [sortBy, setSortBy] = useState('r')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)

  const router = useRouter()
 

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

      <div className={styles.containerFormAndMenus}>
        {/* FORM */}
        <form action={formData => {
          const searchTerm = formData.get('searchTerm')

          if(!formData.get('searchTerm')) return;

          const params = new URLSearchParams()

          if(pages) params.set('pages', pages.toString());
          if(sortBy) params.set('sort_by', sortBy.toString());
          if(minPrice) params.set('min_price', minPrice.toString());
          if(maxPrice) params.set('max_price', maxPrice.toString());

          router.push(`/search/${searchTerm}?${params.toString()}`)
        }}>
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

          <div className={styles.containerDropMenus}>
            <DropdownMenu placeholder="Pages" data={numPages} onValue={setPages} paramValue='pages'/>
            <DropdownMenu placeholder="Sort" data={Object.values(SORT_BY_MAP)} onValue={setSortBy} paramValue='sort_by'/>
            <DropdownMenu placeholder="Min Price" data={Object.values(minPriceData)} money onValue={setMinPrice} paramValue='min_price'/>
          </div>
        </form>
      </div>

      <div>
        <Avatar name="Eliecer Sanchez" round size="50"/>
      </div>
    </header>
  );
}
