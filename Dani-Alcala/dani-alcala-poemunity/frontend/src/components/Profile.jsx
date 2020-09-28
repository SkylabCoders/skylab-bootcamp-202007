import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./Profile.scss";
import "../App.scss";
import { savePoem } from "../actions/poemActions";
import MyPoems from "./MyPoems";
import MyFavouritePoems from "./MyFavouritePoems";
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "./CircularIndeterminate";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function Profile(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  let [poemContent, setPoemContent] = useState("");
  let [poemTitle, setPoemTitle] = useState("");
  let [poemCategory, setPoemCategory] = useState("");

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <CircularProgress />;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  function onFieldChange(value, setValue) {
    setValue(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();

    let current_datetime = new Date();
    let formattedDate =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate() +
      " " +
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      current_datetime.getSeconds();

    savePoem({
      userId: user.sub,
      author: user.name,
      picture: user.picture,
      poem: poemContent,
      title: poemTitle,
      genre: poemCategory,
      likes: [],
      date: formattedDate,
    });
    setPoemContent("");
    setPoemTitle("");
    setPoemCategory("");
  }

  return (
    isAuthenticated && (
      <main className="profile__main">
        <section className="profile__title">
          <div>Perfil de {user.name}</div>
        </section>
        <section className="profile__intro">
          <img
            className="profile__image"
            src={user.picture}
            alt={user.name}
          ></img>
          <div className="profile__personal-data">
            <div className="profile__insert-poem">
              <p className="profile__insert-poem-title">Insertar un poema:</p>
              <br></br>
              <form
                className="profile__insert-poem-form"
                onSubmit={handleSubmit}
              >
                <div className="profile__insert-poem-inputs">
                  <label className="profile__insert-poem-input">
                    {`Título: `}
                    <input
                      className="profile__insert-poem-input"
                      placeholder="Título"
                      name="title"
                      required
                      value={poemTitle}
                      onChange={(event) =>
                        onFieldChange(event.target.value, setPoemTitle)
                      }
                    />
                  </label>
                  <label className="profile__insert-poem-input">
                    {`Categoría: `}
                    <select
                      className="profile__insert-poem-input"
                      id="category"
                      name="category"
                      required
                      onChange={(event) => {
                        onFieldChange(event.target.value, setPoemCategory);
                      }
                      }
                    >
                      <option value="">Seleccionar</option>
                      <option value="alegria">Alegría</option>
                      <option value="amistad">Amistad</option>
                      <option value="amor">Amor</option>
                      <option value="aniversario">Aniversario</option>
                      <option value="desamor">Desamor</option>
                      <option value="haikus">Haikus</option>
                      <option value="infantiles">Infantiles</option>
                      <option value="tristes">Tristes</option>
                    </select>
                  </label>
                </div>
                <div>
                  <textarea
                    className="profile__text-area"
                    id="poem"
                    name="poem"
                    required
                    placeholder="Inserta aquí tu poema"
                    value={poemContent}
                    onChange={(event) =>
                      onFieldChange(event.target.value, setPoemContent)
                    }
                  ></textarea>
                </div>

                <button className="profile__send-poem" type="submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="profile__outro">
          <div className="profile__tabs">
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Mis poemas" {...a11yProps(0)} />
                <Tab label="Mis poemas favoritos" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel
                className="profile__myPoems"
                value={value}
                index={0}
                dir={theme.direction}
              >
                <MyPoems />
              </TabPanel>
              <TabPanel
                className="profile__myPoems"
                value={value}
                index={1}
                dir={theme.direction}
              >
                <MyFavouritePoems />
              </TabPanel>
            </SwipeableViews>
          </div>
        </section>
      </main>
    )
  );
}
