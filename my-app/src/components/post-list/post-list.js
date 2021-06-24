import React from 'react';
import './post-list.css'; 


import PostListItem from '../post-list-item';

const PostList = ({posts}) => {
    const elements = posts.map((item) => {
        const{id, ...itemProps} = item;
        return (
            <li className="list-group-item">
                <PostListItem {...itemProps}
                /*label={item.label} 
                important={item.important}*/ />
            </li> // есть 2 варианта сделать это. const{id, ...item} относится к первому варианту
            //map перебирает все эелементы массива
            // label это свойства и они должны использоваться в дочернем элементе, т.е. post-list-item
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul> 
    )
}

export default PostList;