import Admin from "@/pages/Admin";
import SignIn from "@/pages/Authentication/SignIn";
import Dashboard from "@/pages/Dashboard";
import EventList from "@/pages/events";
import InterestList from "@/pages/interests";
import NeighborhoodList from "@/pages/Neighborhood";
import NotFound from "@/pages/NotFound";
import PlaceList from "@/pages/place";
import SelfAssessment from "@/pages/self-assessment";
import UserList from "@/pages/Users";


export const publicRoutes = [
  { path: "/auth/login", element: <SignIn /> },
  { path: "*", element: <NotFound /> },

];

export const privateRoutes = [
  { path: "/", element: <Dashboard /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/user/list", element: <UserList /> },
  { path: "/user/admin/list", element: <Admin /> },
  { path: "/events", element: <EventList /> },
  { path: "/place", element: <PlaceList /> },
  { path: "/neighborhood", element: <NeighborhoodList /> },
  { path: "/interests", element: <InterestList /> },
  { path: '/self-assessment', element: <SelfAssessment/>}

];
