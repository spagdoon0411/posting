import React from 'react';

type CardColumnProps = {
    children: React.ReactNode;
    cards: React.ReactElement[]; 
}

/**
 * A column for holding posting preview cards (PostingCards)
 * 
 * @param children Any children of this React element (what it nests in the
 * HTML-style code)
 * 
 * @param cards An array of ReactElements, meant to contain PostingCard 
 * instances that this column will organize.
 */
function CardColumn(props: CardColumnProps) {
    
}

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
