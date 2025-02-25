import Image from "next/image";
import Link from "next/link";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import LoginForm from "./_components/LoginForm";

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

export default function Login() {
  return (
    <Box sx={{
      minHeight: "100svh",
      display: "grid",
      placeItems: "center",
      backgroundColor: "background.default",
    }}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center"
      }}>
        <LoginForm>
          <Box mx="auto" my={2}>
            <Image src="/logo/utdi_vertical.png" alt="UTDI Logo" width={150} height={215.43} />
          </Box>
          {/* <Typography color="textPrimary" variant="h5" gutterBottom>Login</Typography> */}
          <TextField color="secondary" label="NIM" placeholder="23541xxxx" margin="normal" />
          <FormControl variant="outlined" margin="dense">
            <InputLabel htmlFor="outlined-adornment-password" color="secondary">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              color="secondary"
              placeholder="Aku Cinta UTDI"
              // type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    // aria-label={
                    //   showPassword ? 'hide the password' : 'display the password'
                    // }
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    // onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                    <VisibilityOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl margin="dense" size="small">
            <FormControlLabel control={<Checkbox color="secondary" size="small" />} label="Ingat saya" />
          </FormControl>
            <Button LinkComponent={Link} href="/dashboard" variant="contained" color="primary">
              Masuk
            </Button>
        </LoginForm>
        <Typography color="textSecondary" variant="body2" align="center" maxWidth={300}>* Gunakan Nama Pengguna dan Kata Sandi yang sama dengan Portal Akademik (siakad.utdi.ac.id)</Typography>
      </Box>
    </Box>
  );
}
