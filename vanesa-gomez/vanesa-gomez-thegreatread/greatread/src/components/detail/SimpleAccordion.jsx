import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    }
}));

export default function SimpleAccordion({ genre, editorial, year, isbn }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        INFORMACIÓN DEL LIBRO
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Box textAlign="left" m={1}>
                            Género:
                            <Box textAlign="left" m={1}>
                                {genre}
                            </Box>
                        </Box>
                        <Box textAlign="left" m={1}>
                            Editorial:
                            <Box textAlign="left" m={1}>
                                {editorial}
                            </Box>
                        </Box>
                        <Box textAlign="left" m={1}>
                            Año edición:
                            <Box textAlign="left" m={1}>
                                {year}
                            </Box>
                        </Box>
                        <Box textAlign="left" m={1}>
                            ISBN:
                            <Box textAlign="left" m={1}>
                                {isbn}
                            </Box>
                        </Box>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}