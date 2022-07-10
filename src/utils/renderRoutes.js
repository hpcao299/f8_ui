import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from '~/components/PrivateRoute';
import { DefaultLayout } from '~/layouts';

export function renderRoutes(routes, options) {
    return routes.map((route, index) => {
        const Page = route.component;
        let Layout = DefaultLayout;
        let Wrapper = Fragment;

        if (route.layout) {
            Layout = route.layout;
        }

        if (options?.private) {
            Wrapper = PrivateRoute;
        }

        return (
            <Route
                key={index}
                path={route.path}
                element={
                    <Wrapper>
                        <Layout {...route.props}>
                            <Page />
                        </Layout>
                    </Wrapper>
                }
            />
        );
    });
}
