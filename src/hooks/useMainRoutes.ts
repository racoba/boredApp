import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';

const useMainRoutes = () => {
    const createRoute = (path?: string) => `/home/${path ? "/" + path : ""}`;

    const appRoutes = [
        {
            text: "Home",
            icon: HomeIcon,
            path: createRoute(),
        },
        {
            text: "Ranking",
            icon: EmojiEventsIcon,
            path: createRoute("ranking"),
        },
        {
            text: "History",
            icon: HistoryIcon,
            path: createRoute("history"),
        }
    ]
    return appRoutes;
}

export default useMainRoutes();