import { library } from "@fortawesome/fontawesome-svg-core";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

library.add(faEyeSlash, faEye, faCircleCheck);

export default function Input() {
  const [isVisible, setIsVisible] = useState(false);
  const [isEmailFormatted, setIsEmailFormatted] = useState(false);

  function handleInputEmail(e) {
    const targetValue = e.target.value;
    const format =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setIsEmailFormatted(format.test(targetValue));
    if (isEmailFormatted) {
      return;
    }
  }

  function handleVicibleIconClick() {
    setIsVisible(true);
  }

  return (
    <InputWrapper>
      <LabelWrapper>
        <LabelText>E-mail</LabelText>
        <InputEmail onChange={handleInputEmail} />
        <IconDiv>
          <EmailIcon isEmailFormatted={isEmailFormatted} />
        </IconDiv>
      </LabelWrapper>
      <LabelWrapper>
        <LabelText>Password</LabelText>
        <InputPassword isVisible={isVisible} />
        <IconDiv onClick={handleVicibleIconClick}>
          {isVisible ? (
            <FontAwesomeIcon icon={faEye} color="lightsteelblue" />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} color="darkgray" />
          )}
        </IconDiv>
      </LabelWrapper>
    </InputWrapper>
  );
}

function EmailIcon({ isEmailFormatted }) {
  return (
    <FontAwesomeIcon
      icon={faCircleCheck}
      color={isEmailFormatted ? "lightsteelblue" : "darkgray"}
    />
  );
}

function InputEmail({ onChange }) {
  return <InputText type="email" onChange={onChange} />;
}

function InputPassword({ isVisible }) {
  return <InputText type={isVisible ? "text" : "password"} />;
}

const InputWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 20px auto;
  width: 250px;
`;

const LabelWrapper = styled.label`
  position: relative;
  margin: 20px 0px;
`;

const LabelText = styled.span`
  color: gray;
`;

const InputText = styled.input`
  padding-left: 10px;
  width: 250px;
  height: 30px;
  border: 1px solid darkgray;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const IconDiv = styled.div`
  position: absolute;
  right: 0px;
  top: 28px;
  width: 30px;
`;
