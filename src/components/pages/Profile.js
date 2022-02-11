import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getData, auth } from '../../firebase';
import Header from '../misc/Header';
import Loader from '../misc/Loader';

function Profile() {
    const [user, loading] = useAuthState(auth);
    const [userdata, setUserData] = useState([]);
    useEffect(() => {
        if (loading) {
            return <Loader />;
        }

        getData(user).then((data) => {
            setUserData(data);
        });
    }, [user, loading]);

    const {
        totalgames,
        inprogress,
        backlog,
        finished,
        completed,
        playing,
        username,
    } = userdata;

    if (playing) {
        return (
            <>
                <Header />
                <section className='profile'>
                    <div className='container grid'>
                        <div className='stats main'>
                            <h2>{username}'s Stats</h2>

                            <div>
                                <div className='stat'>
                                    <h4>Total Games:</h4>
                                    <h5>{totalgames}</h5>
                                </div>
                                <div className='stat'>
                                    <h4>Backlog:</h4>
                                    <h5>{backlog}</h5>
                                </div>
                                <div className='stat'>
                                    <h4>In Progress:</h4>
                                    <h5>{inprogress}</h5>
                                </div>
                                <div className='stat'>
                                    <h4>Finished:</h4>
                                    <h5>{finished}</h5>
                                </div>
                                <div className='stat'>
                                    <h4>Completed:</h4>
                                    <h5>{completed}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='stats games'>
                            <h2>Games In Progress</h2>
                            <div className='list'>
                                {playing.map((data) => {
                                    return (
                                        <div
                                            key={data.game_id}
                                            className='stat'
                                        >
                                            <h4>{data.gamename}</h4>
                                            <h5>{data.gamesystem}</h5>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* <div className='stats systems'>
                            <h2>Games In Progress</h2>
                            <div className='list'>
                                h
                            </div>
                        </div> */}
                    </div>
                </section>
            </>
        );
    } else {
        return <Loader />;
    }
}

export default Profile;
