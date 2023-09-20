import React from "react";

//  Since this is a template, everytime we call it somewhere eles it will render the template as is.

const AccountData = ({ zulu }) => {
  /* postOrder, cardNumber are the two arnormalies in this template,  */
  function Transact(num) {
    return (
      <div>
        {zulu.map((item) => {
          return (
            <div key={item.id}>
              <p>accountType: {item.transactions[num].type}</p>
              <p>amount: {item.transactions[num].amount}</p>
              <p>runningBalance: {item.transactions[num].runningBalance}</p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      {zulu.map((item) => {
        return (
          <div>
            <div key={item.id} className="accountData">
              <p>Bank Name: {item.bankName}</p>
              <p> account type: {item.productName}</p>
              <p> account Number: {item.accountNumber}</p>
              <p>ID: {item.id}</p>
              <p>{Transact(2)}</p>
            </div>

            <button>viewTransactions</button>
          </div>
        );
      })}
    </div>
  );
};

export default AccountData;

// there are 5transactions here, all stored in an array containint 5 objects
