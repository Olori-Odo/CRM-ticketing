
import "./ticketForm.css"
// import {BiMessageSquareEdit} from 'react-icon/bi'


const TicketForm = () => {

    return(
        <section>
            
            <button id="ticketBtn" type = "">New Ticket</button>
            
            <div className= "complainOverview">

                <div>
                    <h3>Create Quick Ticket</h3>
                    <p>write and address new querries and issues</p>
                </div>

                <hr />

                <form >

                    <div className= "complainTicket">

                        <div>
                            <label>Customer Email</label>
                            <input type="text" placeholder="Type Email"/>
                        </div>

                        <div>
                            <label>Request Ticket Type</label><br></br>
                            <select label="Request Ticket Type" >
                                <option>Choose Type</option>
                                <option>Unable to Load</option>
                                <option>Unable to Call</option>
                                <option>Unable to Browse</option>
                            </select> 
                        </div>

                        <div>
                            <label>Priority Status</label><br></br>
                            <select label="Priority Status" >
                                <option>Choose Type</option>
                                <option>Unable to Load</option>
                                <option>Unable to Call</option>
                                <option>Unable to Browse</option>
                            </select> 
                        </div>

                        <div>
                            <label>Ticket Body</label>
                            <input id="complain" type="text" placeholder="Type Issue Here"/>                    
                        </div>
                    
                    </div>

                        <button id="submit">Submit</button>

                </form>

            </div>
              
        </section>
    )
}

export default TicketForm