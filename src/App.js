import { HelmetProvider } from 'react-helmet-async';
import { Routes } from 'react-router-dom';
import GlobalStyles from '~/components/GlobalStyles';
import { privateRoutes, publicRoutes } from '~/routes';
import Notifications from './components/Notifications';
import { AuthWatcher, renderRoutes, ScrollToTop } from './utils';

function App() {
    return (
        <HelmetProvider>
            <GlobalStyles>
                <div className="app">
                    <ScrollToTop />
                    <AuthWatcher />

                    <Routes>
                        {renderRoutes(publicRoutes)}
                        {renderRoutes(privateRoutes, { private: true })}
                    </Routes>
                </div>

                <Notifications />
            </GlobalStyles>
        </HelmetProvider>
    );
}

export default App;
