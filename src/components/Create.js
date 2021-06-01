import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';
class Create extends Component {
 constructor()
 {
     super();
     this.state={
         name:null
         ,email:null
         ,address:null
         ,rating:null
     }
 }
    create(){
        fetch("http://localhost:3000/resturant",{
            method:"Post",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((res)=>{
                alert("Resturant has been added")
            })
        }) 
        
    }
    render() { 
        return (  <div><NavBarMenu/>
         <div>   <input onChange={(event)=>{this.setState({name:event.target.value})}}
         placeholder="resturant Name"/><br/><br/>
         <input onChange={(event)=>{this.setState({email:event.target.value})}}
         placeholder="resturant Email"/><br/><br/>
<input onChange={(event)=>{this.setState({rating:event.target.value})}}
         placeholder="resturant Rating"/>    <br/><br/>     
         <input onChange={(event)=>{this.setState({address:event.target.value})}}
         placeholder="resturant Address"/> <br/><br/>
         <button onClick={()=>{this.create()}}>Add Resturant</button>
         </div>
         </div>
         ); }
}
 
export default Create;