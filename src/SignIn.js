import React, { useCallback, Component } from 'react';
import logo from './assets/FQM_branco.png';

// import { useAuth } from '../../hooks/auth';

import './styles.css'
import { Link } from 'react-router-dom';

export class SignIn extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <div className="AppSign">
            <div className='AppContentLeft'>
            
            <img src={logo} alt="FQM" className="AppContentLogo" />
            
            </div>
            <div className='AppContentRight'>
            <h1>Seja bem vindo(a) ao produto publi</h1>
            {/* <button className='buttonSign' type="button" onClick={handleSignIn}>Iniciar</button> */}
            <Link to="/home">
                <button className='buttonSign' type="button">Iniciar</button>
              </Link>
          </div>
          </div>
          </>
        )
    }


}

// const SignIn = () => {
//   const { signIn } = useAuth();

//   const handleSignIn = useCallback(() => {
//     const accessToken = localStorage.getItem('@AzureAd:accessToken');

//     if (!accessToken) {
//       signIn();
//     }
//   }, [signIn]);

//   return (
//       <div className="AppSign">
//       <div className='AppContentLeft'>

//       <img src={logo} alt="FQM" className="AppContentLogo" />
        
//       </div>
//       <div className='AppContentRight'>
//           <h1>Seja bem vindo(a) ao produto publi</h1>
//           {/* <button className='buttonSign' type="button" onClick={handleSignIn}>Iniciar</button> */}
//           <Link to="/home">
//             <button className='buttonSign' type="button">Iniciar</button>
//           </Link>
//       </div>
//     </div>
//   );
// };

// export default SignIn;