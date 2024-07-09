import React, { useRef } from "react";
import styles from "./MenuCategory.module.css";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({
  category,
  index,
  isRowOpen,
  handleClick,
  menu,
  setMenu,
  triggerWiggle,
}) => {
  const rowRef = useRef();
  const handleRowClick = () => {
    setTimeout(() => {
      if (rowRef.current && !isRowOpen[index]) {
        rowRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 10);
  };

  return (
    <div className={styles.row} ref={rowRef} onClick={handleRowClick}>
      <button
        className={styles.toggleButton}
        onClick={() => handleClick(index)}
      >
        {category.title}
      </button>
      {isRowOpen[index] && (
        <div className={styles.cards}>
          {category.items.map((item, cardIndex) => (
            <div key={cardIndex} className={styles.card}>
              <MenuItem
                item={item}
                menu={menu}
                setMenu={setMenu}
                triggerWiggle={triggerWiggle}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
