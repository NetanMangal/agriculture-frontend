/*import React from 'react';

const isAuthenticated = () => {
  if (
    localStorage.getItem('Token') !== undefined &&
    localStorage.getItem('username') === 'superadmin1@gmail.com'
  ) {
    return true;
  } else {
    return false;
  }
};

export default isAuthenticated;*/

// const withAuth = (Component) => {
//   const AuthRoute = () => {
//     const isAuth = !!localStorage.getItem('token');
//     if (isAuth) {
//       return <Component />;
//     } else {
//       return <Redirect to="/" />;
//     }
//   };

//   return AuthRoute;
// };

// export default withAuth;
