import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function TopBar() {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { label: 'Home', path: '/home' },
        { label: 'Repositories', path: '/repos' },
        { label: 'Analysis', path: '/analysis' },
    ];

    return (
        <AppBar
            elevation={0}
            sx={{
                backgroundColor: '#0F172A',
            }}
        >
            <Toolbar sx={{ px: { xs: 3, sm: 6, md: 9, xl: 12 } }}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Github Profile Visualizer
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map(({ label, path }) => {
                        const isActive = currentPath.startsWith(path);
                        return (
                            <Button
                                key={label}
                                component={Link}
                                to={path}
                                sx={{
                                    color: isActive ? '#3B82F6' : '#fff',
                                    borderBottom: isActive ? '2px solid #3B82F6' : 'none',
                                    borderRadius: 0,
                                }}
                            >
                                {label}
                            </Button>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
