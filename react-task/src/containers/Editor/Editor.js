import React, {Component} from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorState} from 'draft-js';
import classes from './Editor.module.css';


class customEditor extends Component {
    state = {
        editorState: EditorState.createEmpty()
    }

    onEditorStateChange = (editorState) => {
        this.setState({editorState})
    }

    render() {
        return (
            <div className={classes.Editor}>
                <Editor
                    editorState={this.state.editorState}
                    // toolbarClassName={classes.toolbarClass}
                    toolbarClassName={{
                        inline: {inDropdown: true},
                        list: {inDropdown: true},
                        textAlign: {inDropdown: true},
                        link: {inDropdown: true},
                        history: {inDropdown: true},
                        // image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
                    }}
                    wrapperClassName={classes.wrapperClassName}
                    editorClassName={classes.editorClassName}
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        )
    }
}

export default customEditor;