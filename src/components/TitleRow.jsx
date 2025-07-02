import "../styles/TitleRow.css";

export default function TitleRow() {
  return (
    <>
      <div className="title-row">
        <div className="sheets">
          <div className="orders sheets-childs">All Orders</div>
          <div className="pending sheets-childs">Pending</div>
          <div className="reviewed sheets-childs">Reviewed</div>
          <div className="arrived sheets-childs">Arrived</div>
          <div className="add-new sheets-childs">
            <img src="/Images/plus.png" alt="icon" className="th-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
