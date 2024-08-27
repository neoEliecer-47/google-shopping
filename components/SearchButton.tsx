"use client"
 
import { useFormStatus } from 'react-dom'
import styles from './SearchButton.module.css'

export default function SearchButton() {

    //const status = useFormStatus();

  return (
    <button className={styles.searchButton}>search</button>
  )
}
