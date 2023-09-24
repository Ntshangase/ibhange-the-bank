import React, { useState } from "react";

//  Since this is a template, everytime we call it somewhere eles it will render the template as is.

const AccountData = ({ zulu }) => {
  /* postOrder, cardNumber are the two arnormalies in this template,  */
  const [state, setState] = useState("");

  // the first thing is let balance = 0.00;
  const [balance, setBalance] = useState(0.0); // when you have a hammer, everything becomes a nail.

  // add transaction
  const [addTransaction, setAddTransaction] = useState("");

  return (
    <div>
      {zulu.map((item) => {
        return (
          <div key={item.id} className="accountData">
            <p>Bank Name: {item.bankName}</p>
            <p> account type: {item.productName}</p>
            <p> account Number: {item.accountNumber}</p>
            <p>Balance Amount: R{balance}</p>
            <div>{state}</div>{" "}
            {/**an useless/invisible state div, they should be a better way to do this */}
            <button
              onClick={() => {
                // updateBalance button using state
                let price = 0.0;
                for (let i = 0; i < item.transactions.length; i++) {
                  const value = item.transactions[i].amount;
                  // we need a if-loop to dertermine if credit or debit.
                  if (item.transactions[i].type === "CREDIT") {
                    price = price + value;
                  } else {
                    price = price - value;
                  }
                  console.log(price);
                }
                setBalance(price);
              }}
            >
              updateBalance
            </button>
            {/**User transaction to increase-decrease bank balance. */}
            {/**This should take input from user: type,amount,runningBalance,description, id(unique) */}
            <div>{addTransaction}</div>
            <button
              onClick={() => {
                setAddTransaction(() => {
                  return (<div>
                    <form>
                      <label>
                        Type <input type="text" name="type" />{" "}
                      </label>
                      <label>
                        Amount <input type="number" name="amount" />{" "}
                      </label>
                      <label>
                        description <input type="text" name="description" />
                      </label>
                      <label>
                        Id <input type="text" name="id" />
                      </label>
                      <button
                        type="button"
                        onClick={() => {console.log("submited form")}}
                      >
                        Submitt
                      </button>
                    </form>
                  </div>);
                });
              }}
            >
              addTransaction
            </button>
            {/** to display all transactions from bankAccount */}
            <button
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
                  return <div>{eachTransaction}</div>;
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

// there are 5transactions here, all stored in an array containing 5 objects
