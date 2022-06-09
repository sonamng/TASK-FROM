
import React,{Component} from "react";
class Form extends Component{
    render(){
        return(
            <div className="main">
                <form>
                    <h1 className="heading">Registration Form</h1>
                    <label>First Name</label>
                    <input className="input" text="text"/><br/>

                    <label>Last_Name</label>
                    <input className="inputsecond" text="text"/><br/>

                    <label>Address</label>
                    <input className="inputthrid"  text="text"/><br/>

                    <label>Password</label>
                    <input className="inputfour"  text="text"/><br/>

                    <label>Conform_Password</label>
                    <input className="inputfive"  text="text"/><br/>

                    <label>Phone_No</label>
                    <input className="inputsix"  text="text"/><br/>

                    <label>E_mail</label>
                    <input className="inputseven"  text="text"/><br/>

                    <label>Cuurent_Date</label>
                    <input className="inputeight"  text="text"/><br/>

                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;