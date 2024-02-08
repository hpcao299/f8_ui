import moment from 'moment';
import 'moment/locale/vi';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from '~/components/GlobalStyles';
import { privateRoutes, publicRoutes } from '~/routes';
import Notifications from './components/Notifications';
import NotFound from './pages/NotFound';
import { AuthWatcher, renderRoutes, ScrollToTop } from './utils';
import { SWRConfig } from 'swr';
import config from './config';

moment.locale('vi');

function App() {
    return (
        <HelmetProvider>
            <GlobalStyles>
                <SWRConfig value={config.swr.value}>
                    <div className="app">
                        <ScrollToTop />
                        <AuthWatcher />

                        <Routes>
                            {renderRoutes(publicRoutes)}
                            {renderRoutes(privateRoutes, { private: true })}

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>

                    <Notifications />
                </SWRConfig>
            </GlobalStyles>
        </HelmetProvider>
    );
}

export default App;
