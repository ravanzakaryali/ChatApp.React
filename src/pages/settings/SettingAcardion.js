import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem } from '@mui/material';
import { connect } from 'react-redux';


const SettingAcardion = (props) => {
    const { name, surname, username, email, address } = props?.user?.data;
    return (
        <>
            <Accordion defaultExpanded={true} sx={{
                backgroundColor: '#fafafa',
                border: "none",
                boxShadow: "none",
                '&:before': {
                    display: 'none',
                },
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Personel info</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List sx={{
                        padding: 0,
                    }}>
                        <ListItem sx={{
                            flexWrap: 'wrap',
                        }}>
                            <Typography sx={{
                                width: '100%',
                                color: '#9f9f9f',
                            }} variant='subtitle2'>Name</Typography>
                            <Typography variant='subtitle1'>{name} {surname}</Typography>
                        </ListItem>
                        <ListItem sx={{
                            flexWrap: 'wrap',
                        }}>
                            <Typography sx={{
                                width: '100%',
                                color: '#9f9f9f',
                            }} variant='subtitle2'>Email</Typography>
                            <Typography variant='subtitle1'>{email}</Typography>
                        </ListItem>
                        <ListItem sx={{
                            flexWrap: 'wrap',
                        }}>
                            <Typography sx={{
                                width: '100%',
                                color: '#9f9f9f',
                            }} variant='subtitle2'>Adress</Typography>
                            <Typography variant='subtitle1'>{address}</Typography>
                        </ListItem>
                        <ListItem sx={{
                            flexWrap: 'wrap',
                        }}>
                            <Typography sx={{
                                width: '100%',
                                color: '#9f9f9f',
                            }} variant='subtitle2'>Username</Typography>
                            <Typography variant='subtitle1'>{username}</Typography>
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                backgroundColor: '#fafafa',
                border: "none",
                boxShadow: "none",
                '&:before': {
                    display: 'none',
                },
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Privacy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                backgroundColor: '#fafafa',
                border: "none",
                boxShadow: "none",
                '&:before': {
                    display: 'none',
                },
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Security</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                backgroundColor: '#fafafa',
                border: "none",
                boxShadow: "none",
                '&:before': {
                    display: 'none',
                },
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Help</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.getLoginUserReducer,
    };
};
export default connect(mapStateToProps)(SettingAcardion);

