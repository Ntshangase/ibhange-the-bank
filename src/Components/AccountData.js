import React from 'react'

const AccountData = ({ zulu }) => { 

    return (
        <div>
            {zulu.map((item) => {
                return (
                    <div key={item.id} >
                        <h2>{item.accountNumber}</h2>
                        <div>{item.account}</div>
                        <div>{item.email}</div>
                        <div>{item.phone}</div>
                        <div>{item.address}</div>
                        <div>{item.city}</div>
                        <div>{item.state}</div>
                        <div>{item.zip}</div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default AccountData