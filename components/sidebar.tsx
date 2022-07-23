import NextImage from "next/image";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdFavorite,
  MdPlaylistAdd,
} from "react-icons/md";

const navMenu = [
  {
    home: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    search: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    library: "Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh-100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
    </Box>
  );
};

export default Sidebar;
