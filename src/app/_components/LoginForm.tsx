"use client";

import { styled } from "@mui/material/styles";

const LoginForm = styled("form")(({ theme }) => ({
    width: 300,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
}));

export default LoginForm;