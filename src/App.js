import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {
    // const ref = useRef()
    // const location = useLocation();
    // useEffect(() => {
    //     ref.current.scrollIntoView({ behavior: "smooth" });
    // }, [location]);

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

                    {/* dashboard start */}

                    <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
                        <Route path='my-profile' element={<MyProfile />}></Route>
                        <Route path='my-profile/:profileId' element={<EditProfileInfo />}></Route>
                        <Route path='my-order' element={<MyOrder />}></Route>
                        <Route path="payment/:orderId" element={<Payment />}></Route>
                        <Route path='add-review' element={<ReviewHere />}></Route>

                        {/* admin */}

                        <Route path='users' element={<RequireAdmin>
                            <AllUsers />
                        </RequireAdmin>}></Route>
                        <Route path='add-product' element={<RequireAdmin>
                            <AddProduct />
                        </RequireAdmin>}></Route>
                        <Route path='manage-order' element={<RequireAdmin>
                            <ManageOrders />
                        </RequireAdmin>}></Route>
                        <Route path='manage-product' element={<RequireAdmin>
                            <ManageProducts />
                        </RequireAdmin>}></Route>
                        <Route path='manage-reviews' element={<RequireAdmin>
                            <ManageReviews />
                        </RequireAdmin>}></Route>

                        {/* admin */}

                    </Route>


                    {/* dashboard end */}


                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
                <Toaster />
        </Navbar>
    );
};

export default App;