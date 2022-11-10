import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {
    

    return (
        <Navbar>
                {/* <div ref={ref}></div> */}

                <Routes >
                    <Route path='/' element={<Home />}>
                        <Route path='/' element={<QuickResponse />}></Route>
                        <Route path='/planning' element={<Planning />}></Route>
                        <Route path='/analysis' element={<Analysis />}></Route>
                        <Route path='/strategy' element={<Strategy />}></Route>
                    </Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/tool/:toolId' element={
                        <RequireAuth><ToolDetail /></RequireAuth>
                    }></Route>
                    <Route path='/blog' element={<Blog />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/portfolio' element={<MyPortfolio />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>

                    


                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
                <Toaster />
        </Navbar>
    );
};

export default App;