import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Head>
        <title>WalletConnect | Next Starter Template</title>
        <meta name="description" content="Generated by create-wc-dapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full flex flex-col space-y-4">
        <Hero />
        <div className="mx-3 p-4  bg-[#212244] flex flex-row justify-between rounded-xl text-[18px]  items-center">
          <p className="flex flex-row items-center space-x-2">
            <span>Current Hashrate</span>
            <svg
              data-v-df8a5f7b=""
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-df8a5f7b=""
                d="M7.95925 6.16C7.82975 6.2855 7.77025 6.467 7.79975 6.645L8.24426 9.105C8.28176 9.3135 8.19376 9.5245 8.01925 9.645C7.84825 9.77 7.62075 9.785 7.43425 9.685L5.21975 8.53C5.14275 8.489 5.05725 8.467 4.96975 8.4645H4.83425C4.78725 8.4715 4.74125 8.4865 4.69925 8.5095L2.48425 9.67C2.37475 9.725 2.25075 9.7445 2.12925 9.725C1.83325 9.669 1.63575 9.387 1.68425 9.0895L2.12925 6.6295C2.15875 6.45 2.09925 6.2675 1.96975 6.14L0.164255 4.39C0.0132548 4.2435 -0.0392452 4.0235 0.0297548 3.825C0.0967548 3.627 0.267755 3.4825 0.474255 3.45L2.95925 3.0895C3.14825 3.07 3.31425 2.955 3.39925 2.785L4.49425 0.54C4.52025 0.49 4.55375 0.444 4.59425 0.405L4.63925 0.37C4.66275 0.344 4.68975 0.3225 4.71975 0.305L4.77425 0.285L4.85925 0.25H5.06975C5.25775 0.2695 5.42325 0.382 5.50975 0.55L6.61925 2.785C6.69925 2.9485 6.85475 3.062 7.03426 3.0895L9.51925 3.45C9.72925 3.48 9.90475 3.625 9.97425 3.825C10.0398 4.0255 9.98326 4.2455 9.82926 4.39L7.95925 6.16Z"
                fill="#FFD000"
              ></path>
            </svg>
          </p>
          <p>261(PH/s) </p>
        </div>

        <div className="mx-3 p-4  bg-[#212244] flex flex-row justify-between rounded-xl text-[16px]  items-center space-x-2">
          <div className="flex flex-col space-y-1 justify-start items-center text-center">
            <svg
              data-v-df8a5f7b=""
              className="bg-gray-900 rounded-full h-8 p-1 w-8"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-df8a5f7b=""
                d="M16.8627 10.0543C17.1793 10.0543 17.496 9.896 17.496 9.50017C17.496 9.1835 17.2585 8.86683 16.8627 8.86683H15.8335V7.20433H16.8627C17.1793 7.20433 17.496 6.96683 17.496 6.571C17.496 6.25433 17.2585 5.93766 16.8627 5.93766H15.6752C15.2793 4.75016 14.2502 3.721 13.0627 3.32516V2.21683C13.0627 1.90016 12.8252 1.5835 12.4293 1.5835C12.1127 1.5835 11.796 1.821 11.796 2.21683V3.16683H10.0543V2.21683C10.0543 1.74183 9.81683 1.5835 9.50017 1.5835C9.1835 1.5835 8.86683 1.821 8.86683 2.21683V3.16683H7.20433V2.21683C7.20433 1.821 6.88766 1.5835 6.571 1.5835C6.25433 1.5835 6.01683 1.821 6.01683 2.21683V3.40433C4.75016 3.721 3.721 4.75016 3.32516 6.01683H2.21683C1.821 6.01683 1.5835 6.25433 1.5835 6.571C1.5835 6.88766 1.821 7.20433 2.21683 7.20433H3.16683V8.946H2.21683C1.821 8.946 1.5835 9.1835 1.5835 9.50017C1.5835 9.81683 1.821 10.1335 2.21683 10.1335H3.16683V11.8752H2.21683C1.90016 11.8752 1.5835 12.1127 1.5835 12.5085C1.5835 12.8252 1.821 13.1418 2.21683 13.1418H3.40433C3.721 14.2502 4.75016 15.2793 6.01683 15.6752V16.8627C6.01683 17.1793 6.25433 17.496 6.65016 17.496C6.96683 17.496 7.2835 17.2585 7.2835 16.8627V15.8335H9.02517V16.8627C9.02517 17.1793 9.26267 17.496 9.6585 17.496C9.97517 17.496 10.2918 17.2585 10.2918 16.8627V15.8335H12.0335V16.8627C12.0335 17.1793 12.271 17.496 12.6668 17.496C12.9835 17.496 13.3002 17.2585 13.3002 16.8627V15.6752C14.5668 15.2793 15.5168 14.3293 15.9127 13.0627H17.1002C17.4168 13.0627 17.7335 12.8252 17.7335 12.4293C17.7335 12.1127 17.496 11.796 17.1002 11.796H15.8335V10.0543H16.8627ZM13.6168 11.321C13.6168 12.5877 12.5877 13.696 11.321 13.696H7.67933C6.41266 13.696 5.30433 12.5877 5.30433 11.321V7.67933C5.30433 6.41266 6.41266 5.30433 7.67933 5.30433H11.2418C12.5085 5.30433 13.6168 6.41266 13.6168 7.67933V11.321Z"
                fill="#2AFE4E"
              ></path>
              <path
                data-v-df8a5f7b=""
                d="M8.02729 12.6668H10.973C11.9304 12.6668 12.6668 11.9304 12.6668 10.973V8.02729C12.6668 7.06993 11.9304 6.3335 10.973 6.3335H8.02729C7.06993 6.3335 6.3335 7.06993 6.3335 8.02729V10.973C6.40714 11.9304 7.14357 12.6668 8.02729 12.6668Z"
                fill="#2AFE4E"
              ></path>
            </svg>
            <p className="text-[#7080b3]">Total output</p>
            <p>1600 USDT</p>
          </div>
          <div className="flex flex-col space-y-1 justify-center items-center text-center">
            <svg
              data-v-df8a5f7b=""
              className="bg-gray-900 rounded-full h-8 p-1 w-8"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-df8a5f7b=""
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0669 5.49838C10.0669 7.37104 8.53451 8.87175 6.62228 8.87175C4.71075 8.87175 3.17764 7.37104 3.17764 5.49838C3.17764 3.62571 4.71075 2.125 6.62228 2.125C8.53451 2.125 10.0669 3.62571 10.0669 5.49838ZM1.4165 12.6915C1.4165 10.9579 3.81459 10.5242 6.62228 10.5242C9.44522 10.5242 11.8281 10.9729 11.8281 12.7078C11.8281 14.4413 9.42998 14.875 6.62228 14.875C3.79934 14.875 1.4165 14.4263 1.4165 12.6915ZM11.456 5.55953C11.456 6.51317 11.1635 7.40301 10.6506 8.14216C10.5973 8.21818 10.6444 8.32068 10.7373 8.33697C10.8662 8.35801 10.9986 8.3709 11.1337 8.37362C12.4783 8.40823 13.685 7.56048 14.0184 6.28375C14.5125 4.38937 13.0626 2.68843 11.2155 2.68843C11.0152 2.68843 10.8232 2.70879 10.6361 2.74612C10.6104 2.75155 10.5827 2.76377 10.5689 2.78549C10.5508 2.81332 10.564 2.84929 10.582 2.87305C11.1372 3.63528 11.456 4.56313 11.456 5.55953ZM13.6829 9.70579C14.5867 9.87888 15.1807 10.2311 15.4267 10.745C15.6353 11.1658 15.6353 11.6545 15.4267 12.0753C15.0504 12.8708 13.8361 13.1267 13.3641 13.1925C13.2664 13.2061 13.188 13.1246 13.1984 13.0283C13.4396 10.8237 11.5219 9.77842 11.0256 9.53814C11.0048 9.52661 11 9.51032 11.002 9.49946C11.0034 9.49267 11.0124 9.48181 11.0284 9.47977C12.102 9.45941 13.2567 9.60398 13.6829 9.70579Z"
                fill="#FC67FF"
              ></path>
            </svg>
            <p className="text-[#7080b3]">Participants</p>
            <p>132111</p>
          </div>
          <div className="flex flex-col space-y-1 justify-between items-center text-center">
            <svg
              data-v-df8a5f7b=""
              className="bg-gray-900 rounded-full h-8 p-1 w-8"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-df8a5f7b=""
                d="M13.125 14.25H1.875C1.625 14.25 1.375 14.0625 1.375 13.75C1.375 13.4375 1.5625 13.25 1.875 13.25H13.125C13.375 13.25 13.625 13.4375 13.625 13.75C13.625 14.0625 13.375 14.25 13.125 14.25Z"
                fill="#0085FF"
              ></path>
              <path
                data-v-df8a5f7b=""
                d="M3.5 5.25H2.5C2.1875 5.25 1.875 5.5 1.875 5.875V11.25C1.875 11.625 2.1875 11.875 2.5 11.875H3.5C3.875 11.875 4.12501 11.625 4.12501 11.25V5.875C4.12501 5.5 3.875 5.25 3.5 5.25Z"
                fill="#0085FF"
              ></path>
              <path
                data-v-df8a5f7b=""
                d="M8 3.25H7C6.6875 3.25 6.375 3.5 6.375 3.875V11.25C6.375 11.5625 6.6875 11.875 7 11.875H8C8.375 11.875 8.625 11.5625 8.625 11.25V3.875C8.625 3.5 8.3125 3.25 8 3.25Z"
                fill="#0085FF"
              ></path>
              <path
                data-v-df8a5f7b=""
                d="M12.5 1.25H11.5C11.1875 1.25 10.875 1.5625 10.875 1.875V11.25C10.875 11.5625 11.1875 11.875 11.5 11.875H12.5C12.8125 11.875 13.125 11.5625 13.125 11.25V1.875C13.125 1.5625 12.875 1.25 12.5 1.25Z"
                fill="#0085FF"
              ></path>
            </svg>
            <p className="text-[#7080b3]">Yesterday output</p>
            <p>1201 USDT</p>
          </div>
        </div>
        <div className="mx-3 p-4  bg-[#212244] flex flex-col justify-between rounded-xl text-[16px] space-y-2">
          <h1 className="font-semibold text-white text-[20px]">
            User Benefits
          </h1>
          <table className="overflow-y-scroll text-[14px] scrollable table-auto">
            <thead>
              <tr>
                <th className="text-left">Address</th>
                <th className="text-right">Quantity</th>
              </tr>
            </thead>
            <tbody className="overflow-y-scroll scrollable  max-h-[20px] ">
              {userData.map((user) => (
                <tr key={user.id}>
                  <td className="text-left">{user.address}</td>
                  <td className="text-right">{user.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FAQ />
        <div className="px-2">
          <button className="bg-[#6B54EB] w-full text-white py-4 px-3 rounded-md text-[12px]">
            Invite
          </button>
        </div>
      </section>
    </>
  );
}

const userData = [
  {
    id: 1,
    address: "0xa9***d213Fe",
    quantity: 20.11,
  },
  {
    id: 2,
    address: "0x8c***C46Ac",
    quantity: 100.05,
  },
  {
    id: 3,
    address: "0xbD***6a76eE",
    quantity: 88.15,
  },
  {
    id: 4,
    address: "0x0b***227c85",
    quantity: 10.26,
  },
  {
    id: 5,
    address: "0xa9***d213Fe",
    quantity: 12.29,
  },
  {
    id: 6,
    address: "0x94***857B14",
    quantity: 44.64,
  },
  {
    id: 7,
    address: "0x63***E26688",
    quantity: 92.18,
  },
  {
    id: 8,
    address: "0x56***1FfBf0",
    quantity: 83.39,
  },
  {
    id: 9,
    address: "0x8c***0C46Ac",
    quantity: 61.94,
  },
  {
    id: 10,
    address: "0x23***5880ce",
    quantity: 18.57,
  },
];
