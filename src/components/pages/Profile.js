import { useEffect } from 'react';
import Header from '../misc/Header';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Profile() {
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (loading) {
            return;
        }
    }, [user, loading]);

    return (
        <>
            <Header />
            <h3>Profile</h3>
        </>
    );
}

export default Profile;
