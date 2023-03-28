import React from "react";

function Button({ children, onClick }) {
  //prop onClick là 1 function vì thế để chạy nó thì chạy như bên dưới
  //onClick(); // hoặc là đưa thẳng vào trong btn (event reactjs)
  return (
    <button className="btn btn-warning" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

//usage:
//<button>Click</button>
