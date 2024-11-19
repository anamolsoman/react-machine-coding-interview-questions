import React, { useEffect, useState } from "react";
import "./Toast.css";
function ToastContainer() {
  const [toasts, setToasts] = useState([]);
  useEffect(() => console.log(toasts), [toasts]);

  const addToast = (type) => {
    setToasts([...toasts, { id: new Date().getTime(), type }]);
  };
  return (
    <div>
      <div className="toast-container">
        <div className="toast">
          <div>Success Toast</div>
          <div>CLose</div>
        </div>
      </div>
      <div className="toast-actions">
        <button className="success" onClick={() => addToast('success')}>
          Success Toast
        </button>
        <button className="info">Info Toast</button>
        <button className="warning">Warning Toast</button>
        <button className="error">Error Toast</button>
      </div>
    </div>
  );
}

export default ToastContainer;
