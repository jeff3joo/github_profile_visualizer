import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes/app.routes";
import { Box } from "@mui/material";

const App = () => {
    const appRoutes = useRoutes(routes);

    return (
        <Box sx={{ height: "100vh", width: "100vw" }}>
            {appRoutes}
        </Box>
    );
};

export default App;
