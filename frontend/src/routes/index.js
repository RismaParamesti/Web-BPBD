// All components mapping with path for internal routes

import { lazy } from "react";

const Welcome = lazy(() => import("../pages/protected/Welcome"));
const Page404 = lazy(() => import("../pages/protected/404"));
const Blank = lazy(() => import("../pages/protected/Blank"));
const ProfileSettings = lazy(() => import("../pages/protected/ProfileSettings"));
const GettingStarted = lazy(() => import("../pages/GettingStarted"));
const Profile = lazy(() => import("../pages/protected/profile"));

const Dashboards = lazy(() => import("../pages/protected/Dashboard"));

const EducationUnits = lazy(() => import("../pages/protected/educationUnit"));
const EducationUnitsCreate = lazy(() => import("../pages/protected/educationUnitCreate"));
const EducationUnitsEdit = lazy(() => import("../pages/protected/educationUnitEdit"));
const EducationUnitsDetail = lazy(() => import("../pages/protected/educationUnitDetail"));

const HealthFacilities = lazy(() => import("../pages/protected/healthFacility"));
const PublicHousings = lazy(() => import("../pages/protected/publicHousing"));
const Malls = lazy(() => import("../pages/protected/mall"));
const Hotels = lazy(() => import("../pages/protected/hotel"));
const Offices = lazy(() => import("../pages/protected/office"));

const Apartements = lazy(() => import("../pages/protected/apartement"));
const ApartementDetails = lazy(() => import("../pages/protected/apartementDetails"));

const UrbanVillages = lazy(() => import("../pages/protected/urbanVillage"));

const Education = lazy(() => import("../pages/protected/education"));
const EducationCreate = lazy(() => import("../pages/protected/educationCreate"));
const EducationEdit = lazy(() => import("../pages/protected/educationEdit"));
const EducationDetail = lazy(() => import("../pages/protected/educationDetails"));

const UserSuperAdmin = lazy(() => import("../pages/protected/DataAdminSuperAdmin"));
const AdminCreate = lazy(() => import("../pages/protected/DataAdminSuperAdminCreate"));
const AdminEdit = lazy(() => import("../pages/protected/DataAdminSuperAdminEdit"));

const AuditAdmin = lazy(() => import("../pages/protected/auditAdmin"));

const routes = [
  {
    path: "/welcome", // the url
    component: Welcome, // view rendered
  },
  {
    path: "/settings-profile",
    component: ProfileSettings,
  },
  {
    path: "/getting-started",
    component: GettingStarted,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
  {
    path: "/Profile",
    component: Profile,
  },

  {
    path: "/Dashboard", // the url
    component: Dashboards, // view rendered
  },
  {
    path: "/EducationUnit",
    component: EducationUnits,
  },
  {
    path: "/EducationUnit/Create",
    component: EducationUnitsCreate,
  },
  {
    path: "/EducationUnit/Edit/:id",
    component: EducationUnitsEdit,
  },
  {
    path: "/EducationUnit/Detail/:id",
    component: EducationUnitsDetail,
  },


  {
    path: "/HealthFacility",
    component: HealthFacilities,
  },
  {
    path: "/UrbanVillage",
    component: UrbanVillages,
  },
  {
    path: "/Mall",
    component: Malls,
  },
  {
    path: "/Hotel",
    component: Hotels,
  },
  {
    path: "/Office",
    component: Offices,
  },
  {
    path: "/PublicHousing",
    component: PublicHousings,
  },
  {
    path: "/Apartement",
    component: Apartements,
  },
  {
    path: "/Apartement/Details",
    component: ApartementDetails,
  },

  {
    path: "/UrbanVillages",
    component: UrbanVillages,
  },


  {
    path: "/Education",
    component: Education,
  },
  {
    path: "/Education/Create",
    component: EducationCreate,
  },
  {
    path: "/Education/Edit",
    component: EducationEdit,
  },
  {
    path: "/Education/Details",
    component: EducationDetail,
  },


  {
    path: "/SuperAdmin/DataAdmin",
    component: UserSuperAdmin,
  },
  {
    path: "/SuperAdmin/AdminCreate",
    component: AdminCreate,
  },
  {
    path: "/SuperAdmin/AdminEdit/:id",
    component: AdminEdit,
  },


  {
    path: "/SuperAdmin/AuditAdmin",
    component: AuditAdmin,
  },

  
];

export default routes;
