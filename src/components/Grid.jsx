import React, { useState, useEffect, useRef } from "react";
import "../styles/Grid.css";

const columns = "ABCDEFGHIJ".split("");
const rows = Array.from({ length: 25 }, (_, i) => i + 1);

const col_heading1 = [
  { id: 1, title: "Job Request", image: "/Images/job.png" },
  { id: 2, title: "Submitted", image: "/Images/submit.png" },
  { id: 3, title: "Status", image: "/Images/status.png" },
  { id: 4, title: "Submitter", image: "/Images/submitter.png" },
  { id: 5, title: "URL", image: "/Images/url.png" },
  { id: 6, title: "Assigned", image: "/Images/assigned.png" },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10, title: "", image: "" },
];

const col_heading2 = [
  { id: 1, title: "Priority", color: "#EAE3FC" },
  { id: 2, title: "Due Date", color: "#EAE3FC" },
  { id: 3, title: "Est. Value", color: "#FFE9E0" },
];

const grid_content = [
  [
    "Launch social media campaign for product XYZ",
    "15-11-2024",
    "In-process",
    "Aisha Patel",
    "www.aishapatel.com",
    "Sophie Choudhury",
    "Medium",
    "20-11-2024",
    "6,200,000 ₹",
  ],
  [
    "Update press kit for company redesign",
    "28-10-2024",
    "Need to start",
    "Irfan Khan",
    "www.irfankhanportfolio.com",
    "Tejas Pandey",
    "High",
    "30-10-2024",
    "3,500,000 ₹",
  ],
  [
    "Finalize user testing feedback for app update",
    "05-12-2024",
    "In-process",
    "Mark Johnson",
    "www.markjohnsondesigns.com",
    "Rachel Lee",
    "Medium",
    "10-12-2024",
    "4,750,000 ₹",
  ],
  [
    "Design new features for the website",
    "10-01-2025",
    "Complete",
    "Emily Green",
    "www.emilygreenart.com",
    "Tom Wright",
    "Low",
    "2,800,000 ₹",
    "5,900,000 ₹",
  ],
  [
    "Prepare financial report for Q4",
    "25-01-2025",
    "Blocked",
    "Jessica Brown",
    "www.jessicabrowncreative.com",
    "Kevin Smith",
    "Low",
    "15-01-2025",
    "",
  ],
  ["", "", "", "", "", "", "", "30-01-2025", ""],
];

const Grid = () => {
  const [selectedCell, setSelectedCell] = useState({ row: null, col: null });
  const cellRefs = useRef(
    Array.from({ length: rows.length }, () =>
      Array.from({ length: columns.length }),
    ),
  );

  const getCellAddress = (r, c) => `${columns[c]}${r + 1}`;

  const getCellContent = (r, c) =>
    r < grid_content.length && c < grid_content[r].length
      ? grid_content[r][c]
      : "";

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key))
        return;

      e.preventDefault(); // keep the page from scrolling

      let { row, col } = selectedCell;
      if (e.key === "ArrowUp") row = Math.max(0, row - 1);
      if (e.key === "ArrowDown") row = Math.min(rows.length - 1, row + 1);
      if (e.key === "ArrowLeft") col = Math.max(0, col - 1);
      if (e.key === "ArrowRight") col = Math.min(columns.length - 1, col + 1);

      // log & update state
      const address = getCellAddress(row, col);
      const content = getCellContent(row, col);
      console.log(`Cell: ${address}, Content: ${content}`);

      setSelectedCell({ row, col });

      // move DOM focus so the user sees the outline in the correct place
      cellRefs.current[row][col]?.focus();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedCell]);

  return (
    <div className="grid-container">
      <table className="excel-grid">
        <thead>
          <tr>
            <th className="above-th1 aboveth"></th>
            <th className="above-th2 aboveth" colSpan={4}>
              <div className="above-th2-cnt">
                <div className="above-th2-content">
                  <img src="/Images/link.png" alt="icon" className="th-icon" />
                  <span>Q3 Financial Overview</span>
                </div>
                <img src="/Images/refresh.png" alt="icon" className="th-icon" />
              </div>
            </th>
            <th className="above-th6 aboveth"></th>
            <th className="above-th7 aboveth">
              <div className="th-content2">
                <div className="img-and-text">
                  <img
                    src="/Images/green_flow.png"
                    alt="icon"
                    className="th-icon"
                  />
                  <span>ABC</span>
                  <span className="three-dots">...</span>
                </div>
              </div>
            </th>
            <th className="above-th8 aboveth" colSpan={2}>
              <div className="th-content2">
                <div className="img-and-text">
                  <img src="/Images/flow.png" alt="icon" className="th-icon" />
                  <span>Answer a question</span>
                  <span className="three-dots">...</span>
                </div>
              </div>
            </th>
            <th className="above-th10 aboveth col9">
              <div className="th-content2">
                <div className="img-and-text">
                  <img src="/Images/flow.png" alt="icon" className="th-icon" />
                  <span>Extract</span>
                  <span className="three-dots">...</span>
                </div>
              </div>
            </th>
            <th className="above-th11 aboveth col10">
              <img src="/Images/plus.png" alt="icon" className="th-icon" />
            </th>
          </tr>
          <tr>
            <th className="row-no">#</th>
            {columns.map((col, idx) =>
              idx > 5 && idx < 9 ? (
                <th
                  key={col}
                  className={`thcol${idx + 1} col`}
                  style={{ backgroundColor: col_heading2[idx - 6].color }}
                >
                  {idx > 5 && idx < 9 ? col_heading2[idx - 6].title : col}
                </th>
              ) : (
                <th
                  key={col}
                  className={`custom-th thcol${idx + 1} ${idx === 0 ? "col-a" : "col"}`}
                >
                  {col_heading1[idx].title && (
                    <div className="th-content">
                      <div className="img-and-text">
                        <img
                          src={col_heading1[idx].image}
                          className="th-icon"
                        />
                        <span>{col_heading1[idx].title}</span>
                      </div>
                      <span className="dropdown-arrow">▼</span>
                    </div>
                  )}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={row}>
              <td className="row-no">{row}</td>
              {columns.map((col, colIndex) => (
                <td
                  key={col}
                  ref={(el) => (cellRefs.current[rowIdx][colIndex] = el)}
                  tabIndex={0}
                  onClick={() => {
                    console.log(
                      `Cell: ${getCellAddress(rowIdx, colIndex)}, Content: ${getCellContent(
                        rowIdx,
                        colIndex,
                      )}`,
                    );
                    setSelectedCell({ row: rowIdx, col: colIndex });
                  }}
                  className={`col${colIndex + 1} row${rowIdx + 1} ${
                    selectedCell.row === rowIdx && selectedCell.col === colIndex
                      ? "selected-cell"
                      : ""
                  }`}
                >
                  {rowIdx < grid_content.length &&
                  colIndex < grid_content[rowIdx].length ? (
                    colIndex == 2 ? (
                      <span className="col3-span">
                        {grid_content[rowIdx][colIndex]}
                      </span>
                    ) : (
                      grid_content[rowIdx][colIndex]
                    )
                  ) : (
                    ""
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
