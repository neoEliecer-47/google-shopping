"use client"
 
import { useFormStatus } from 'react-dom'
import styles from './SearchButton.module.css'
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
export default function SearchButton() {

    //const status = useFormStatus();

  return (
    <button className={styles.searchButton}>
      <MagnifyingGlassIcon style={{ height: '20px', width: '20px' }}/>
    </button>
  )
}
