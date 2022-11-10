import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import About from './pages/About/About';
import Login from './pages/Account/Login';
import RequireAdmin from './pages/Account/RequireAdmin';
import RequireAuth from './pages/Account/RequireAuth';
import SignUp from './pages/Account/Signup';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageOrders from './pages/Dashboard/Order/ManageOrders';
import MyOrder from './pages/Dashboard/Order/MyOrder';
import Payment from './pages/Dashboard/Order/Payment';
import AddProduct from './pages/Dashboard/Product/AddProduct';
import ManageProducts from './pages/Dashboard/Product/ManageProducts';
import EditProfileInfo from './pages/Dashboard/Profile/EditProfileInfo';
import MyProfile from './pages/Dashboard/Profile/MyProfile';
import ManageReviews from './pages/Dashboard/Review/ManageReviews';
import ReviewHere from './pages/Dashboard/Review/ReviewHere';
import AllUsers from './pages/Dashboard/Users/AllUsers';
import Analysis from './pages/Home/Features/Analysis';
import Planning from './pages/Home/Features/Planning';
import QuickResponse from './pages/Home/Features/QuickResponse';
import Strategy from './pages/Home/Features/Strategy';
import Home from './pages/Home/Home';
import ToolDetail from './pages/Home/ToolDetail';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';

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