import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container"

const apiURL = "http://localhost:8081"; //use ths when testing the API local
//const apiURL = "http://52.87.168.97"; //use this when connecting to API remotely

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(7),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    form: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    TextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%"
    }
}))


export default function NewCustomer() {
    const classes = useStyles();
    const [firstLoad, setLoad] = React.useState(true);

    const [name, setName] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [contactName, setContactName] = React.useState("");
    const [contactEmail, setContactEmail] = React.useState("");

    const handleNameChange = event => setName(event.target.value);
    const handleLocationChange = event => setLocation(event.target.value);
    const handleContactNameChange = event => setContactName(event.target.value);
    const handleContactEmailChange = event => setContactEmail(event.target.value);


    const [message, setMessage] = React.useState("Entry not saved.  Please try again");

    async function sampleFunc(toInput) {
        console.log("apuURL is:  " + apiURL);
        const response = await fetch(apiURL + "/api/customers", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(toInput)
        });

        let body = await response.json();
        console.log("body.id is:  " + body.id);
        setMessage(body.id ? "Data successfully uploaded" : "Data upload failed");

    }

    const handleSubmit = variables => {
        console.log("first inside handleSubmit")
        const toInput = { name, location, contactName, contactEmail };
        sampleFunc(toInput);
        setName("");
        setLocation("");
        setContactName("");
        setContactEmail("");
    };

    if (firstLoad) {
        setLoad(false);
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Add Customer
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                value={name}
                                label="Name"
                                name="name"
                                autoComplete="name"
                                onChange={handleNameChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="location"
                                value={location}
                                label="Location"
                                name="location"
                                autoComplete="location"
                                onChange={handleLocationChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="contactName"
                                value={contactName}
                                label="Contact Name"
                                name="contactName"
                                autoComplete="contactName"
                                onChange={handleContactNameChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="contactEmail"
                                value={contactEmail}
                                label="Contact Email"
                                name="contactEmail"
                                autoComplete="contactEmail"
                                onChange={handleContactEmailChange}
                            />
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>

                    </Grid>
                </form>
                <Grid container justify="center">
                    <Grid item>
                        <Link to="/customers">View by Customers</Link>
                    </Grid>
                </Grid>
                <Typography style={{ margin: 7 }} variant="body1">
                    Status: {message}
                </Typography>



            </div>

        </Container>
    );

}