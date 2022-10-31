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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Checkbox } from "@mui/material";

const Dashboard = () => {
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
                                sx={{color: "#00FF44"}} />
                                <span 
                                className={styles.subScript} 
                                style={{
                                    color: "#00FF44", 
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
                                sx={{color: "#FE2525"}} />
                                <span 
                                className={styles.subScript} 
                                style={{
                                    color: "#FE2525", 
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
                                sx={{color: "#00FF44"}} />
                                <span 
                                className={styles.subScript} 
                                style={{
                                    color: "#00FF44", 
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
                                        sx={{...(index % 2 ? { backgroundColor: "#D8D4D4"} : "")}}>
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
                            <IconButton>
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
                                        sx={{...(index % 2 ? { backgroundColor: "#D8D4D4"} : "")}}>
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
                                                                border: "1px solid #00FF44",
                                                                color: "#00FF44"
                                                            } :
                                                            i.status === "Pending" ?
                                                            {
                                                                border: "1px solid #F68D14",
                                                                color: "#F68D14"
                                                            } :
                                                            i.status === "Rejected" ?
                                                            {
                                                                border: "1px solid #FE2525",
                                                                color: "#FE2525"
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
        </Layout>
    );
}

export default Dashboard;