import { render } from "@testing-library/react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Example() {
  return (
    <>
      {["start", "end", "top", "bottom"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
render(<Example />);

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h2>Some text as placeholder</h2>{" "}
          <p>
            In real life you can have the elements you have chosen. Like, text,
            images, lists, etc.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default OffCanvasExample;
