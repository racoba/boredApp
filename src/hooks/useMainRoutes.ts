const useMainRoutes = () => {
    const createRoute = (path?: string) => `/dashboard/${path ? "/" + path : ""}`;

    const dashboardRoutes = [
        {
            text: "Dashboard",
            path: createRoute(),
        },
        {
            text: "Carteira",
            path: createRoute("wallet"),
        }
    ]
    return dashboardRoutes;
}

export default useMainRoutes();