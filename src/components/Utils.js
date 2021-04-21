
export const comaCreator = (elem1, elem2) => {
    if (elem1 != null && elem2 != null) {
        return ' ve ';
    } else {
        return '';
    }
}

export const createSearchLink = (url, keyword) => {
    return url + '/search/' + keyword + '?';
}
