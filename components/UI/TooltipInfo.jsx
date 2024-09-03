import styles from './TooltipInfo.module.css'

export default function TooltipInfo({ text = 'something' }) {
  return (
    <div className={styles.tooltipContainer}>
        <span className={styles.tooltipText}>{text}</span>
    </div>
  )
}
