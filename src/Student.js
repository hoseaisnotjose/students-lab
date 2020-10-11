import React from 'react';
import Score from './Score';

const Student = (props) => {
    return(
        <div>
            <div>
                <div>
                    Name:
                    {props.student.name}
                </div>
                <div>
                    Bio:
                    {props.student.bio}
                </div>
            </div>
                <Score scores={props.student.scores} />
                <br/>
        </div>
        
    );
}



export default Student;