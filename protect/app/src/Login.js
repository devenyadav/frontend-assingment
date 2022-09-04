
import {useNavigate,useEffect} from 'react';
function Login() {
    const Login=()=>{
        localStorage.setItem('Login',true);
        navigate('/');
    }
    const navigate=useNavigate();
    useEffect(()=>{
        let Login=localStorage.getItem('Login');
        if(Login){
        
            navigate('/');
        }
            });


    return (
        <div>
            <h1>login page</h1>
            <input type="text "/><br/> 
            <input type="text "/> <br/>
            <button onClick={Login}>Login</button>

        </div>
  
    )
}
export default Login;