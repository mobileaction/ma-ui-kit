export const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/;

export function isUrl (str: string): boolean {
    const regex = new RegExp(URL_REGEX);

    if (str.match(regex)) {
        return true;
    }

    return false;
}
