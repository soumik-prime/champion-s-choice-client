import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/homepage/Home.jsx';
import LogIn from './components/authentication/LogIn.jsx';
import RegistrationForm from './components/authentication/RegistrationForm.jsx';
import AddEquipment from './components/equipmentForm/Addequipment.jsx';
import UpdateEquipmentInfo from './components/equipmentForm/UpdateEquipmentInfo.jsx';
import UpdateProfileInformation from './components/authentication/UpdateProfileInformation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<LogIn></LogIn>
      },
      {
        path:"/registration",
        element:<RegistrationForm></RegistrationForm>
      },
      {
        path:"/addequipment",
        element:<AddEquipment></AddEquipment>
      },
      {
        path:"/equipmentinformationupdate",
        element:<UpdateEquipmentInfo></UpdateEquipmentInfo>
      },
      {
        path:"/profileinformationupdate",
        element:<UpdateProfileInformation></UpdateProfileInformation>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
