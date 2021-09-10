import {
  Container,
  Link,
  Toolbar,
  Typography,
  Icon,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import React from "react";
import TableContent from "../table/TableContent";
import useStyles from "../theme/useStyles";

const MainPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.mainPage}>
        <Typography className={classes.organizationText} variant="h6">
          Organización
        </Typography>
        <Toolbar>
          <div className={classes.grow}>
            <div className={classes.tabsNav}>
              <Link color="inherit" className={classes.linkDivisiones}>
                Divisiones
              </Link>
              <Link
                color="inherit"
                underline="none"
                disabled
                className={classes.linkAppBarDesktop}
              >
                Colaboradores
              </Link>
            </div>
          </div>
          <div className={classes.sectionDesktop}>
            <Icon className={classes.mr2}>add_box</Icon>

            <Icon className={classes.mr2}>ios_share</Icon>

            <Icon className={classes.mr2}>save_alt</Icon>
          </div>
        </Toolbar>
        <Toolbar>
          <div className={classes.grow}>
            <div className={classes.tabsNav}>
              <button className="listado">Listado</button>
              <button className="arbol" disabled>
                Árbol
              </button>
            </div>
          </div>

          <div className={classes.sectionDesktop}>
            <TextField
              className={classes.textField}
              label="Columnas"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              label="Buscar"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon>search</Icon>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </Toolbar>
        <TableContent />
      </Container>
    </div>
  );
};

export default MainPage;
