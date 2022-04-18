import { useState } from "react";
import styled from "styled-components";

export default function Toggle({ items }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ToggleWrapper>
      <input
        type="checkbox"
        checked={isChecked}
        className="switch-input"
        readOnly
      />
      <label className="switch-label" onClick={() => setIsChecked(!isChecked)}>
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
  width: 300px;
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
      transform: translateX(150px);
    }
  }

  .toggle-ball {
    position: absolute;
    width: 150px;
    height: 40px;
    border-radius: 30px;
    background-color: white;
    transition: transform 0.2s linear;
  }
`;
