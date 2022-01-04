import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import GamesList from './components/GamesList';
import AddGame from './components/AddGame';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='signin' element={<SignIn />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='profile' element={<Profile />} />
                <Route path='games' element={<GamesList />} />
                <Route path='addgame' element={<AddGame />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
