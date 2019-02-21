/**
 * Crafted in Erebor by thorin on 2019-02-13
 */
import React from 'react';
import { shallow } from 'enzyme';
import { CircularProgress, TableRow } from '@material-ui/core';

import CollectionsWidget from './collections-widget.component';

it('renders without crashing', () => {
    shallow(<CollectionsWidget collections={[]}/>);
});

it('should render a <div> if an error is passed', () => {
    const wrapper = shallow(<CollectionsWidget error={true}/>);
    const errorElem = <div>Something went wrong...</div>;
    expect(wrapper.contains(errorElem)).toEqual(true);
});

it('should render a <div> if it is loading', () => {
    const wrapper = shallow(<CollectionsWidget loading={true}/>);
    const spinnerElem = <div><CircularProgress color="secondary"/></div>;
    expect(wrapper.contains(spinnerElem)).toEqual(true);
});

it('should render a <div> if data is empty', () => {
    const wrapper = shallow(<CollectionsWidget collections={[]}/>);
    const emptyElem = <div>No data to display...</div>;
    expect(wrapper.contains(emptyElem)).toEqual(true);
});

it('should render 3 TableRows with data', () => {
    const mockArrayCollections = [
        { title: 'Foo', uid: 'Bar', description: 'Foo bar' },
        { title: 'Foo1', uid: 'Bar1', description: 'Foo bar 1' },
        { title: 'Foo2', uid: 'Bar2', description: 'Foo bar 2' }
    ];
    const wrapper = shallow(<CollectionsWidget collections={mockArrayCollections}/>);
    expect(wrapper.find(TableRow)).toHaveLength(3);
});
