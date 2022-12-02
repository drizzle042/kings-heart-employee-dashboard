import { useState, useEffect, useRef } from "react";
import Layout from "../Layout/Layout";
import { Editor } from "./components/TextEditor";
import styles from "./styles/styles.module.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";


const Exams = () => {

    const editorStyles = {
        marginTop: "1rem",
        padding: "1rem"
    }

    let [questionNumber, setQuestionNumber] = useState(1)
    const questionPlaceholder = `Question ${questionNumber}`
    const [shouldAddQuestion, setShouldAddQuestion] = useState(false);
    const addQuestion = () => {
        setShouldAddQuestion(!shouldAddQuestion)
        setQuestionNumber(questionNumber++)
    }


    let [optionNumber, setOptionNumber] = useState(-1)
    const letteredOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const [Options, setOptions] = useState([])

    const isMounted = useRef(true)
    const addOption = () => {
        setOptionNumber(optionNumber++)
    }
    useEffect(() => {
        if (isMounted.current === true){
            isMounted.current = false
        } else {
            const optionsPlaceholder = `Option ${letteredOptions[optionNumber]}`
            const EditorOptionHolderID = `option-${letteredOptions[optionNumber]}-editor`
            setOptions([
                ...Options,
                {
                    placeholder: optionsPlaceholder,
                    editorHolderID: EditorOptionHolderID
                }
            ])
        }
        // eslint-disable-next-line
    }, [optionNumber])


    return ( 
        <Layout>
            <div className={styles.guide}>
                <Typography paragraph>Exam sheets</Typography>
                <Typography 
                paragraph>
                    This is where you examine your students. Over here you give them exam questions on your subject.
                </Typography>
                <div
                className={styles.instructionCaption}>
                    <Typography 
                    variant={"caption"}>
                        Start off by setting instructions.
                    </Typography>
                    <TextField
                    className={styles.instructionTextField}
                    label="Instructions"
                    variant="filled"
                    multiline
                    rows={2}
                    />
                </div>
                {
                    !shouldAddQuestion &&
                        <div
                        className={styles.addQuestion}>
                            <IconButton 
                            onClick={addQuestion}
                            sx={{
                                backgroundColor: "var(--lightgray)",
                                margin: "auto"
                            }}>
                                <AddIcon fontSize={"large"} />
                            </IconButton>
                            <Typography
                            paragraph
                            textAlign="center">
                                add question
                            </Typography>
                        </div>
                }
                {
                    shouldAddQuestion &&
                        <>
                            <div
                            className={styles.previewAndSave}>
                                <Button
                                variant="contained">
                                    Preview
                                </Button>
                            </div>
                            <Editor
                            EDITOR_HOLDER_ID="question-editor"
                            styles={editorStyles}
                            className={styles.previewAndSave}
                            placeholder={questionPlaceholder}
                            editorMinHeight={30}
                            saveButtonText={`Save ${questionPlaceholder}`} />
                            {
                                Options.map((i, index) => (
                                    <Editor
                                    EDITOR_HOLDER_ID={i.editorHolderID}
                                    styles={editorStyles}
                                    className={styles.previewAndSave}
                                    placeholder={i.placeholder}
                                    editorMinHeight={30}
                                    saveButtonText={`Save ${i.placeholder}`} />
                                ))
                            }
                            <div
                            className={styles.addQuestion}>
                                <IconButton 
                                onClick={addOption}
                                sx={{
                                    backgroundColor: "var(--lightgray)",
                                    margin: "auto"
                                }}>
                                    <AddIcon fontSize={"large"} />
                                </IconButton>
                                <Typography 
                                paragraph
                                textAlign="center">
                                    add option
                                </Typography>
                            </div>
                            <div
                            className={styles.questionNavigation}>
                                {
                                    questionNumber - 1 <= 0 ?
                                    "" :
                                    <Button
                                    variant="contained"
                                    endIcon={<KeyboardDoubleArrowLeftIcon />}>
                                        Question {questionNumber - 1}
                                    </Button>
                                }
                                <Button
                                variant="contained"
                                sx={{
                                    marginLeft: "auto"
                                }}
                                endIcon={<KeyboardDoubleArrowRightIcon />}>
                                    Question {questionNumber + 1}
                                </Button>
                            </div>
                        </>
                }
            </div>
        </Layout>
     );
}
 
export default Exams;