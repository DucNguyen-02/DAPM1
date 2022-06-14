import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import BlankLayout from './Layouts/BlankLayout'
import CommonLayout from './Layouts/CommonLayout'
import { publicRoutes } from './routes'
import PrivateRouter from './routes/PrivateRouter'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component
                        const Layout = route.layout ? BlankLayout : CommonLayout

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <PrivateRouter>
                                            <Page />
                                        </PrivateRouter>
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
