import React, { useState, useEffect } from "react";
import Timeline, {
  CursorMarker,
  TimelineHeaders,
  SidebarHeader,
  DateHeader
} from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

import {
  SiderbarButton,
  LabelStyles,
  MarkerText,
  globalStyle,
  customStyles,
  DateHeaderTopStyle,
  DateHeaderBottomStyle,
  MouseEnterStyle,
  MouseEnterSquare,
  ItemModal
} from "./CustomTimelinePresenter";

const today = moment().calendar();

const groups = [
  { id: 1, title: "group 1", rightTitle: "test", stackItems: true, height: 30 },
  { id: 2, title: "group 2" },
  { id: 3, title: "group 3" },
  { id: 4, title: "group 4" }
];

//Component part

const CustomTimeline = () => {
  const items = [
    {
      id: 1,
      group: 1,
      title: "Random title",
      start_time: moment(),
      end_time: moment().add(7, "day"),
      canMove: true,
      canResize: false,
      canChangeGroup: false,
      itemProps: {
        // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
        "data-custom-attribute": "wlow content",
        "aria-hidden": true,
        onDoubleClick: () => {
          console.log("sad");
        },
        className: "weekend"
        // style: () => {}
      }
    },
    {
      id: 2,
      group: 2,
      title: "item 2",
      start_time: moment().add(-0.5, "day"),
      end_time: moment().add(0.5, "day")
    },
    {
      id: 3,
      group: 3,
      title: "item 3",
      start_time: moment().add(2, "day"),
      end_time: moment().add(3, "day")
    }
  ];

  //state part

  const [visibleTime, setVisibleTime] = useState({
    visibleTimeStart: moment()
      .startOf("month")
      .valueOf(),
    visibleTimeEnd: moment()
      .startOf("month")
      .add(2, "month")
      .valueOf()
  });
  const { visibleTimeStart, visibleTimeEnd } = visibleTime;

  const [defaultTime, setDefaultTime] = useState({
    defaultTimeStart: moment()
      .startOf("month")
      .valueOf(),
    defaultTimeEnd: moment()
      .startOf("month")
      .add(2, "month")
      .valueOf()
  });
  const [customItems, setCustomItems] = useState(items);
  const [customGroups, setCustomGroups] = useState(groups);
  const [formData, setFormData] = useState({
    text: "",
    startTime: moment().add(2, "hour"),
    endTime: moment().add(3, "hour"),
    groupName: ""
  });

  const [groupData, setGroupData] = useState({
    groupName: ""
  });

  const [showModal, setShowModal] = useState({
    show: false
  });

  //Change date click

  const onPrevClick = () => {
    const zoom = visibleTimeEnd - visibleTimeStart;
    setVisibleTime({
      ...visibleTime,
      visibleTimeStart: visibleTimeStart - zoom,
      visibleTimeEnd: visibleTimeEnd - zoom
    });
  };

  const onNextClick = () => {
    const zoom = visibleTimeEnd - visibleTimeStart;
    setVisibleTime({
      ...visibleTime,
      visibleTimeStart: visibleTimeStart + zoom,
      visibleTimeEnd: visibleTimeEnd + zoom
    });
  };

  //group render
  const groupRenderer = ({ group }) => {
    return (
      <div className="custom-group">
        <span className="title" style={{ color: "red" }}>
          {group.title}
        </span>
        <p className="tip" style={{ color: "red" }}>
          {group.tip}
        </p>
      </div>
    );
  };

  //ToolTip modal
  const showToolTip = () => {
    setShowModal({ show: true });
    console.log(showModal);
  };
  const hideToolTip = () => {
    setShowModal({ show: false });
    console.log(showModal);
  };
  //item render
  const itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps
  }) => {
    // const backgroundColor = itemContext.selected ? (itemContext.dragging ? 'red' : item.selectedBgColor) : item.bgColor
    // const borderColor = itemContext.resizing ? 'red' : item.color

    return (
      <div {...getItemProps()} onMouseOver={showToolTip}>
        <LabelStyles className="rct-item-content" onMouseLeave={hideToolTip}>
          {itemContext.title}
        </LabelStyles>
        {showModal.show ? (
          <ItemModal>**modal content goes here**</ItemModal>
        ) : null}
      </div>
    );
  };

  return (
    <>
      <Timeline
        groups={customGroups}
        items={customItems}
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
        itemRenderer={itemRenderer}
        groupRenderer={groupRenderer}
        visibleTimeStart={visibleTimeStart}
        visibleTimeEnd={visibleTimeEnd}
        showCursorLine
        lineHeight={45}
      >
        <CursorMarker date={today}>
          {({ lineHeight, styles, date = moment().calendar() }) => {
            return (
              <div style={{ ...styles, customStyles }}>
                <MarkerText className="marker__text">{`${new Date(
                  date
                ).toLocaleDateString()}`}</MarkerText>
              </div>
            );
          }}
        </CursorMarker>
      </Timeline>
      <SiderbarButton onClick={onPrevClick}>{"< 前の月"}</SiderbarButton>
      <SiderbarButton onClick={onNextClick}>{"次の月 >"}</SiderbarButton>
    </>
  );
};

export default CustomTimeline;
