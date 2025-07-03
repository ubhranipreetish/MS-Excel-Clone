import "../styles/TitleRow.css";

function print(text) {
  console.log(`Clicked on ${text}`);
}

export default function TitleRow() {
  return (
    <>
      <div className="title-row">
        <div className="sheets">
          <div
            className="orders sheets-childs"
            onClick={() => print("All Orders")}
          >
            All Orders
          </div>
          <div
            className="pending sheets-childs"
            onClick={() => print("Pending")}
          >
            Pending
          </div>
          <div
            className="reviewed sheets-childs"
            onClick={() => print("Reviewed")}
          >
            Reviewed
          </div>
          <div
            className="arrived sheets-childs"
            onClick={() => print("Arrived")}
          >
            Arrived
          </div>
          <div
            className="add-new sheets-childs"
            onClick={() => print("Plus Icon")}
          >
            <img src="/Images/plus.png" alt="icon" className="th-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
