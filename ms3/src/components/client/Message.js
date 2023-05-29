import React, { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";

const Message = ({ variant, children, showMessage, setShowMessage }) => {
  const handleClose = () => {
    setShowMessage(false);
  };

  return (
    showMessage && (
      <Alert className="text-center" variant={variant}>
        <div className="d-flex justify-content-between align-items-center">
          <div>{children}</div>
          <Button
            variant="outlined-secondary"
            className="close-button"
            size="sm"
            onClick={handleClose}
          >
            X
          </Button>
        </div>
      </Alert>
    )
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
