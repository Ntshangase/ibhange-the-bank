import React, { useState } from "react";

//  Since this is a template, everytime we call it somewhere eles it will render the template as is.

const AccountData = ({ zulu }) => {
  /* postOrder, cardNumber are the two arnormalies in this template,  */
  const [state, setState] = useState("");
  
 // the first thing is let balance = 0.00;
  const [balance, setBalance] = useState(0.00); // when you have a hammer, everything becomes a nail.

  return (
    <div>
      {zulu.map((item) => {
        return (
          <div key={item.id} className="accountData">
            <p>Bank Name: {item.bankName}</p>
            <p> account type: {item.productName}</p>
            <p> account Number: {item.accountNumber}</p>
            <p>Balance Amount: R{balance}</p>
            <div>{state}</div>
            <button onClick={() => { 
              setBalance(() => {
                  for (let i=0; i < item.transactions.length; i++) {
                    let price = 0.00
                    const value = item.transactions[i].amount;
                    price = price + value
                    return price // i didn't even think this was legal i just did it.
                  }
              })
            }}>updateBalance</button>

            <button // this we will use to change useState, this is what we we change to.
              onClick={() => {
                setState(() => {
                  const eachTransaction = item.transactions.map(
                    (transaction) => {
                     // this is alrady a loop so i don't need to lopp over it again
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
                      {eachTransaction}
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
