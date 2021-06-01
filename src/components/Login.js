import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';
class Login extends Component {
    constructor()
{    
    super();
    this.state = { 
        name:'',
        password:'',
     }
}
login()
{
    console.warn(this.state)
    fetch("http://localhost:3000/login?q="+this.state.name) .then((data)=>{
        data.json().then((resp)=>{
            console.warn(resp);
            if(resp.length>0)
           {
               localStorage.setItem('login',JSON.stringify(resp))
               console.warn(this.props.history.push('list'))

           }
           else
           {
               alert('Check UserName Password')
           }
             })
    })
}

render() { 
        return ( <div>
<NavBarMenu/>
<input name="user" placeholder="Enter Name" type="text" onChange={(event)=>this.setState({name:event.target.value})}/> <br/><br/>

<input name="password" placeholder="Enter Password" type="password" onChange={(event)=>this.setState({password:event.target.value})}/> 
<br/><br/>
        <button onClick={()=>{this.login()}}>Login</button>
        </div> );
    }
}
 
export default Login;