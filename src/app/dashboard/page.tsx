import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";@mui/lab @mui/material

import FilterListOutlinedIcon from '@mui/icons-material/FilterList';
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SortOutlinedIcon from '@mui/icons-material/Sort';
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

import ShellDefault from "../_components/Shell/ShellDefault";
import AppMenuWidgets from "../_components/Widgets/AppMenuWidgets";

const cards = [
    { id: "stats", text: "Statistik", icon: <ShowChartOutlinedIcon fontSize="large" />, description: "Lihat statistik performa akademik dan keuangan", link: { to: "/dashboard/siakad" } },
    { id: "keu", text: "Keuportal", icon: <PaymentsOutlinedIcon fontSize="large" />, description: "Lihat tagihan, pembayaran, dan informasi keuangan lainnya", link: { to: "/dashboard/siakad" } },
    { id: "siakad", text: "Siakad", icon: <SchoolOutlinedIcon fontSize="large" />, description: "Lihat jadwal kuliah, nilai, dan informasi akademik lainnya", link: { to: "/dashboard/siakad" } },
];

const cardsDisabled = [
    { id: "ldb", text: "Leaderboard", icon: <LeaderboardOutlinedIcon fontSize="large" />, description: "Lihat peringkat akademik dari seluruh mahasiswa" },
    { id: "cs", text: "Customer Service", icon: <SupportAgentOutlinedIcon fontSize="large" />, description: "Hubungi customer service untuk bantuan" },
];

const courseSchedule = [
    {
        id: "IF1915T",
        course: "Pemrograman Web",
        time: "7.00 - 9.00",
        lecturer: "Sri Redjeki S.Si., M.Kom., Ph.D.",
        presence: true,
        active: false
    },
    {
        id: "IF1915P",
        course: "Praktikum Pemrograman Web",
        time: "9.00 - 11.00",
        lecturer: "Sari Iswanti S.Si., M.Kom.",
        presence: false,
        active: true
    },
    {
        id: "IF1913T",
        course: "Pemrograman Berbasis Objek",
        time: "13.00 - 15.00",
        lecturer: "Thomas Edyson Tarigan S.Kom., M.Cs.",
        presence: true,
        active: false
    },
    {
        id: "IF1913P",
        course: "Praktikum Pemrograman Berbasis Objek",
        time: "15.00 - 17.00",
        lecturer: "Thomas Edyson Tarigan S.Kom., M.Cs.",
        presence: true,
        active: false
    }
];

const tasks = [
    {
        id: "IF1915T",
        course: "Pemrograman Web",
        deadline: "Hari ini 23.59",
        title: "Tugas 1",
    },
    {
        id: "IF1915P",
        course: "Praktikum Pemrograman Web",
        deadline: "Rabu 23 September, 23.59",
        title: "Laporan Praktikum 1",
    },
    {
        id: "IF1913T",
        course: "Pemrograman Berbasis Objek",
        deadline: "Kamis 24 September, 23.59",
        title: "Tugas 1",
    },
    {
        id: "IF1913P",
        course: "Praktikum Pemrograman Berbasis Objek",
        deadline: "Jumat 25 September, 23.59",
        title: "Laporan Praktikum 1",
    }
];

export default function Dashboard() {
    return <ShellDefault>
        
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar>MJ</Avatar>
                <Box>
                    <Typography variant="h6" color="textSecondary">
                        Selamat datang
                    </Typography>
                    <Typography variant="h5" color="textPrimary" pb={2}>
                        Muhammad Java Arifin
                    </Typography>
                </Box>
            </Box>
            <AppMenuWidgets />
        </Box>
        <Divider sx={{
            mb: 6
        }} />
        <Box mb={6}>
            <Typography color="textPrimary" variant="h5">
                Jadwal Kuliah
            </Typography>
            <Typography color="textSecondary" variant="body2" mb={6}>
                Senin, 20 September 2025
            </Typography>

            <Grid container spacing={2}>
                {
                    courseSchedule.map((schedule, id) => (
                        <Grid key={schedule.id} size={{ xs: 12, md: 6 }}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" color={id == 0 ? "info" : "secondary.dark"}>{schedule.course}</Typography>
                                    <Typography variant="body2" color="textSecondary">{schedule.time}</Typography>
                                    <Typography variant="body2" color="textSecondary">{schedule.lecturer}</Typography>
                                </CardContent>
                                <CardActions sx={{ px: 2, pb: 2 }} >
                                    <Button color="info" disabled={id != 0}>Presensi</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
        <Divider sx={{
            mb: 6
        }} />
        <Box mb={6}>
            <Grid container justifyContent="space-between">
                <Grid size={{ xs: 8 }}>
                    <Typography color="textPrimary" variant="h5">
                        Tugas
                    </Typography>
                    <Typography color="textSecondary" variant="body2" mb={6}>
                        1 Minggu
                    </Typography>
                </Grid>
                <Grid size={{ xs: 4 }} justifySelf="flex-end">
                    <Box maxWidth="fit-content" ml="auto">
                        <Tooltip title="Filter">
                            <IconButton disabled>
                                <FilterListOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Sort">
                            <IconButton disabled>
                                <SortOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                {
                    tasks.map((task, id) => (
                        <Grid key={task.id} size={{ xs: 6, md: 3 }}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography variant="h6" color={id == 0 ? "error" : "textPrimary"}>{task.course}</Typography>
                                        <Typography variant="body2" color="textSecondary">{task.deadline}</Typography>
                                        <Typography variant="body2" color="textSecondary">{task.title}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
        <Divider sx={{
            mb: 6
        }} />
        <Grid container spacing={2} sx={{
            justifyContent: {
                xs: "center",
                md: "flex-start"
            },
        }}>
            {
                cards.map(card => (
                    <Grid key={card.id} size={{ xs: 12, md: 6 }}>
                        <Card sx={{
                            mx: {
                                xs: "auto"
                            },
                            maxHeight: "fit-content"
                        }}>
                            <CardActionArea href={card.link.to}>
                                <CardContent>
                                    {card.icon}
                                    <Typography variant="h6">
                                        {card.text}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">{card.description}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }
            {
                cardsDisabled.map(card => (
                    <Grid key={card.id} size={{ xs: 12, md: 6 }}>
                        <Card sx={{
                            mx: {
                                xs: "auto"
                            },
                            maxHeight: "fit-content",
                            opacity: 0.5
                        }}>
                            <CardActionArea disabled>
                                <CardContent>
                                    {card.icon}
                                    <Typography color="textDisabled" variant="h6">
                                        {card.text}
                                    </Typography>
                                    <Typography variant="body2" color="textDisabled">{card.description}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    </ShellDefault>
}