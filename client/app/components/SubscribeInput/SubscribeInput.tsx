'use client';

import { Button } from "../Button";
import "./SubscribeInput.scss";
import mailIcon from "../../../public/mailIcon.svg";

interface IProps {
  value: string;
  setValue: (v: string) => void;
  buttonClass?: string;
}

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

export default function SubscribeInput({ value, setValue, buttonClass }: IProps) {
  const onSubmit =(e: React.FormEvent) => {
    e.preventDefault();
    if (regex.test(value)) {
      setValue('');
    }
  };

  return (
    <form className="subscribe-input" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="subscribe-input__field"
        type="email"
        required
        placeholder="Enter your email here"
      />
      <Button
        type="submit"
        buttonClass={`subscribe-input__button ${buttonClass}`}
        iconSrc={mailIcon}
        iconWidth={20}
        iconHeight={20}
      >
        Subscribe
      </Button>
    </form>
  );
}
