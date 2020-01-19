import React, { createContext } from 'react'
import { RouteComponentProps } from "@reach/router";

export const PageContext = createContext<RouteComponentProps>({
  location: undefined
 });

export const PageProvider = (Component: React.ComponentType<RouteComponentProps>): React.FC => (props: RouteComponentProps) => {
  return (
    <PageContext.Provider value={{...props}}>
      <Component {...props} />
    </PageContext.Provider>
  )
}