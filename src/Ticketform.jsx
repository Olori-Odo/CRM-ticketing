import "./Ticketform.css"

const Ticketform = () => {

    return(
        <>
    
        <button id="ticketbtn"  type="">New Ticket</button>
        <div>
            <div>
                <h3>Create Quick Ticket</h3>
                <p>write and address new querries and issues</p>

            </div>
            <form classname="complainoverview">
            <div classname= "complainTicket">
                <div>
                    <label >customer email</label>
                    <input type="text" placeholder="Type Email" />


                </div>

                <div>
                    <label >Request Ticket Type</label> 
                    <input type="text" placeholder="Choose Type" />

                </div>
                <div>
                    <label>priority status</label>
                    <input type="text" placeholder="Select Status" />
                    
                </div>
                {/* <Dropdown label= "Dropdown button" dismissonClick={false}>
                    <Dropdown.item>Dashboard</Dropdown.item>
                    <Dropdown.item>Settings</Dropdown.item>
                    <Dropdown.item>Earnings</Dropdown.item>
                    <Dropdown.item>Signout</Dropdown.item>

                
                </Dropdown> */}
                <div>
                    <label>Ticket Body</label>
                </div>
                <textarea id="Complain"type="text" placeholder="Type issue"/>

            </div>

            <button id="submit">Submit</button>

            </form>



        </div>
        
        

        
        
        </>



    )



}
export  default Ticketform
