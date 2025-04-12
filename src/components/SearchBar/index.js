import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Box } from '@mui/material';

export default function SearchBar() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        padding: 0,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha("#1D2537", 0.65),
        '&:hover': {
            backgroundColor: alpha("#1D2537", 1),
        },
        maxWidth: '270px',
        width: '100%',
        height: '32px',
        [theme.breakpoints.up('sm')]: {
            height: '56px',
            maxWidth: '500px',
        },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyItems: 'center'
    }));

    const SearchIconWrapper = styled('button')(({ theme }) => ({
        padding: 0,
        background: 'none',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        backgroundColor: "#4F4E4C",
        color: '#fff',
        height: '100%',
        width: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        [theme.breakpoints.up('sm')]: {
            width: '60px',
        },
    }));


    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            fontSize: '12px',
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            flexGrow: 1,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '20ch',
                fontSize: '20px',
            },
        },
    }));

    return (
        <Box display={'flex'} justifyContent={'center'}>
            <Search>
                <StyledInputBase
                    placeholder="Enter github username"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <SearchIconWrapper>
                    <SearchIcon sx={{
                        fontSize: {
                            xs: '16px',
                            sm: '24px',
                            md: '32px',
                        }
                    }} />
                </SearchIconWrapper>
            </Search>
        </Box>
    );
}