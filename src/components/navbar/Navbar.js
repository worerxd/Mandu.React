import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  Icon,
} from "@material-ui/core";

import React from "react";
import useStyles from "../theme/useStyles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Container>
          <Toolbar>
            <div className={classes.grow}>
              <div className={classes.tabsNav}>
                <Link
                  color="inherit"
                  className={classes.linkAppBarLogo}
                  underline="none"
                >
                  <Typography className={classes.textLogo} variant="h1">
                    mandü
                  </Typography>
                </Link>
              </div>
              <div className={classes.tabsNav}>
                <Link
                  color="inherit"
                  underline="none"
                  className={classes.linkAppBarDesktop}
                >
                  Dashboard
                </Link>

                <Link
                  color="inherit"
                  underline="none"
                  className={classes.linkAppBarDesktopSelected}
                >
                  Organización
                </Link>

                <Link
                  color="inherit"
                  underline="none"
                  className={classes.linkAppBarDesktop}
                >
                  Modelos
                  <Icon>expand_more</Icon>
                </Link>

                <Link
                  color="inherit"
                  underline="none"
                  className={classes.linkAppBarDesktop}
                >
                  Seguimiento
                  <Icon>expand_more</Icon>
                </Link>
              </div>
            </div>

            <div className={classes.sectionDesktop}>
              <Link
                color="inherit"
                underline="none"
                className={classes.linkAppBarDesktop}
              >
                <Icon className={classes.mr}>shopping_basket</Icon>
              </Link>

              <Link
                color="inherit"
                underline="none"
                className={classes.linkAppBarDesktop}
              >
                <Icon className={classes.mr}>help</Icon>
              </Link>

              <Link
                color="inherit"
                underline="none"
                className={classes.linkAppBarDesktop}
              >
                <Icon className={classes.mr}>notifications</Icon>
              </Link>

              <Link
                color="inherit"
                underline="none"
                className={classes.linkAppBarDesktop}
              >
                <Icon className={classes.mr}>account_circle</Icon>
                Administrador
                <Icon>expand_more</Icon>
              </Link>

              <Link
                color="inherit"
                underline="none"
                className={classes.linkAppBarDesktopUnique}
              >
                mandü
              </Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
