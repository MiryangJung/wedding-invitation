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
import { ArrowDownIcon } from "./svgs";

const mAccounts: Account[] = [
  {
    bank: "하나",
    number: "52391024244307",
    name: "정미량",
  },
  {
    bank: "농협",
    number: "71707552154361",
    name: "김미화",
  },
  {
    bank: "하나",
    number: "52391024095007",
    name: "정길훈",
  },
];

const bAccounts: Account[] = [
  {
    bank: "신한",
    number: "110434273116",
    name: "박범영",
  },
  {
    bank: "하나",
    number: "65291034775407",
    name: "이미연",
  },
  {
    bank: "농협",
    number: "3520842586813",
    name: "박원용",
  },
];

export default function Accounts() {
  return (
    <section className={container}>
      <SectionTitle title="마음 전하실 곳" />
      <p className={description}>
        <span>참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.</span>
        <span> 너그러운 마음으로 양해 부탁드리며,</span>
        <span>축의금을 보내주신 분들께 감사의 뜻을 전하고 싶습니다.</span>
        <span>연락주시면 감사하겠습니다.</span>
      </p>
      <Block accounts={mAccounts} who="신부" />
      <Block accounts={bAccounts} who="신랑" />
    </section>
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
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(number).then(() => {
        alert("계좌번호가 복사되었습니다.");
      });
    } else {
      window.prompt("계좌번호를 복사해 주세요.", number);
    }
  };

  return (
    <div className={block}>
      <div className={blockTitle} onClick={onClickOpen}>
        <span>{who}측 계좌번호</span>
        <ArrowDownIcon />
      </div>
      {open && (
        <>
          {accounts.map((account) => (
            <div key={account.number} className={blockRow}>
              <div className={blockContent}>
                <span>{account.bank}</span>
                <span>{account.number}</span>
                <b>{account.name}</b>
              </div>
              <button
                className={blockCopyButton}
                onClick={() => onClickAccount(account)}
              >
                복사
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
