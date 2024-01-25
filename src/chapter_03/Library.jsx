import React from 'react';
import Book from './Book';

function Library(props) {
    return (
        <div>
            <Book name="오늘의 리액트" numOfPage={200} />
            <Book name="오늘의 자바스크립트" numOfPage={350} />
            <Book name="오늘의 앵귤러" numOfPage={400} />
        </div>
    );
}

export default Library;