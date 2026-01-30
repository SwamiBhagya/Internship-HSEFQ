import { FaHome, FaHardHat, FaFire, FaCog, FaPlus } from 'react-icons/fa';

export const SIDEBAR_MENU = [
  {
    id: 1,
    label: "Dashboard",
    path: "/",
    icon: <FaPlus />,
    type: "regular"
  },
  {
    id: 2,
    label: "Safety & Health",
    path: "/safety",
    icon: <FaHardHat />,
    type: "regular"
  },
  {
    id: 3,
    type: "divider"
  },
  {
    id: 4,
    label: "Report Incident",
    path: "/report",
    icon: <FaPlus />,
    type: "special"
  },
  {
    id: 5,
    label: "Fire Systems",
    path: "/fire",
    icon: <FaFire />,
    type: "disabled"
  },
  {
    id: 6,
    label: "Settings",
    path: "/settings",
    icon: <FaCog />,
    type: "disabled"
  }
];