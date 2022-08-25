import { createCachedSelector } from 're-reselect';

const selectAuthorsObj = state => state.socialMedia.authors;
const selecAuthorID = (state, id) => id;

export const selectSocialMediaAuthor = createCachedSelector(
  [selectAuthorsObj, selecAuthorID],
  (authorsObj, id) => {
    if (id === -1) return "";
    return authorsObj[id];
  }
)(
  (state, id) => id || ""
);
