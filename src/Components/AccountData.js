import React, { useState } from "react";

//  Since this is a template, everytime we call it somewhere eles it will render the template as is.

const AccountData = ({ zulu }) => {
  /* postOrder, cardNumber are the two arnormalies in this template,  */
  const [state, setState] = useState("");
  console.log("below is zulu data: ");
  console.log(zulu); // i actually have zulu-data in an array here. The next task is diplaying a balance

  return (
    <div>
      {zulu.map((item) => {
        return (
          <div key={item.id} className="accountData">
            <p>Bank Name: {item.bankName}</p>
            <p> account type: {item.productName}</p>
            <p> account Number: {item.accountNumber}</p>
            <div>{state}</div>

            <button // this we will use to change useState, this is what we we change to.
              onClick={() => {
                setState(() => {
                  const eachTransaction = item.transactions.map(
                    (transaction) => {
                      return (
                        <div key={transaction.id}>
                          <p>transaction type: {transaction.type}</p>
                          <p>transaction amount: {transaction.amount}</p>
                          <p>
                            transaction runningBalance:{" "}
                            {transaction.runningBalance}
                          </p>
                          <p>
                            transaction description: {transaction.description}
                          </p>
                        </div>
                      );
                    }
                  );
                  return (
                    <div>
                      {eachTransaction},{console.log(eachTransaction)},
                    </div>
                  );
                });
              }}
            >
              viewTransactions
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AccountData;

// there are 5transactions here, all stored in an array containint 5 objects
