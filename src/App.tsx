import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CravingLogger from './pages/CravingLogger';
import DailyCheckin from './pages/DailyCheckin';
import WeeklyReview from './pages/WeeklyReview';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Login from './pages/Login';
import useAuth from './hooks/useAuth';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <AuthProvider>
            <DataProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <Layout>
                                        <Dashboard />
                                    </Layout>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/log-craving"
                            element={
                                <PrivateRoute>
                                    <Layout>
                                        <CravingLogger />
                                    </Layout>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/check-in"
                            element={
                                <PrivateRoute>
                                    <Layout>
                                        <DailyCheckin />
                                    </Layout>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/review"
                            element={
                                <PrivateRoute>
                                    <Layout>
                                        <WeeklyReview />
                                    </Layout>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/analytics"
                            element={
                                <PrivateRoute>
                                    <Layout>
                                        <Analytics />
                                    </Layout>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/settings"
                            element={
                                <PrivateRoute>
                                    <Layout>
                                        <Settings />
                                    </Layout>
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </Router>
            </DataProvider>
        </AuthProvider>
    );
}

export default App;