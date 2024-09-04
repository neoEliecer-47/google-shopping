"use client";

import { useEffect, useState } from "react";
import styles from "./DropdownMenu.module.css";
import { CheckIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useClickOutsideDetector } from "@/hooks/useClickOutsideDetector";

export default function DropdownMenu({ placeholder, data, money = false }) {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(null);

  const { dropMenuRef, isClickOutside, setIsClickOutside } =
    useClickOutsideDetector();

  function handleOpenOptions(e) {
    e.stopPropagation();
    setOpen(!open);
  }

  function getValues(item, index) {
    if (money && index === 0) {
      return "No Minimun";
    }
    // if(item instanceof Object)

    return typeof item === "object" ? Object.values(item)[0] : item;
  }

  function buildPlaceholder(tooltip) {
    let item = data[option];
    let placeholder = "";
    placeholder = getValues(item, option);
    if (tooltip) return placeholder;
    return placeholder.slice(0, 10) + `${placeholder.length > 10 ? "..." : ""}`;
  }

  useEffect(() => {
    if (isClickOutside) {
      setOpen(false);
      setIsClickOutside(false);
    }
  }, [isClickOutside]);

  return (
    // <div style={{ position: "relative", zIndex: 6, display: 'flex' }}>
    <section style={{ width: "8rem", cursor: "pointer" }} ref={dropMenuRef}>
      <div
        className={classNames(
          styles.placeholderContainer,
          option && styles.placeholderContainerSelected
        )}
        onClick={handleOpenOptions}
      >
        {buildPlaceholder("tooltip")?.length > 10 && (
          <div className={styles.tooltipContainer}>
            <span className={styles.tooltipText}>
              {buildPlaceholder("tooltip")}
            </span>
          </div>
        )}

        <h2 className={styles.placeholder}>
          {option === null ? placeholder : buildPlaceholder()}
        </h2>
        <ChevronDownIcon
          className={classNames(styles.icon, open && styles.iconRotate)}
        />
      </div>

      <div
        className={styles.options}
        style={{ padding: `${open ? "10px 0px" : "0px"}`, width: "8rem" }}
      >
        {open &&
          data.map((item, index) => (
            <div
              style={{
                margin: "0px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => setOption(index)}
              className={styles.containerO}
            >
              <div style={{ width: "1.3rem" }}>
                {option === index && <CheckIcon className={styles.icon} />}
              </div>
              <div className={styles.optionButton}>
                {money && index !== 0 && "$"}
                {getValues(item, index)}
              </div>
            </div>
          ))}
      </div>
    </section>
    // </div>
  );
}
