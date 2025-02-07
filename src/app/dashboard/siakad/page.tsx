"use client";

import NextLink from "next/link";

import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import ShellDefault from "~/app/_components/Shell/ShellDefault";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const CircularStatsWrapper = styled("div")(() => ({
    position: "relative",
}));

const CircularStatsText = styled(Typography)(() => ({
    position: "absolute",
    top: "46%",
    left: "50%",
    transform: "translate(-50%, -50%)",
}));

const ips = [4.00, 2.90, 3.50, 3.80, 4.00];
const ylabels = [2.00, 3.00, 4.00];
const xlabels = ["2019", "2020", "2021", "2022", "2023"];

export default function Page() {
    return (
        <ShellDefault>
            <Breadcrumbs sx={{ pt: 6 }}>
                <Typography component={NextLink} href="/dashboard" color="text.secondary" sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none" }}>
                    <HomeOutlinedIcon fontSize="small" />
                    Dashboard
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <SchoolOutlinedIcon fontSize="small" />
                    Siakad
                </Typography>
            </Breadcrumbs>
            <Typography variant="h4" pt={6}>Analisis Performa Akademis</Typography>
            <Grid container spacing={2} py={6}>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Card>
                        <CardContent sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            '&.MuiCardContent-root': {
                                paddingBottom: 2,
                            }
                        }}>
                            <CircularStatsWrapper>
                                <CircularStatsText variant="h6">S</CircularStatsText>
                                <CircularProgress variant="determinate" size="4rem" value={100} sx={(theme) => ({
                                    color: theme.palette.grey[500],
                                    position: "absolute"
                                })} />
                                <CircularProgress variant="determinate" size="4rem" color="info" value={100} />
                            </CircularStatsWrapper>
                            <Box>
                                <Typography>IPK</Typography>
                                <Typography variant="body2" color="text.secondary">4.00</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Card>
                        <CardContent sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            '&.MuiCardContent-root': {
                                paddingBottom: 2,
                            }
                        }}>
                            <CircularStatsWrapper>
                                <CircularStatsText variant="body1">90%</CircularStatsText>
                                <CircularProgress variant="determinate" size="4rem" value={100} sx={(theme) => ({
                                    color: theme.palette.grey[500],
                                    position: "absolute"
                                })} />
                                <CircularProgress variant="determinate" size="4rem" color="success" value={90} />
                            </CircularStatsWrapper>
                            <Box>
                                <Typography>Presensi</Typography>
                                <Typography variant="body2" color="text.secondary">rata-rata</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Tooltip title="Fitur ini akan segera hadir">
                        <Card>
                            <CardContent sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                '&.MuiCardContent-root': {
                                    paddingBottom: 2,
                                }
                            }}>
                                <CircularStatsWrapper>
                                    <CircularStatsText variant="body1" color="text.disabled">
                                        <LockOutlinedIcon />
                                    </CircularStatsText>
                                    <CircularProgress variant="determinate" size="4rem" value={100} sx={(theme) => ({
                                        color: theme.palette.grey[500],
                                    })} />
                                </CircularStatsWrapper>
                                <Box>
                                    <Typography color="text.disabled">Peringkat</Typography>
                                    <Typography variant="body2" color="text.disabled">dari kelas Informatika '23</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Tooltip>
                </Grid>
            </Grid>
            <Typography variant="h4" pt={4}>
                Menu
            </Typography>
        </ShellDefault>
    )
}