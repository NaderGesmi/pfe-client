/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import axios from "axios";
import {others } from 'routes.js';
import EditDep from 'components/forms/Departement'

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  const [user, setUser] = useState(true);

  React.useEffect(() => {
    getUser();
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    //mainContent.current.scrollTop = 0;
  }, [location]);



  async function getUser() {

    try {

      await axios.get('https://pfe-cims.herokuapp.com/user/user', {
        headers: {
          'Content-Type': 'Application/json'
        },
        withCredentials: true
      }).then((res) => {

        var result = res.data;
        console.log(result);
        if (res.data.auth) {
          console.log('rahi mawjooda');
          setUser(true);
        } else {
          console.log('rahi false');

          setUser(false);
        }

      }).catch(error => {
        setUser(false);
        alert(`error:: ${error}`);
      })

    } catch (error) {
      console(`erroer user:: ${error}`);
      setUser(false)

    }


  }


  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getOtherRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };


  if (!user) {
    console.log(user);
    return <Redirect to='/singin' />
  }

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/argon-react.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />


        <Switch >
          {getRoutes(routes)}
          {getOtherRoutes(others)}
<Route 
path='/admin/editDep'
component={EditDep}
/>

          <Redirect from="*" to="/admin/index" />
        </Switch>
        <Container fluid >
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
