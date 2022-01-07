import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signout } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Header from '../misc/Header';

function Profile() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate('/');
    }, [user]);
    return (
        <>
            <Header />
        </>
    );
}

export default Profile;
