import React from "react";

class Conditionreact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isloggedin: false
        }
    }
login =  () => {
    this.setState({isloggedin: true})
}
logout = () => {
    this.setState({isloggedin: false})
}
    render(){
        let { isloggedin } = this.state
        if (isloggedin) {
            return(
                <>

                <h2>user is logged in<button onClick={this.logout}>Logout</button> </h2>
               
                </>
            )
        }else{
            return(
                <>
                <div className="container">
                    <div className="google"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStFxuzptufscwaOKU8V9z3znpla9gRMxZYjQ&usqp=CAU" className="img1" alt="google" /></div>
                <p className="text">One account, All of Google.</p>
                <h3>sign in to create to Gmail</h3>
                <div className="box">
                    <div className="profile">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="img-profile" alt="candidate" />
                    </div>
                    <from>
                    <label for="email"></label>
            <input type="text" placeholder="email" id="email"/>
            <label for="password"></label>
            <input type="number" placeholder="email password" id="password"/> <br/><br/>
            <h2> <button onClick={this.login}>Sign in</button> </h2>

                    </from>
                </div>
                </div>
                </>
            )
        }
    }
}
export default Conditionreact

















