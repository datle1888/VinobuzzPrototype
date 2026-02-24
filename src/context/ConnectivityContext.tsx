import React, { createContext, useContext, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

type ConnectivityContextValue = {
  isOffline: boolean;
  setOffline: (value: boolean) => void;
  toggleOffline: () => void;
};

const ConnectivityContext = createContext<ConnectivityContextValue | undefined>(
  undefined,
);

export function ConnectivityProvider({ children }: PropsWithChildren) {
  const [isOffline, setIsOffline] = useState(false);

  const value = useMemo<ConnectivityContextValue>(
    () => ({
      isOffline,
      setOffline: setIsOffline,
      toggleOffline: () => setIsOffline(prev => !prev),
    }),
    [isOffline],
  );

  return (
    <ConnectivityContext.Provider value={value}>
      {children}
    </ConnectivityContext.Provider>
  );
}

export function useConnectivity() {
  const context = useContext(ConnectivityContext);

  if (!context) {
    throw new Error(
      'useConnectivity must be used within a ConnectivityProvider',
    );
  }

  return context;
}
