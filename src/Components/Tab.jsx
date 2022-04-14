import { useState } from "react";
import styles from "./Tab.module.css";
import styled from "styled-components";

const ListItem = styled.li`
  padding-bottom: 20px;
  width: 130px;
  border-bottom: 3px solid lightgray;
  text-align: center;
  cursor: pointer;
`;

const UnderLine = styled.div`
  position: absolute;
  bottom: 20px;
  width: 130px;
  border-bottom: 3px solid lightsteelblue;
  transition: transform 0.2s linear;
  transform: translateX(${(props) => props.distance}px);
`;

const CONTENTS = [
  {
    id: "POTATO",
    name: "감자",
  },
  {
    id: "SWEET_POTATO",
    name: "고구마",
  },
  {
    id: "CURRY_RICE",
    name: "카레라이스",
  },
];

function List(props) {
  const { listKey, id, onClick, distance, children } = props;
  console.log(listKey);
  return (
    <ListItem listKey={listKey} id={id} onClick={onClick} distance={distance}>
      {children}
    </ListItem>
  );
}

function getUnderLineDistance(prev, current) {
  const [prevIndexNumber, currentIndexNumber] = [Number(prev), Number(current)];
  const distance = (currentIndexNumber - prevIndexNumber) * 130;
  return distance;
}

export default function Tab() {
  const [selectedTab, setSelectedTab] = useState({
    currentId: CONTENTS[0].id,
    currentIndex: 0,
    distance: 0,
  });

  function handleTabClick(e) {
    const target = e.target;
    console.log(target);
    const { id, listKey } = target;
    const [prevIndex, prevDistance] = [
      selectedTab.currentIndex,
      selectedTab.distance,
    ];
    const currentDistance = getUnderLineDistance(prevIndex, listKey);
    setSelectedTab({
      currentId: id,
      currentIndex: listKey,
      distance: prevDistance + currentDistance,
    });
  }

  return (
    <div className={styles.tab_wrapper}>
      <ul className={styles.tab_list_container}>
        {CONTENTS.map((content, index) => {
          const listKey = JSON.stringify(index);
          return (
            <List
              key={content.id}
              listKey={listKey}
              id={content.id}
              onClick={handleTabClick}
            >
              {content.name}
            </List>
          );
        })}
      </ul>
      <UnderLine distance={selectedTab.distance}></UnderLine>
    </div>
  );
}
