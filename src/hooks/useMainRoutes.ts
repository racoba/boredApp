const useMainRoutes = () => {
    const createRoute = (path?: string) => `/home/${path ? "/" + path : ""}`;

    const routes = [
        {
            text: "BASE",
            path: createRoute(),
        }
    ]
    return routes;
}

export default useMainRoutes();