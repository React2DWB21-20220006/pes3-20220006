import { Button, Paper, TextField } from "@mui/material";
import React  from "react";
import PageWrapper from "../componentes/PageWrapper";

const paddingInferior = {
    marginBottom: "18px",
  }
const FormLogin = (props) =>{
    return(
        <PageWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >

        <Paper
          elevation={3}
          style={{
            diplay: "flex",
            flexDirection: "column",
            padding: "15px 25px",
            borderRadius: "16px",
            width: "220px",
          }}
        >
          <h3 style={paddingInferior}>{"Bienvendo/a"}</h3>
          <TextField
            style={paddingInferior}
            required
            id="outlined-required"
            label="Usuario"
          />

          <TextField
            style={paddingInferior}
            required
            id="outlined-required"
            label="Contraseña"
            type="password"
          />
          <Button style={{width:"100%"}} variant="contained">Iniciar sesion</Button>
        </Paper>
      </div>
    </PageWrapper>
    )
};
export default FormLogin;

