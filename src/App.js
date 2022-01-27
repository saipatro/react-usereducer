import './App.css';
import { lazy, Suspense } from "react";
import { counterReducer, initialState } from '../src/Reducers/counterReducers';
import { CounterProvider } from './Context/counterContext';
import Dropdown from './Dropdown';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from 'react-query';
import { Routes, Route, Link } from 'react-router-dom';
import Another from './Another';
import { ErrorBoundary } from 'react-error-boundary';
import { ReactQueryDevtools } from 'react-query/devtools'
const ImageLib = lazy(() => import('./ImageLib'));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
        // cacheTime: 5000, // Default is 5min
      },
    },
  })

  return (
    <CounterProvider reducer={counterReducer} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Dropdown />
        </div>
        <Link to='/'>Home</Link>
        <Link to='/imageLib'> Image</Link>
        <Link to='/another'> Another</Link>
        <QueryErrorResetBoundary>
          {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div>
                There was an error!
                <button onClick={() => resetErrorBoundary()}>Try again</button>
                <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
              </div>
            )}
          >
            <Routes>
              <Route path="/another" element={<Another />} />
              <Route path="/imageLib" element={<Suspense fallback={<h1>Loading images...</h1>}><ImageLib /></Suspense>} />
            </Routes>
          </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CounterProvider>
  );
}

export default App;