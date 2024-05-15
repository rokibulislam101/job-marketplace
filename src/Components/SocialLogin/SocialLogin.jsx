import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin } = useContext(AuthContext);

  //Navigation System
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';

  const handleSocialLogin = socialProvider => {
    socialProvider().then(result => {
      if (result.user) {
        navigate(from);
      }
    });
  };
  return (
    <>
      <div className="my-5">
        <p className="text-xl mb-4 text-center">Login using social networks</p>
      </div>

      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn text-4xl"
        >
          <FcGoogle></FcGoogle>
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn text-4xl"
        >
          <FaGithub></FaGithub>
        </button>
        <button
          onClick={() => handleSocialLogin(twitterLogin)}
          className="btn text-4xl"
        >
          <FaTwitter></FaTwitter>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
