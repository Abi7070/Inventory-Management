import React from 'react'
// import inventory1 from "./inventory1.png"
function Signup(){
    return(
        <div class="container">
            <div class="login">
                <form>
                    <h1>ONLINE INVENTORY MANAGEMENT SYSTEM</h1>
                    <h1>Sign Up</h1>
                    <hr/>
                    <p>WELCOME</p>
                    <label>First Name</label>
                    <input type="text" placeholder="Your FirstName here"></input>
                    <label>Last Name</label>
                    <input type="text" placeholder="Your LastName here"></input>
                    <label>Email</label>
                    <input type="text" placeholder="abc@exampl.com"></input>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your Password"></input>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Re-enter your Password"></input>
                    <button>Submit</button>
                    <p>
                        <a href="#">By clicking on the Submit button you agree to our terms and conditions and privacy policy</a>
                    </p>
                </form>
            </div>
            <div class="pic">
            {/* <img src={inventory1}/> */}
            </div>
        </div>
    )
}

export default Signup