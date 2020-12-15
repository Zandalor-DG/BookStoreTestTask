import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { StateReduxType } from '../../../store/reducers';

type Props = React.PropsWithChildren<RouteProps>;

const PrivateRoute: React.FC<Props> = ({ children, ...rest }: Props) => {
    const user = useSelector((state: StateReduxType) => state.userState.user);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
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
