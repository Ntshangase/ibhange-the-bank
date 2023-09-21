import React from 'react'

function Balance() {
    
  return (
    <div>
        <h1>Hello World</h1>
        {/*the assumption is that since the button isn't pressesed 
        then this won't work*/}
        {console.log("j")} 
        <p>This is the amount: </p>
    </div>
  )
}

export default Balance

/**As i close shop, I can get the amount to an array, I just need to figure out how to 
 * like add them together and have balance.
 */