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
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Demandes from "views/examples/Demandes";
import Service from 'views/examples/personnels/Service'

import Direction from 'views/examples/personnels/Direction';
import Division from 'views/examples/personnels/Division'
import Departement from 'views/examples/personnels/Department'

import EditDep from 'components/forms/Departement'


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },

  {
    path: "/demandes",
    name: "Demandes",
    icon: "ni ni-planet text-blue",
    component: Demandes,
    layout: "/admin",
  },
  {
    path: "/Service",
    name: "Service",
    icon: "ni ni-planet text-blue",
    component: Service,
    layout: "/admin",
  }, {
    path: "/Direction",
    name: "Direction",
    icon: "ni ni-planet text-blue",
    component: Direction,
    layout: "/admin",
  }, {
    path: "/Division",
    name: "Division",
    icon: "ni ni-planet text-blue",
    component: Division,
    layout: "/admin",
  },
  {
    path: "/Departement",
    name: "Departement",
    icon: "ni ni-planet text-blue",
    component: Departement,
    layout: "/admin",
  },
 
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];

export const others = [  {
  path: "/editDep",
  name: "EditDep",
  icon: "ni ni-circle-08 text-pink",
  component: EditDep,
  layout: "/auth",
},
{
  path: "/register",
  name: "Register",
  icon: "ni ni-circle-08 text-pink",
  component: Register,
  layout: "/auth",
},
{
  path: "/register",
  name: "Register",
  icon: "ni ni-circle-08 text-pink",
  component: Register,
  layout: "/auth",
},
]


export default routes;
