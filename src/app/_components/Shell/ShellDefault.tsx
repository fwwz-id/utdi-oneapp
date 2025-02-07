import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function ShellDefault({ children }: { children: React.ReactNode }) {
    return <Box sx={{
        maxWidth: "100svw",
        minHeight: "100svh",
        backgroundColor: "background.default",
    }}>
        <Container fixed>
            <Alert severity="info" variant="outlined" sx={{ mb: 6 }}>
                <Typography variant="body2">
                    Aplikasi ini masih dalam tahap prototype. Fitur fitur hanya demo saja.
                </Typography>
            </Alert>
            {children}
        </Container>
    </Box>
}