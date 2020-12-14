import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { StateReduxType } from '../../../store/reducers';

interface PropsProvateRoute {
    [x: string]: any;
}

type Props = React.PropsWithChildren<RouteProps>;

const PrivateRoute: React.FC<Props> = ({ children, ...rest }: Props) => {
    const isAuthorized = useSelector((state: StateReduxType) => state.userState.isAuthorized);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthorized ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
