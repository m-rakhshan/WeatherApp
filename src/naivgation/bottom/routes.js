import colors from "../../constants/colors";
import { List, Weather, Map, AddTask } from "../../screens";
import { MapIcon, CloudSunIcon, ListTreeIcon } from "lucide-react-native";

export const tabScreens = [
  {
    id: 1,
    name: "Weather",
    component: Weather,
    option: { title: "Current Weather" },
    icon: (size = 20, color = colors.black) => <CloudSunIcon size={size} color={color} />,
  },
  {
    id: 2,
    name: "Map",
    component: Map,
    option: { title: "Map" },
    icon: (size = 20, color = colors.black) => <MapIcon size={size} color={color} />,
  },
  {
    id: 3,
    name: "List",
    component: List,
    option: { title: "List" },
    icon: (size = 20, color = colors.black) => <ListTreeIcon size={size} color={color} />,
  },
  {
    id: 4,
    name: "AddTask",
    component: AddTask,
    option: { title: "Create Task",tabBarItemStyle:{display:'none'} },
    icon: (size = 20, color = colors.black) => <ListTreeIcon size={size} color={color} />
  },
];
