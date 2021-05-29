/**
 * Created by: Sagar Bajpai (ashversache@gmail.com)
 */
export const arrayFilterEmpty = (array) => array.filter((x) => !!x);

export const pathRewrite = (localUrl, remoteUrl) => (path) =>
    path.replace(new RegExp(localUrl.replace('/', '\\/'), 'g'), remoteUrl);
