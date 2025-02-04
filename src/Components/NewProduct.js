import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//const apiURL = "http://localhost:8081";  //use this when testing the API itself
const apiURL = "http://52.87.168.97";  //use this when connecting to API remotely

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(7),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%"
    }
}));


export default function NewProduct() {
    const classes = useStyles();
    const [firstLoad, setLoad] = React.useState(true);


    //const [name, setName] = React.useState("");
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [modelNumber, setModelNumber] = React.useState("");
    const [listPrice, setListPrice] = React.useState("");
    const handleNameChange = event => setName(event.target.value);
    const handleDescriptionChange = event => setDescription(event.target.value);
    const handleModelNumberChange = event => setModelNumber(event.target.value);
    const handleListPrice = event => setListPrice(event.target.value);

    const [message, setMessage] = React.useState("Nothing saved in the session");

    async function sampleFunc(toInput) {
        console.log("apiURL is:  " + apiURL);
        const response = await fetch(apiURL + "/api/products", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json"
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *client
            body: JSON.stringify(toInput) // body data type must match "Content-Type" header
        });
        let body = await response.json();
        console.log("body.id is:  " + body.id);
        setMessage(body.id ? "Data successfully updated" : "Data update failed");
    }

    const handleSubmit = variables => {
        console.log("first inside handleSubmit")
        const toInput = { name, description, modelNumber, listPrice };
        sampleFunc(toInput);
        setName("");
        setDescription("");
        setModelNumber("");
        setListPrice("");
    };

    if (firstLoad) {
        // sampleFunc();
        setLoad(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Add Product
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="description"
                                name="description"
                                variant="outlined"
                                required
                                fullWidth
                                value={description}
                                id="description"
                                label="Description"
                                onChange={handleDescriptionChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="modelNumber"
                                value={modelNumber}
                                label="Model Number"
                                name="modelNumber"
                                autoComplete="modelNumber"
                                onChange={handleModelNumberChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="listPrice"
                                value={listPrice}
                                label="List Price"
                                name="listPrice"
                                autoComplete="listPrice"
                                onChange={handleListPrice}
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
                        <Link to="/products">View by Products</Link>
                    </Grid>
                </Grid>
                <Typography style={{ margin: 7 }} variant="body1">
                    Status: {message}
                </Typography>





            </div>
        </Container>
    );
}









