import { useState } from "react";
import styled from "styled-components";

export default function Toggle({ items, toggleWidth }) {
  const [isChecked, setIsChecked] = useState(false);

  function handletoggleClick() {
    setIsChecked(!isChecked);
  }

  return (
    <ToggleWrapper toggleWidth={toggleWidth}>
      <input
        type="checkbox"
        checked={isChecked}
        className="switch-input"
        readOnly
      />
      <label className="switch-label" onClick={handletoggleClick}>
        <div className="toggle-ball"></div>
        <div className="toggle-container">
          {items.map((item) => {
            return (
              <span key={item.id} className="toggle-contents">
                {item.name}
              </span>
            );
          })}
        </div>
      </label>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div`
  margin: 20px auto;
  padding: 2px;
  width: ${(props) => props.toggleWidth}px;
  height: 40px;
  border-radius: 40px;
  background-color: lightsteelblue;

  .toggle-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    position: relative;
    margin-top: 10px;
    width: 300px;
    height: 40px;
    cursor: pointer;
  }

  .toggle-contents {
    font-size: 1.2rem;
    color: dimgray;
  }

  .switch-input {
    display: none;
    &:checked + .switch-label .toggle-ball {
      transform: translateX(${(props) => props.toggleWidth / 2}px);
    }
  }

  .toggle-ball {
    position: absolute;
    width: ${(props) => props.toggleWidth / 2}px;
    height: 40px;
    border-radius: 30px;
    background-color: white;
    transition: transform 0.2s linear;
  }
`;
