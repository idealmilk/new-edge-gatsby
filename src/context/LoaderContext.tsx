import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  useEffect,
} from 'react';

interface ILoader {
  showLoader: boolean;
  toggleLoader: () => void;
}

export const LoaderContext = createContext<ILoader>({
  showLoader: true,
  toggleLoader: () => {},
});

interface ILoaderProviderProps {
  children: ReactNode;
}

export const LoaderProvider: FC<ILoaderProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<ILoader>({
    showLoader: true,
    toggleLoader: () => {},
  });

  useEffect(() => {
    // Update the state and setLoading to false once everything has been initialized
    setState({
      showLoader: true,
      toggleLoader: () => {
        setState((prevState) => ({
          ...prevState,
          showLoader: !prevState.showLoader,
        }));
      },
    });
    setLoading(false);
  }, []);

  if (loading) {
    return <div />;
  }

  return (
    <LoaderContext.Provider value={state}>{children}</LoaderContext.Provider>
  );
};
