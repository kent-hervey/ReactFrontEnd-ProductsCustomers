import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
//import apiURL from './Home.js';
//import apiURL from '../App.js';

const apiURL = "http://52.87.168.97";  //use this when connecting to API remotely
//const apiURL = ""; //use this in dev
//const apiURL = "http://localhost:8081";  //use this when testing the API itself



const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 600
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: `10px`,
        height: "100%",
        width: "99%",
        marginTop: theme.spacing(7)
    },
    link: {
        color: "rgba(0,0,0,0.65)",
        textDecoration: "none",
        marginLeft: "10%",
        alignSelf: "flex-start",
        "&:hover": {
            color: "rgba(0,0,0,1)"
        }
    }
}));

export default function SimpleTable() {
    const classes = useStyles();


    const [data, upDateData] = React.useState([]);
    const [firstLoad, setLoad] = React.useState(true);
    let isLoading = true;

    async function sampleFunc() {
        console.log("apiURL is:  " + apiURL);
        let response = await fetch(apiURL + "/api/customers", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        let body = await response.json();
        upDateData(body);
    }

    if (firstLoad) {
        sampleFunc();
        setLoad(false);
    }

    if (data.length > 0) isLoading = false;

    return (
        <div className={classes.paper}>

            <Typography component="h1" variant="h5">
                Customer Details
            </Typography>

            {isLoading ? (
                <CircularProgress />
            ) : (
                    <TableContainer
                        style={{ width: "80%", margin: "0 10px" }}
                        component={Paper}
                    >
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Location</TableCell>
                                    <TableCell align="center">Contact Name</TableCell>
                                    <TableCell align="center">Contact Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.map(row => (
                                    <TableRow key={row.name}>
                                        <TableCell align="center">{row.name}</TableCell>
                                        <TableCell align="center">{row.location}</TableCell>
                                        <TableCell align="center">{row.contactName}</TableCell>
                                        <TableCell align="center">{row.contactEmail}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            <Link className={classes.link} to="/">
                {" "}
                <Typography align="left">
                    &#x2190; Head back to home page
                </Typography>{" "}
            </Link>
            <Link className={classes.link} to="/customers-new">
                {" "}
                <Typography align="left">
                    &#x2192; Head over to the add Customer Page
                </Typography>{" "}
            </Link>

        </div>
    );
} 