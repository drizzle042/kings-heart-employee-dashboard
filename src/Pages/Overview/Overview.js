import { forwardRef, useState } from "react";
import styles from "./styles/styles.module.css";
import { 
    evaluationOverview, 
    generalAnouncement, 
    toDoList, 
    messages, 
    ongoingTasks 
} from "../../Lib/static/data";
import { activityTime } from "../../Lib/utils/utils";
import authorImg from "../../Lib/assets/172139357_1823740611148344_7079540914338843565_n.jpg"
import performanceImg from "../../Lib/assets/performance.png";
import rateImg from "../../Lib/assets/rate.png";
import bonusImg from "../../Lib/assets/bonus.png";
import Layout from "../Layout/Layout";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from "@mui/material/TextField";
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Overview = () => {
    // Client side database management for To do list offline
    // const DB = indexedDB;
    // const request = DB.open("toDoList", 1);
    
    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const [dateValue, setDateValue] = useState(Date());

    const handleChangeDate = (e) => {
        setDateValue(e);
    };

    return (
        <Layout>
            <main className={styles.main}>
                <section className={styles.overviewCards}>
                    <Card 
                        className={styles.evaluationCard}
                        elevation={4} 
                        sx={{
                            borderRadius: 5
                        }}>
                        <CardContent 
                            sx={{
                                display: "flex", 
                                justifyContent: "space-between",
                                alignItems: "center", 
                            }}>
                            <img src={performanceImg} alt={evaluationOverview.performance} width={70} height={70} />
                            <Typography 
                                sx={{
                                    fontSize: "1.3rem",
                                    lineHeight: 1,
                                    textAlign: "center",
                                    padding: "10px"
                                }}>Student <br/>performance</Typography>
                            <div className={styles.flexColumnDiv}>
                                <TrendingUpIcon 
                                fontSize={"large"} 
                                sx={{color: "var(--green)"}} />
                                <span 
                                className={styles.subScript} 
                                style={{
                                    color: "var(--green)", 
                                }}>
                                    {evaluationOverview.performance}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card 
                        className={styles.evaluationCard}
                        elevation={4} 
                        sx={{
                            borderRadius: 5
                        }}>
                        <CardContent 
                            sx={{
                                display: "flex", 
                                justifyContent: "space-between",
                                alignItems: "center", 
                            }}>
                            <img src={rateImg} alt={evaluationOverview.ratings} width={70} height={70} />
                            <Typography 
                                sx={{
                                    fontSize: "1.3rem",
                                    lineHeight: 1,
                                    textAlign: "center",
                                    padding: "10px"
                                }}>Your <br/>ratings</Typography>
                            <div className={styles.flexColumnDiv}>
                                <TrendingDownIcon 
                                fontSize={"large"} 
                                sx={{color: "var(--red)"}} />
                                <span 
                                className={styles.subScript} 
                                style={{
                                    color: "var(--red)", 
                                }}>
                                    {evaluationOverview.ratings}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card 
                        className={styles.evaluationCard}
                        elevation={4} 
                        sx={{
                            borderRadius: 5
                        }}>
                        <CardContent 
                            sx={{
                                display: "flex", 
                                justifyContent: "space-between",
                                alignItems: "center", 
                            }}>
                            <img src={bonusImg} alt={evaluationOverview.kudos} width={70} height={70} />
                            <Typography 
                                sx={{
                                    fontSize: "1.3rem",
                                    lineHeight: 1,
                                    textAlign: "center",
                                    padding: "10px"
                                }}>Kudos</Typography>
                            <div className={styles.flexColumnDiv}>
                                <TrendingUpIcon 
                                fontSize={"large"} 
                                sx={{color: "var(--green)"}} />
                                <span 
                                className={styles.subScript} 
                                style={{
                                    color: "var(--green)", 
                                }}>
                                    {evaluationOverview.kudos}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <section className={styles.basicColumns}>
                    <Card
                        className={styles.informationCard}
                        elevation={3} 
                        sx={{
                            borderRadius: 3
                        }}>
                        <CardHeader
                            title="General Anouncement"
                        />
                        <Divider />
                        <div className={styles.informationCardContent}>
                            <Table>
                                {
                                    generalAnouncement.data.slice(0, 5).map((i, index) => (
                                        <TableRow 
                                        key={index}
                                        sx={{...(index % 2 ? { backgroundColor: "var(--gray)"} : "")}}>
                                            <TableCell>
                                                <Avatar src={authorImg} alt={i.by}/>
                                            </TableCell>
                                            <TableCell sx={{padding: 0}}>
                                                <Typography 
                                                sx={{margin: 0}}
                                                nowrap
                                                className={styles.informationCardContentText} 
                                                paragraph>
                                                    {i.anouncement}
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{padding: "8px"}}>
                                                <Typography 
                                                sx={{margin: 0}} 
                                                fontSize="small"
                                                className={styles.activityTime}>
                                                    {activityTime(i.time)} ago
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </Table>
                            <div className={styles.footerAction}>
                                <Typography 
                                className={styles.cardAction}
                                align="right"
                                sx={{ margin: 0 }}>See all <ChevronRightIcon /></Typography>
                            </div>
                        </div>
                    </Card>
                    <Card
                        className={styles.toDoCard}
                        elevation={3} 
                        sx={{
                            borderRadius: 3
                        }}>
                        <CardHeader
                            title="This week"
                            action={
                            <IconButton onClick={handleClickOpen}>
                                <AddIcon
                                fontSize={"large"} />
                            </IconButton>
                            }
                        />
                        <Divider />
                        <CardContent 
                        sx={{padding: "2rem"}}
                        className={styles.toDoListContent}>
                            {
                                toDoList.data.map((i) => (
                                    <>
                                        <Typography sx={{fontStyle: "italic"}}>{i.dayOfWeek}</Typography>
                                        {
                                            i.activities.map((n, index) => (
                                                <FormControlLabel 
                                                key={index}
                                                sx={{fontWeight: "bold"}}
                                                control={<Checkbox defaultChecked={n.done} />} 
                                                label={n.task}/>
                                            ))
                                        }
                                    </>
                                ))
                            }
                        </CardContent>
                    </Card>
                </section>
                <section 
                style={{marginBottom: "2rem"}}
                className={styles.basicColumns}>
                    <Card
                        className={styles.informationCard}
                        elevation={3} 
                        sx={{
                            borderRadius: 3
                        }}>
                        <CardHeader
                            title="Messages"
                        />
                        <Divider />
                        <div className={styles.informationCardContent}>
                            <Table>
                                {
                                    messages.data.slice(0, 5).map((i, index) => (
                                        <TableRow 
                                        key={index}
                                        sx={{...(index % 2 ? { backgroundColor: "var(--gray)"} : "")}}>
                                            <TableCell>
                                                <Avatar src={authorImg} alt={i.by}/>
                                            </TableCell>
                                            <TableCell sx={{padding: 0}}>
                                                <Typography 
                                                sx={{margin: 0}}
                                                nowrap
                                                className={styles.informationCardContentText} 
                                                paragraph>
                                                    {i.message}
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{padding: "8px"}}>
                                                <Typography 
                                                sx={{margin: 0}} 
                                                fontSize="small"
                                                className={styles.activityTime}>
                                                    {activityTime(i.time)} ago
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </Table>
                            <div className={styles.footerAction}>
                                <Typography 
                                className={styles.cardAction}
                                align="right"
                                sx={{ margin: 0 }}>See all <ChevronRightIcon /></Typography>
                            </div>
                        </div>
                    </Card>
                    <Card
                        className={styles.toDoCard}
                        elevation={3} 
                        sx={{
                            borderRadius: 3
                        }}>
                        <CardHeader
                            title="Ongoing Tasks"
                        />
                        <Divider />
                        <CardContent 
                        sx={{padding: 0}}>
                            <div className={styles.informationCardContent}>
                                <div 
                                className={styles.toDoListContent}>
                                    <Table
                                    className={styles.toDoListContent}>
                                        {
                                            ongoingTasks.data.map((i, index) => (
                                                <TableRow 
                                                key={index}>
                                                    <TableCell
                                                    sx={{border: 0}}>
                                                        <Typography>
                                                            {i.task}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell
                                                    sx={{border: 0}}>
                                                        <div 
                                                        className={styles.statusDisplay}
                                                        style={{...(
                                                            i.status === "Approved" ?
                                                            {
                                                                border: "1px solid var(--green)",
                                                                color: "var(--green)"
                                                            } :
                                                            i.status === "Pending" ?
                                                            {
                                                                border: "1px solid var(--orange)",
                                                                color: "var(--orange)"
                                                            } :
                                                            i.status === "Rejected" ?
                                                            {
                                                                border: "1px solid var(--red)",
                                                                color: "var(--red)"
                                                            } : ""
                                                        )}}>{i.status}</div>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </Table>
                                </div>
                                <div className={styles.footerAction}>
                                    <Typography 
                                    className={styles.cardAction}
                                    align="right"
                                    sx={{ margin: 0 }}>See all <ChevronRightIcon /></Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </main>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Add a new task for this week."}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TextField label="Task" variant="outlined" fullWidth margin="normal" />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                            label="Schedule a reminder"
                            disablePast
                            value={dateValue}
                            onChange={handleChangeDate}
                            renderInput={(params) => <TextField margin="normal" fullWidth {...params} />}
                            />
                        </LocalizationProvider>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                    variant="outlined" 
                    sx={{color: "var(--red)", borderColor: "var(--red)"}}
                    onClick={handleClose}>Cancel</Button>
                    <Button
                    variant="contained" 
                    onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </Layout>
    );
}

export default Overview;