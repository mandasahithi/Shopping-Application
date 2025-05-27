import styles from "../../NavPages/Product/product.module.css";

export const CollapsibleSection = ({ title, isOpen, toggle, children }) => (
  // <div className={styles.collapsible}>
  <div>
    <div
      className={`d-flex justify-content-between ${styles.content}`}
      onClick={toggle}
    >
      <div
        className={`text-start text-dark text-sm ${
          isOpen ? styles.activeDetails : ""
        }`}
      >
        {title}
      </div>
      {/* <span>{ isOpen? "-" : "+"}</span> */}
      <i
        className={`bi ${isOpen ? "bi-dash" : "bi-plus "} ${styles.plusIcon} `}
      ></i>
    </div>

    {isOpen && (
      //  <div className={styles.content}>{children}</div>
      <div className={`mt-2 ${styles.isVisibleContent}`}>{children}</div>
    )}
    <hr className="w-100 mt-4 bg-gray"></hr>
  </div>
);
