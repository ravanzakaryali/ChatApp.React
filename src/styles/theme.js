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
                body: {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                },
            }
        },
    },
})