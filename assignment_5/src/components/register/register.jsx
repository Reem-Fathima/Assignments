import "./register.css"
export default function Register(){
    return (
        <body>

        <div class="container">
            <form id="form">
                <h3>Registration</h3>
                
                <div class="form-group">
                    <label for="name"></label>
                    <input type="text" id="name" name="name" required placeholder="User Name" ></input>
                </div>
                <div class="form-group">
                    <label for="name"></label>
                    
                    <input type="name" id="fname" name="fname" required placeholder="First Name"></input>
                </div>
        
                <div class="form-group">
                    <label for="lname"></label>
                    <input type="name" id="lname" name="lname" required placeholder="Last Name"></input>
                </div>
        
                <div class="form-group">
                    <label for="password"></label>
                    <input type="password" id="password" name="password" required placeholder="Password" 
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                    title="Must contain at least one number,  
                                one uppercase and lowercase letter, and at least 6 characters"></input>
                </div>
        
                <div class="form-group">
                    <label for="password"></label>
                    <input type="password" id="password" name="password" required placeholder="Confirm Password"></input>
                </div>
        
                <div class="form-group">
                    <h4>Select your gender</h4>
     
                     <input type="radio" id="male" name="gender" value="male"></input>
                     <label for="male">Male</label><br></br>
                    <input type="radio" id="female" name="gender" value="female"></input>
                    <label for="female">Female</label><br></br>
        
                </div>
                <div class="form-group">
                    <div class="d">
                    <label for="date">Date Of Birth<span class="required">*</span></label>
                    <input type="date" id="date" name="date" required/>
                </div>
                </div>
              
        
        <div>
            
            
        
        
       
        
        
        </div>
                
                <button  type="button">Register</button>
            
            </form>
            <div class="all">
                Already have an account?<a href="login.html">Login here</a>
            </div> 
        </div>
        
        
        </body>
    )
}