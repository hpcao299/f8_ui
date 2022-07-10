import { Routes } from 'react-router-dom';
import GlobalStyles from '~/components/GlobalStyles';
import { privateRoutes, publicRoutes } from '~/routes';
import { AuthWatcher, renderRoutes, ScrollToTop } from './utils';

function App() {
    return (
        <GlobalStyles>
            <div className="app">
                <ScrollToTop />
                <AuthWatcher />

                <Routes>
                    {renderRoutes(publicRoutes)}
                    {renderRoutes(privateRoutes, { private: true })}
                </Routes>
            </div>
        </GlobalStyles>
    );
}

export default App;
