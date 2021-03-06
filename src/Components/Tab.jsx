import { useState } from "react";
import styled from "styled-components";
import { getUnderLineDistance } from "../Features/getUnderLineDistance";

export default function Tab({ items, tabWidth }) {
  const [selectedTab, setSelectedTab] = useState({
    currentId: items[0].id,
    currentIndex: 0,
    distance: 0,
  });
  const listWidth = tabWidth / items.length;

  function handleTabClick(e) {
    const target = e.target;
    const { id } = target;
    const [prevIndex, prevDistance] = [
      selectedTab.currentIndex,
      selectedTab.distance,
    ];
    const listKey = target.attributes.getNamedItem("data-list-key").value;
    const currentDistance = getUnderLineDistance(prevIndex, listKey, listWidth);

    setSelectedTab({
      currentId: id,
      currentIndex: listKey,
      distance: prevDistance + currentDistance,
    });
  }

  return (
    <TabWrapper tabWidth={tabWidth}>
      <ul className="tab-list-container">
        {items.map((item, index) => {
          return (
            <List
              key={item.id}
              listKey={index}
              id={item.id}
              onTabClick={handleTabClick}
              listWidth={listWidth}
            >
              {item.name}
            </List>
          );
        })}
      </ul>
      <UnderLine
        distance={selectedTab.distance}
        listWidth={listWidth}
      ></UnderLine>
    </TabWrapper>
  );
}

function List(props) {
  const { listKey, id, onTabClick, distance, listWidth, children } = props;
  return (
    <ListItem
      data-list-key={listKey}
      id={id}
      onClick={onTabClick}
      distance={distance}
      listWidth={listWidth}
    >
      {children}
    </ListItem>
  );
}

const TabWrapper = styled.div`
  position: relative;
  margin: 20px auto;
  width: ${(props) => props.tabWidth}px;

  .tab-list-container {
    padding: 0px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    list-style: none;
    color: dimgray;
    font-size: 1.2rem;
  }
`;

const ListItem = styled.li`
  padding-bottom: 20px;
  width: ${(props) => props.listWidth}px;
  border-bottom: 3px solid lightgray;
  text-align: center;
  cursor: pointer;
`;

const UnderLine = styled.div`
  position: absolute;
  bottom: 20px;
  width: ${(props) => props.listWidth}px;
  border-bottom: 3px solid lightsteelblue;
  transition: transform 0.2s linear;
  transform: translateX(${(props) => props.distance}px);
`;
