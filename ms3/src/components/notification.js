import { OverlayTrigger, Popover } from "react-bootstrap";
import { BellFill, PersonCircle } from "react-bootstrap-icons";

const Notification = () => {
  const popover = (
    <Popover id="popover-basic" className="rounded-0">
      <Popover.Header as="h3">Notifications</Popover.Header>
      <Popover.Body className="p-0 rounded-0">
        <ul className="list-group rounded-0 border-0">
          <li className="list-group-item">
            <span className="fw-bold">Announcement</span>
            <br />
            Exciting news! Update our mobile banking app for a better, more
            secure experience. Discover new features and enhanced functionality
            today.
            <br />
            <span className="text-muted">26-05-2023</span>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Transaction</span>
            <br />
            Spent 175.50 USD at Talabat Cairo EG
            <br />
            <span className="text-muted">25-05-2023</span>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Reminder</span>
            <br />
            Loan Payment for loan #32123 due in 1 week
            <br />
            <span className="text-muted">22-05-2023</span>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Ticket #142</span>
            <br />
            Your issue #142 was resolved, please check your email!
            <br />
            <span className="text-muted">20-05-2023</span>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );
  return (
    <div className="">
      <OverlayTrigger
        className=""
        trigger="click"
        placement="bottom"
        overlay={popover}>
        <BellFill
          className="text-warning ms-3 cursor-pointer position-absolute "
          style={{ left: "85%" }}
          size={24}
        />
      </OverlayTrigger>
    </div>
  );
};

export default Notification;
