import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import { Box, Typography, Grid } from '@mui/material';
import githubVisualizerImage from '../../assets/images/github_visualizer.png';

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                p: 2,
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box sx={{ width: '100%', mb: 8 }}>
                <SearchBar />
            </Box>
            <Typography
                variant="h4"
                sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    mb: 4,
                    textAlign: 'center',
                    fontSize: {
                        xs: '1rem',
                        sm: '1.4rem',
                        md: '2rem',
                    },
                }}
            >
                Github Profile Visualizer
            </Typography>
            <Box
                component="img"
                src={githubVisualizerImage}
                alt="Github Visualizer"
                sx={{
                    width: '100%',
                    maxWidth: '30%',
                }}
            />
        </Box>
    )
}
