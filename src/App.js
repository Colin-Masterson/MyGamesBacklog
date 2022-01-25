import Landing from './components/pages/Landing';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import GamesList from './components/pages/GamesList';
import AddGame from './components/pages/AddGame';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='signin' element={<SignIn />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='profile/:id' element={<Profile />} />
                <Route path='games/:id' element={<GamesList />} />
                <Route path='addgame/:id' element={<AddGame />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
