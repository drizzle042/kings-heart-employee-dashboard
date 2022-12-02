import { useState, useEffect, useRef } from "react";
import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import Table from '@editorjs/table';
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";


const Editor = ({
        EDITOR_HOLDER_ID, 
        styles = {}, 
        className = "",
        placeholder = "Write here",
        editorMinHeight = 0,
        saveButtonText = "Save"
    }) => {

    const [data, setData] = useState({})

    function imageToolUploader(e){
        return ({
            success: 1,
            file: {
                url: URL.createObjectURL(e)
            }
        })
    }

    let editor = useRef()

    useEffect(() => {
        editor.current = new EditorJS({
            holder: EDITOR_HOLDER_ID,
            placeholder: placeholder,
            minHeight: editorMinHeight,
            tools: {
                image: {
                    class: ImageTool,
                    config: {
                        types: "image/*, video/*",
                        uploader: {
                            uploadByFile: imageToolUploader
                        },
                        captionPlaceholder: "Name of image/video"
                    }
                },
                table: Table
            },
            data: data.result
        })
        // eslint-disable-next-line
    }, [])

    function saveEditorContent(){
        editor.current.save()
            .then((result) => {
                setData({
                    ...data,
                    result
                })
            })
                .catch((error) => console.log(error))
    }

    useEffect(() => {
        console.log(data.result)
    }, [data])

    return (
        <>
            <Card 
            elevation={2} 
            id={EDITOR_HOLDER_ID}
            sx={{
                ...styles
            }}></Card>
            <div
            className={className}>
                <Button
                variant="contained"
                onClick={saveEditorContent}>
                    {saveButtonText}
                </Button>
            </div>
        </>
    )}

    export { Editor }