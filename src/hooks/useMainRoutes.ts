import BusinessIcon from '@mui/icons-material/Business';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

const useMainRoutes = () => {
    const createRoute = (path?: string) => `/dashboard/${path ? "/" + path : ""}`;

    const dashboardRoutes = [
        {
            text: "Dashboard",
            icon: DashboardIcon,
            path: createRoute(),
        },
        {
            text: "B3",
            icon: BusinessIcon,
            path: createRoute("b3"),
        },
        {
            text: "Crypto",
            icon: CurrencyBitcoinIcon,
            path: createRoute("crypto"),
        }
    ]
    return dashboardRoutes;
}

export default useMainRoutes();