import React from 'react';

const Score = (props) => (
    <div>
        {props.scores.map((score) => (
            <div>
                <div>
                    Date:
                    {score.date}
                </div>
                <div>
                    Score:
                    {score.score}
                </div>
            </div>
        ))}
    </div>
);

export default Score;