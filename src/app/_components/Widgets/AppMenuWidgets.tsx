"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";

// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: theme.spacing(1),
}));

export default function AppMenuWidgets() {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return <>
        <Tooltip title="Menu">
            <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }} onClick={handleClick}>
                <AppsOutlinedIcon fontSize="large" />
            </IconButton>
        </Tooltip>
        <Menu open={open} anchorEl={anchorEl} onClose={handleClose}
            slotProps={{
                paper: {
                    sx: {
                        '& .MuiList-root': {
                            padding: 2
                        }
                    }
                }
            }}
        >
            <Grid container spacing={2}>
                <Grid size={{ xs: 4 }}>
                    <MenuItemStyled onClick={handleClose}>
                        <ShowChartOutlinedIcon />
                        Statistik
                    </MenuItemStyled>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <MenuItemStyled onClick={handleClose} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <PaymentsOutlinedIcon />
                        Keuportal
                    </MenuItemStyled>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <MenuItemStyled onClick={handleClose}>
                        <SchoolOutlinedIcon />
                        Siakad
                    </MenuItemStyled>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <MenuItemStyled onClick={handleClose} disabled>
                        <LeaderboardOutlinedIcon />
                        Leaderboard
                    </MenuItemStyled>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <MenuItemStyled onClick={handleClose} disabled>
                        <SupportAgentOutlinedIcon />
                        Customer Service
                    </MenuItemStyled>
                </Grid>
            </Grid>
        </Menu>
    </>
}
