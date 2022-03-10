import React, { useRef, useEffect, useState } from "react";
import { ethers } from "ethers";
import Axios from "axios";

import "./styles.css";
const AnimatingButton = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [check, setcheck] = useState(null);

  const newonce = () => {
    setErrorMessage(null);
    Axios.post("http://localhost:8080/newpost", {
      email_id: defaultAccount,
    });
  };
  const checkHandler = () => {
    connectWalletHandler();

    if (!defaultAccount) {
      console.log("Connect to wallet");
      setErrorMessage("Connect to wallet");
      // localStorage.setItem("Error", errorMessage);
      return;
    }
    connectWalletHandler();

    if (userBalance > 0.2) {
      console.log("Low Balance");
      setErrorMessage("Low balance");

      return;
    } else {
      setcheck(!check);
    }
    newonce();
  };
  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
          setConnButtonText("Connected");
        });
    } else {
      setErrorMessage("Install Metamask");
    }
  };
  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);

    getUserBalance(newAccount.toString());
  };
  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };
  const chainChangedHandler = () => {
    window.location.reload();
  };
  window.ethereum.on("accountChanged", accountChangeHandler);
  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <div className="body">
      {!check && (
        <div className="position-check">
          <button className="btnnew" onClick={checkHandler}>
            I'm in
          </button>
          <label className="label"> {errorMessage}</label>
        </div>
      )}
      {check && (
        <div onClick={checkHandler} className="checkDiv">
          <div className="checkmark-container">
            <svg
              x="0px"
              y="0px"
              fill="none"
              className="checkmark-svg"
              viewBox="0 0 25 30"
            >
              <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
            </svg>
          </div>
          <label className="label"> {errorMessage}</label>
        </div>
      )}
    </div>
  );
};

export default AnimatingButton;
