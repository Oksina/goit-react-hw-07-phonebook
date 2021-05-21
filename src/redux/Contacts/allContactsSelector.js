import { createSelector } from '@reduxjs/toolkit';
export const getLoading = state => state.contacts.loading;
export const getAllContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

// export const getVisibleContacts = state => {
//     const allContacts = getAllContacts(state);
//     const filter = getFilter(state);
//     const normalizedFilter = filter.toLowerCase();
//     return allContacts.filter(contact =>
//         contact.name
//             .toLowerCase()
//             .includes(normalizedFilter),
//     );
// };
export const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        return contacts.filter(
            contact => contact.name.toLowerCase(),
            //.includes(filter.toLowerCase()),
        );
    },
);

// // export const getFilteredContacts = state => {
// //     const contacts = getAllContacts(state);
// //     const filter = getFilter(state);
// //     const normalizedFilter = filter.toLowerCase();

// //     return contacts.filter(({ name }) =>
// //         name
// //             .toLocaleLowerCase()
// //             .includes(filter.toLowerCase(normalizedFilter)),
// //     );
// // };

// //export default { getFilter, getFilteredContacts };

// export const getFilteredContacts = createSelector(
//     [(getAllContacts, getFilter)],
//     (contacts, filter) => {
//         const normalizedFilter = filter.toLowerCase();
//         return contacts.filter(
//             contact =>
//                 contact.name
//                     .toLowerCase()
//                     .includes(normalizedFilter()) ||
//                 contact.number
//                     .toLowerCase()
//                     .includes(normalizedFilter()),
//         );
//     },
// );
