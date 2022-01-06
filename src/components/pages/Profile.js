import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signout } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handler = () => {
        signout();
    };

    useEffect(() => {
        if (!user) navigate('/');
    }, [user]);
    return (
        <div>
            <input type='button' onClick={handler} value='Sign Out' />
        </div>
    );
}

export default Profile;
