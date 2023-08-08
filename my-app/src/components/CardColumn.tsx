import React, { ReactElement } from 'react'

type CardColumnProps = {
    children: React.ReactNode;
    cards: ReactElement[]; 
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