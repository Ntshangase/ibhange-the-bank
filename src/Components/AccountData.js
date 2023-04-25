import React from "react";

//  Since this is a template, everytime we call it somewhere eles it will render the template as is.

const AccountData = ({ zulu }) => {
  return (
    <div>
      {zulu.map((item) => {
        return (
          <div key={item.id} className="accountData">
            <p>{item.productName}</p>
            <p> account: {item.accountNumber}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AccountData;
