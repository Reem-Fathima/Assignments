import React, { Component } from 'react'

export class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            age:'',
            company:''
             
        };
    }


    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(this.state);
       
        this.setState({
          name: '',
          age: '',
          company: ''
        });
      };
    
      render() {
        const { name, age, company } = this.state;
    
        return (
          <div>
            <h2>Register</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={age}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label>Company:</label>
                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        );
      }
}
export default Register;