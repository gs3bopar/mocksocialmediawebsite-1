import AdminLogin from './Admin/AdminLogin/AdminLogin';
import UserLogin from './User/UserLogin/UserLogin';
import UserLoginWithQualtricsId from './User/UserLogin/UserLoginWithQualtricsId';
import UserResponse from './User/UserResponse/UserResponse';
import AdminPortal from './Admin/AdminPortal/AdminPortalDrawer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomSnackbar from './Common/Snackbar';
import "./App.css";

function App() {
  return (
    <>
    <div className="wrapper">
      <CustomSnackbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin/configure">
            <AdminPortal />
          </Route>
          <Route exact path="/admin">
            <AdminLogin />
          </Route>
          <Route exact path="/:accessCode/user-response">
            <UserResponse />
          </Route>
          <Route exact path="/:accessCode/participantId">
            <UserLoginWithQualtricsId />
          </Route>
          <Route exact path="/:accessCode?">
            <UserLogin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
