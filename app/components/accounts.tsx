"use client";

import { useState } from "react";
import {
  block,
  blockContent,
  blockCopyButton,
  blockRow,
  blockTitle,
  container,
  description,
} from "./accounts.css";
import SectionTitle from "./section-title";

const mAccounts: Account[] = [
  {
    bank: "하나은행",
    number: "52391024244307",
    name: "정미량",
  },
];

export default function Accounts() {
  return (
    <div className={container}>
      <SectionTitle title="마음 전하실 곳" />
      <p className={description}>
        <span>참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.</span>
        <span> 너그러운 마음으로 양해 부탁드리며,</span>
        <span>축의금을 보내주신 분들께 감사의 뜻을 전하고 싶습니다.</span>
        <span>연락주시면 감사하겠습니다.</span>
      </p>
      <Block accounts={mAccounts} who="신부" />
    </div>
  );
}

interface Account {
  bank: string;
  number: string;
  name: string;
}

function Block({ accounts, who }: { accounts: Account[]; who: string }) {
  const [open, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickAccount = ({ bank, number, name }: Account) => {
    if (navigator?.share) {
      navigator.share({
        title: `${name} 결혼식 축의금 계좌, ${bank}`,
        text: number,
      });
    } else {
      window.prompt("계좌번호를 복사해 주세요.", number);
    }
  };

  return (
    <div className={block}>
      <div className={blockTitle} onClick={onClickOpen}>
        <span>{who}측 계좌번호</span>
        <ArrowDownSvg />
      </div>
      {open && (
        <div className={blockContent}>
          {accounts.map((account) => (
            <div key={account.number} className={blockRow}>
              <span>
                {account.bank} {account.number} {account.name}
              </span>
              <button
                className={blockCopyButton}
                onClick={() => onClickAccount(account)}
              >
                복사
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ArrowDownSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      fill="white"
    >
      <path d="M480-362q-8 0-15-2.5t-13-8.5L268-557q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-373q-6 6-13 8.5t-15 2.5Z" />
    </svg>
  );
}
