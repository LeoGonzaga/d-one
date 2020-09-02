import React from "react";
import styled from "styled-components";

import LogoImg from "../Assets/assets-complete/images/acme-logo.png";
import Tooltip from "@material-ui/core/Tooltip";
import {
  withStyles,
  Theme,
  makeStyles,
  createStyles,
} from "@material-ui/core/styles";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { purple, yellow, grey, blue, green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      outline: "none",
      borderRadius: 10,
    },
    column: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      color: grey[700],
    },
    name: {
      color: grey[700],
      padding: 4,
    },
    subTitle: {
      color: grey[500],
      paddingTop: 1,
    },
  })
);

const DarkTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: "rgb(67, 63, 89)",
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "bold",
    boxShadow: theme.shadows[1],
    fontSize: 15,
    padding: 10,
  },
}))(Tooltip);
export const Container = styled.div`
  display: flex;
  flex: 1;
  max-width: 90%;
  align-items: center;
  justify-content: space-between;
  margin: 39px auto;
`;

const Infos = styled.div`
  display: flex;
  background-size: cover;
  align-items: center;
`;
const NameContainer = styled.div`
  display: flex;
  background-color: #117eff;
  height: 30px;
  width: 30px;
  margin-right: 20px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
const Name = styled.span`
  color: #fff;
`;
const LogoContainer = styled.div`
  background: #fff;
  border: 1px solid #ebeef6;
  padding: 0 5px;
  height: 35px;
`;
const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const Action = styled.div``;
const Search = styled.input`
  width: 296px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccfde;

  &:hover {
    box-shadow: 2px 2px 2px 1px #cccfde;
  }
  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  width: 296px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccfde;

  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  background-color: #117eff;
  padding: 11px;
  margin: 0 10px;
  border-radius: 5px;
  border: none;
  color: #fff;
  transition: 0.1s;
  &:hover {
    background-image: linear-gradient(to left, #25aae1, #00e1ff);
  }
  &:focus {
    outline: none;
  }
`;
const Navbar: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Infos>
        <DarkTooltip placement="left-end" title="Antônio da Silva" arrow>
          <NameContainer>
            <Name>A</Name>
          </NameContainer>
        </DarkTooltip>

        <LogoContainer>
          <Logo src={LogoImg} />
        </LogoContainer>
      </Infos>

      <Action>
        <Search placeholder="Buscar" />
        <Button onClick={handleOpen}>
          + <span>Nova Jornada</span>
        </Button>
      </Action>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className={classes.title}>
              Nova jornada
            </h2>
            <hr />
            <div className={classes.column}>
              <span className={classes.name}>
                Dê um <strong>nome</strong> para essa Jornada
              </span>
              <Input placeholder="" />
              <p className={classes.subTitle} id="transition-modal-description">
                Você poderá alterar essa informação depois
              </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Navbar;
