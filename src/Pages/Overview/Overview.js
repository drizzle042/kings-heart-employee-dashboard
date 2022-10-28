import styles from "./styles/styles.module.css";
import { studentClass } from "../../Lib/static/data";
import performanceImg from "../../Lib/assets/performance.png";
import rateImg from "../../Lib/assets/rate.png";
import bonusImg from "../../Lib/assets/bonus.png";
import Layout from "../Layout/Layout";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const Dashboard = () => {
    return (
        <Layout>
            <div className={styles.main}>
                <div className={styles.overviewCards}>
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
                            <img src={performanceImg} alt={studentClass.performance} width={70} height={70} />
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
                                    {studentClass.performance}
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
                            <img src={rateImg} alt={studentClass.ratings} width={70} height={70} />
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
                                    {studentClass.ratings}
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
                            <img src={bonusImg} alt={studentClass.kudos} width={70} height={70} />
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
                                    {studentClass.kudos}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;