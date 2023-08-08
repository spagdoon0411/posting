import React from 'react';

type PostingCardProps = {
  children: React.ReactNode;
  title: string;
  image: string;
  buttontext: string;
  description: string;
};

function PostingCard(props: PostingCardProps) {
    return(
        <div className="card">
            <img src={props.image} alt="image" width={200}/>
            <h3>
                
            </h3>
            <p>
                {props.description}
            </p>
            {props.children}
            <button>
                {props.buttontext}
            </button>
        </div>
    )
}

export { PostingCard };
