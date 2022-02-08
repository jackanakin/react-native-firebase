import React from "react";

import { AuthenticationProvider } from "./AuthenticationProvider";

const RootProvider: React.FC = ({ children }) => (
    <AuthenticationProvider>
        {children}
    </AuthenticationProvider>
);

export default RootProvider;