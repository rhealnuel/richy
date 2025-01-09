import React from 'react'

const Details = () => {
  return (
         <form class="payment" method="post" action="send_email.php">
                <h1 class="payTitle">Personal Information</h1>
                <label>Name and Surname</label>
                <input type="text" placeholder="John Doe" class="payInput" id="name" name="name"/>
                <label>Phone Number</label>
                <input type="text" placeholder="+1 234 5678" class="payInput" id="number" name="number"/>
                <label>Email</label>
                <input type="email" placeholder="example@mail.com" class="payInput" id="email" name="email"/>
                <label>Full Address</label>
                <input type="text" placeholder="23, john street, london" class="payInput" id="address" name="address"/>
                <label>Amount Paid</label>
                <input type="text" al class="payInput" id="payment" name="image" placeholder='$1,000'/>
                {/* <label>Desired Shipping Date</label>
                <input type="date" placeholder="20/12/2012" class="payInput" id="date" name="date"/> */}
                
                
                <input type="submit" name="submit" value="Send your Details" id="payButton"></input>
                <span class="close"><a href="/">X</a></span>
        </form>
  )
}

export default Details