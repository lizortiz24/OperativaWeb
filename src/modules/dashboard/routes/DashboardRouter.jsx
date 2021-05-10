import React from 'react';

//router
import { Route, Switch } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from '../../../routers/PrivateRoute';

//Pages
import Dashboard from '../pages/Dashboard';
import DataTableUser from '../components/DataTableUser'; //cambiar a page
import EditPosition from '../pages/EditPosition';
import ListPostulants from '../pages/ListPostulants';
import ApplicantProfile from '../pages/ApplicantProfile';
import Profile from '../pages/Profile';
import showPositionDetail from '../pages/PositionDetails';
import ChangePassword from '../pages/ChangePassword';
import Users from '../pages/Users'; 
import History from '../pages/History';
import Republish from '../pages/Republish';
// import Home from '../components/Home'; //cambiar a page

const MyAccountRouter = () => {
    return (
        <>
            <Switch>
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[0]}
                    component={Dashboard} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[1]}
                    component={Dashboard} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[2]}
                    component={Profile} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[3]}
                    component={Profile} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[4]}
                    component={Users} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[5]}
                    component={Users} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[6]}
                    component={EditPosition} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[7]}
                    component={EditPosition} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[8]}
                    component={ListPostulants} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[9]}
                    component={ListPostulants} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[10]}
                    component={ApplicantProfile} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[11]}
                    component={ApplicantProfile} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[12]}
                    component={showPositionDetail} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[13]}
                    component={showPositionDetail} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[14]}
                    component={ChangePassword} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[15]}
                    component={ChangePassword} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[16]}
                    component={History} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[17]}
                    component={History} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[18]}
                    component={Republish} />
                <PrivateRoute
                    needSession
                    exact
                    path={DashboardRoutes[19]}
                    component={Republish} />
            </Switch>
        </>
    );
};
export default MyAccountRouter;