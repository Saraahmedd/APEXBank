import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { BellFill, PersonCircle } from "react-bootstrap-icons";

const Notification = () => {
  const popover = (
    <Popover id="popover-basic" className="rounded-0">
      <Popover.Header as="h3">Notifications</Popover.Header>
      <Popover.Body className="p-0 rounded-0">
        <ul className="list-group rounded-0 border-0">
          <li className="list-group-item">
            <span className="fw-bold">Meeting Reminder</span>
            <br />
            Don't forget about the meeting with a client at 2 PM.
            <br />
            <span className="text-muted">26-05-2023</span>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Transaction Alert</span>
            <br />
            Large fund transfer of $10,000 initiated from account #12345.
            <br />
            <span className="text-muted">25-05-2023</span>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Loan Request</span>
            <br />
            New loan application received. Please review and process.
            <br />
            <span className="text-muted">22-05-2023</span>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Account Update</span>
            <br />
            Account #54321 has been updated with new contact information.
            <br />
            <span className="text-muted">20-05-2023</span>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <BellFill
          className="text-warning ms-3 cursor-pointer position-absolute"
          style={{ left: "85%" }}
          size={24}
        />
      </OverlayTrigger>
    </div>
  );
};

export default Notification;
