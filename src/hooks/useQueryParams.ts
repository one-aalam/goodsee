import { WindowLocation } from "@reach/router";
import { parse, parseUrl } from 'query-string'
const isServer = typeof(window) === 'undefined'

export const useQueryParams = (location: WindowLocation) => {
  return isServer ? parseUrl(location.pathname).query : parse(location.search);
};
