import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family lastName="silva">
        <Member name="bruno"/>
        <Member name="rafael"/>
        <Member name="rafael"/>
    </Family>,
    document.getElementById('app')
)
