import React, { useState } from 'react';
import useAlert from 'react-alert';
import { StyledAddRateForm, StyledTextField, StyledTextArea, StyledButton } from './addRateStyles';

export default function AddRate() {
    const [name, setName] = useState('');
    const [comments, setComments] = useState('');
    const [addScore, setAddScore] = useState('');
    const [studentName, setStudentName] = useState('');

    return (
        <StyledAddRateForm>
            <h2>Add rate</h2>
            <form>
                <StyledTextField type="text" value={name} onChange={(evt) => setName(evt.target.value)} name="name" placeholder="Your Name" />
                <StyledTextArea type="text" value={comments} onChange={(evt) => setComments(evt.target.value)} name="comments" rows="7" cols="50" placeholder="Comments" />
                <StyledTextField type="number" value={addScore} onChange={(evt) => setAddScore(evt.target.value)} name="addscore" placeholder="Add score" />
                <StyledTextField type="text" value={studentName} onChange={(evt) => setStudentName(evt.target.value)} name="studentname" placeholder="Name of Student" /><br />
                <div className="flex-btn">
                    <StyledButton>Submit Rate</StyledButton>
                </div>
            </form>
        </StyledAddRateForm>
    )
}
