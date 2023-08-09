import React, { FC } from 'react';
import { TagColors } from './Colors';
import { ContactTypes } from './ContactTypes';
import './CardComponents.css'


enum CardStates {
    tiny, /* A small, drop-down representation of a card. */
    compressed, /* An expanded card with rendered Markdown abbreviated */
    expanded /* A card with Markdown fully-visible */
} 

type CardColumnProps = {
    children: React.ReactElement[];
}

/**
 * A column for holding posting preview cards (PostingCards)
 * @param children An array of ReactElements, meant to contain PostingCard 
 * instances that this column will organize. Passed as children of this React
 * element.
 */
const CardColumn: FC<CardColumnProps> = (props: CardColumnProps) => {
    return <div className='cardColumn'>
        {props.children}
    </div>
}

type PostingCardProps = {
    children: React.ReactNode;
    title: string;
    markdown: string;
    state: CardStates
};

/**
 * A single card for previewing a project posting on the project exploration
 * page. 
 * @param children: Ignored.
 * @param title: The project's title.
 * @param markdown: The Markdown code to be rendered in this card.
 * @param state: Whether the card is in expanded view or not. false 
 * by default. The card's Markdown text is displayed in full when true.
 */
const PostingCard: FC<PostingCardProps> = (props: PostingCardProps) => {
    return(
        <div className="card">
            <TagContainer>

            </TagContainer>
            <div className='postingTitle'>
                {props.title}
            </div>
            <p>
                {props.markdown}
            </p>
        </div>
    )
}

type TagContainerProps = {
    children: React.ReactElement[]
}

/**
 * Takes an array of tags and organizes them in a linear wrap-around flexbox 
 * pattern.
 * @param props 
 */
const TagContainer: FC<TagContainerProps> = (props: TagContainerProps) =>
{
    return <div>
        {props.children}
    </div>
}

type TagProps = {
    text: String,
    color: TagColors
}

/**
 * A tag, with color chosen from TagColors.
 * @param text 
 * @param color
 */
const Tag: FC<TagProps> = (props: TagProps) => 
{
    return <div></div>
}

type ContactContainerProps = {
    children: React.ReactElement[]
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

export { CardColumn, 
    PostingCard, 
    TagContainer, 
    Tag, 
    ContactContainer,
    Contact,
    CardStates
};
