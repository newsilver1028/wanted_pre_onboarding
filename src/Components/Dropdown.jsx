import styles from "./Dropdown.module.css";

export default function Dropdown() {
  const contents = [
    {
      id: "ALL_SYMBOLS",
      name: "All Symbols",
    },
    {
      id: "BTCUSD.PERP",
      name: "BTCUSD.PERP",
    },
    {
      id: "ETHUSD.PERP",
      name: "ETHUSD.PERP",
    },
    {
      id: "BCHUSD.PERP",
      name: "BCHUSD.PERP",
    },
    {
      id: "LTCUSD.PERP",
      name: "LTCUSD.PERP",
    },
    {
      id: "XRPUSD.PERP",
      name: "XRPUSD.PERP",
    },
  ];

  return (
    <div className={styles.dropdown_container}>
      <select className={styles.dropdown_list}>
        {contents.map((content) => {
          return (
            <option
              key={content.id}
              className={styles.dropdown_item}
              id={content.id}
              value={content.name}
            >
              {content.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
