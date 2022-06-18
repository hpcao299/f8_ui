import { Route, Routes } from 'react-router-dom';
import GlobalStyles from '~/components/GlobalStyles';
import { DefaultLayout } from '~/layouts';
import { publicRoutes } from '~/routes';

function App() {
    return (
        <GlobalStyles>
            <div className="app">
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
                                    <Layout>
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
