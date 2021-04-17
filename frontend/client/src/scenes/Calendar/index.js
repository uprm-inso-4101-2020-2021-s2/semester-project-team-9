import React from "react";
import { Tabs } from "antd";
import { Calendar, Badge } from "antd";

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [{ type: "warning", content: "Payment due for: NBA League" }];
      break;
    case 10:
      listData = [{ type: "warning", content: "Payment due for: PSN Plus" }];
      break;
    case 15:
      listData = [
        { type: "warning", content: "Payment due for: Netflix" },
        { type: "warning", content: "Payment due for: Hulu" },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}
function Calendar() {
  return (
    <>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
      ,
    </>
  );
}
export default Calendar;
