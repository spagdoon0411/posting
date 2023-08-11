import React, { FC, useState } from 'react';
import { TagColors } from './Colors';
import { ContactTypes } from './ContactTypes';
import './CardComponents.css'

enum CardStates {
    tiny, /* A small, drop-down representation of a card. */
    compressed, /* An expanded card with rendered Markdown abbreviated */
    expanded /* A card with Markdown fully-visible */
} 

type CardFieldProps = {
    children: React.ReactNode;
    numColumns: number;
}

/* Takes cards passed to CardField as children and distributes them across n 
columns, returning an array of the resulting columns. */
function cardsToColumns(children: React.ReactNode, n: number) {
    let cardArray = React.Children.toArray(children) as React.ReactElement[];
    let cols = [];

    /* Fill one column at a time. */
    for(let i = 0; i < n; i++)
    {
        let cardsInCol: React.ReactElement[] = [];
        /* To fill a column, iterate through the array of cards, skip-counting
        cards by the size of the column. Offset by the index of the current 
        column being filled, thus resulting in an even division of cards that 
        maps a linear order to a left-to-right wraparound order. */
        for(let j = i; j < cardArray.length; j += n)
        {
            cardsInCol.push(cardArray[j]);
        }

        /* Save a completed card column of the selected cards. */
        cols.push(<CardColumn cards={cardsInCol}></CardColumn>);
    }

    return cols;
}

const CardField: FC<CardFieldProps> = (props: CardFieldProps) => {
    return (
        <div className='columnOrganizer'>
            {cardsToColumns(props.children, props.numColumns)}
        </div>
    );
}

type CardColumnProps = {
    cards: React.ReactElement[]
}

/**
 * A column for holding posting preview cards (PostingCards)
 * @param children Ignored.
 * @param cards An array of cards to populate this column with.
 */
const CardColumn: FC<CardColumnProps> = (props: CardColumnProps) => {
    return <div className='cardColumn'>
        {props.cards}
    </div>
}

type PostingCardProps = {
    children: React.ReactNode;
    title: string;
    markdown: string;
    state: CardStates;
    tags: string[];
};

let cardColor = "#2B2529";
let cardHoverColor = "#1F1B1E"

/**
 * A single card for previewing a project posting on the project exploration
 * page. 
 * @param children Ignored.
 * @param title The project's title.
 * @param markdown The Markdown code to be rendered in this card.
 * @param state Whether the card is in expanded view or not. false 
 * by default. The card's Markdown text is displayed in full when true.
 * @param tags Tags for this project, represented as strings.
 */
const PostingCard: FC<PostingCardProps> = (props: PostingCardProps) => {
    const [beingHovered, setBeingHovered] = useState(false);
    return(
        <div className="card" 
            onMouseEnter={() => setBeingHovered(true)}
            onMouseLeave={() => setBeingHovered(false)}
            style={{backgroundColor: beingHovered ? cardHoverColor : cardColor}}>

            <TagContainer>
                {props.tags}
            </TagContainer>
            
            <div className='postingTitle'>
                {props.title}
            </div>
            
            <p className='postingMarkdown'>
                {props.markdown}
            </p>
        </div>
    )
}

type TagContainerProps = {
    children: React.ReactNode
}

/**
 * Takes an array of tags and organizes them in a linear wrap-around flexbox 
 * pattern.
 * @param props 
 */
const TagContainer: FC<TagContainerProps> = (props: TagContainerProps) =>
{
    return (
        <div className='tagContainer'>
            {
                React.Children.toArray(props.children).map(
                    (tagContent) => <Tag color={TagColors.red}>{tagContent}</Tag>
                )
            }
        </div>
    );
}

type TagProps = {
    children: React.ReactNode;
    color: TagColors
}

/**
 * @param children The text this tag contains. SHOULD ONLY BE ONE ELEMENT.
 * @param color The color of this tag, chosen from TagColors.
 */
const Tag: FC<TagProps> = (props: TagProps) => 
{
    return <div className='tag'>
        {props.children}
    </div>
}

type ContactContainerProps = {
    children: React.ReactElement | React.ReactElement[]
}

/**
 * A container for organizing contact buttons.
 * @param children Contact buttons to organize, in a linear, wrap-around fashion.
 */
const ContactContainer: FC<ContactContainerProps> = (props: ContactContainerProps) => {
    return <div></div>
}

type ContactProps = {
    contactType: ContactTypes;
    link: String
}

/**
 * A button with an embedded link to a website, etc. for contacting 
 * the poster of a project.
 * @param contactType The type of the contact (influences the logo, etc.)
 * @param link The embedded link. null if not applicable. 
 */
const Contact: FC<ContactProps> = (props: ContactProps) => {
    return <div></div>
}

export { 
    CardField,
    CardColumn, 
    PostingCard, 
    TagContainer, 
    Tag, 
    ContactContainer,
    Contact,
    CardStates,
};
