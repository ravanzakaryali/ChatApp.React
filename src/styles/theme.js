import { createTheme } from "@mui/material/styles";
import { grey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#3f0d88",
            light: "#681cc6"
        }
    },
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
                    backgroundColor: 'white',
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