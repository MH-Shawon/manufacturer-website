import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
const Login = () =>
{

  const [ signInWithGoogle, user, ] = useSignInWithGoogle( auth );

  if ( user )
  {
    console.log( user )
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <div className="divider lg:divider-horizontal">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline">continue with google</button>




        </div>
      </div>
    </div>
  );
};

export default Login;