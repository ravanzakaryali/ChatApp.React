import { createTheme } from "@mui/material/styles";
import { amber, deepOrange, grey } from '@mui/material/colors';

export const getDesign = (mode) => ({
    palette: {
        mode,
        primary: {
            ...amber,
            ...(mode === 'dark' && {
                main: grey[700],
            }),
        },
        secondary: {
            ...grey,
            ...(mode === 'dark' && {
                main: grey[800],
            }),
        },
        ...(mode === 'dark' && {
            background: {
                default: grey[900],
                paper: grey[900],
            },
        }),
        text: {
            ...(mode === 'light'
                ? {
                    primary: grey[900],
                    secondary: grey[800],
                }
                : {
                    primary: '#fff',
                    secondary: grey[100],
                }),
        },
    },
});
export const theme = createTheme({
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    flexGrow: "0",
                    borderRadius: "10px",
                    width: "50px",
                    height: "50px",
                    padding: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"

                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                '&::-webkit-scrollbar': {
                    width: '1rem',
                    borderRight: "5px white solid",
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: grey[50],
                },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: '10px',
                    border: '4px white solid',
                    backgroundColor: grey[400],
                },
                body: {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                },
            },
        },
    },
})