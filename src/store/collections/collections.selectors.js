/**
 * Crafted in Erebor by thorin on 2019-02-12
 */
import { createSelector } from 'reselect';

// TODO: implement support for locale
export const getCollectionsByLocale = createSelector(
    state => state.collections.data,
    (collections) => {
        const [...mapEntries] = collections.values();
        mapEntries.forEach(collection => {
            collection.description = collection.description.find(desc => desc.lang === 'en').text;
            collection.title = collection.title.find(title => title.lang === 'en').text;
        });
        return mapEntries;
    }
);
