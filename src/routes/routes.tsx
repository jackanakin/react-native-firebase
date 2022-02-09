import { useAuthentication } from "@providers/AuthenticationProvider";
import React from "react";

import HomeRoutes from "./private/home.routes";
import AuthenticationRoutes from "./public/authentication.routes";

const Routes: React.FC = () => {
    const { user } = useAuthentication();

    if (user) {
        return <HomeRoutes />
    } else {
        return <AuthenticationRoutes />
    }
};

export default Routes;