import { Route, Routes } from 'react-router-dom';
import GlobalStyles from '~/components/GlobalStyles';
import { DefaultLayout } from '~/layouts';
import { publicRoutes } from '~/routes';
import { AuthWatcher, ScrollToTop } from './utils';

function App() {
    return (
        <GlobalStyles>
            <div className="app">
                <ScrollToTop />
                <AuthWatcher />

                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout {...route.props}>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </GlobalStyles>
    );
}

export default App;
