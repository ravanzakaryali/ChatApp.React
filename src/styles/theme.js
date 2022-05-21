import { createTheme } from "@mui/material/styles";

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
                    flexGrow: "0"
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                },
            }
        }
    },
})