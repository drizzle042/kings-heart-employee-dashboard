import styles from "./styles/styles.module.css";
import { studentClass } from "../../Lib/static/data";
import campusImg from "../../Lib/assets/campus.png";
import Layout from "../Layout/Layout";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';

const Dashboard = () => {
    return (
        <Layout>
            <div className={styles.main}>
                <div className={styles.overviewCards}>
                {[1, 2, 3, 4].map((i, index) => (
                    <Card elevation={8} sx={{minWidth: 200, margin: "0.4rem"}} key={index}>
                        <CardContent sx={{display: "flex", alignItems: "center", paddingLeft: "0.7rem", paddingTop: "0.4rem", paddingBottom: "0.4rem"}}>
                            <img src={campusImg} alt={studentClass.class} width={70} height={70} />
                            <div className={styles.flexColumnDiv} style={{paddingLeft: "0.8rem"}}>
                                <Typography sx={{fontSize: "2rem", fontWeight: "700"}}>
                                    {studentClass.class} 
                                    <span className={styles.subScript} style={{padding: "0.8rem", color: "limegreen"}}>+{studentClass.performance}</span> 
                                    <span style={{padding: "0.3rem"}}>
                                        <TrendingUpTwoToneIcon sx={{color: "limegreen"}} />
                                    </span>
                                </Typography>
                                <Typography className={styles.subScript}>There are currently {studentClass.students.length} students in this class</Typography>
                            </div>
                        </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;