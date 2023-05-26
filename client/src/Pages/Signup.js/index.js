import  {useState} from 'react'
import { ADD_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
const SignUp =() => {
    const [addUser] = useMutation(ADD_USER)
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      }  else {
        setPassword(inputValue);
      }
    };
  
    const handleFormSubmit = async (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
        try {
            const {data} = await addUser({
                variables: {email,password}
            })
            console.log(data)
            if(data.addUser.token){
                Auth.login(data.addUser.token)
            }
        } catch (error) {
            console.log(error)
        }
 

      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setPassword('');
      setEmail('');
    };
  
    return (
      <div>
        <p>Hello Bro</p>
        <form className="form">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
         
          <input
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>

      </div>
    );
  }
    

export default SignUp