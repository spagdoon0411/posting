import React from 'react';

type PostingCardProps = {
  title: string;
  markdown: string
};

/**
 * A single card for previewing a project posting on the project exploration
 * page. 
 * 
 * @param title: The project's title. 
 * 
 * @param markdown: The Markdown code to be displayed in this card.
 *  
 */
function PostingCard(props: PostingCardProps) {
    return(
        <div className="card">
            <h3>
                {props.title}
            </h3>
            <p>
                {props.markdown}
            </p>
        </div>
    )
}

export { PostingCard };
