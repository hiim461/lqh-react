import React from "react";
import styles from './child.module.scss'

function Child() {
  return (
    <div>
      <h1 className="heading">Child Style</h1>
      <h1 className={styles.heading}>Child CSS Module</h1>
      {/* vdu có nhiều className: className={`${var1} ${var2}`} */}
    </div>
  );
}

export default Child;
