import { useState } from "react";
import styles from "./DropdownMenu.module.css";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";

const data = [
  {
    number: "1",
  },
  {
    number: "2",
  },
  {
    number: "3",
  },
];

export default function DropdownMenu({ placeholder }) {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(null);

  return (
    <section>
      <div
        className={styles.placeholderContainer}
        onClick={() => setOpen(!open)}
      >
        <h2 style={{ margin: 0 }}>{placeholder}</h2>
        <ChevronDownIcon
          className={classNames(styles.icon, open && styles.iconRotate)}
        />
      </div>
      <div
        className={styles.options}
        style={{ padding: `${open ? "20px 0px" : "0px"}`, width: "8rem" }}
      >
        {open &&
          data.map(({ number }, index) => (
            <div
              style={{ margin: "0px", display: "flex", justifyContent: 'space-between', alignItems: 'center' }}
              onClick={() => setOption(index)}
              className={styles.containerO}
            >
              <div style={{width: '1.3rem'}}>
                {option === index && <CheckIcon className={styles.icon}/>}
              </div>
              <h4 className={styles.optionButton}>numero - {number}</h4>
            </div>
          ))}
      </div>
    </section>
  );
}
