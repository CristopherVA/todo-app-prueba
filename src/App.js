import React from 'react'
import { GlobalStyle, Container } from './GlobalStyle'
import { Todo } from './components/Todo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false
      },
    },
  })

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Container>
            <Todo />
          </Container>
        </QueryClientProvider>
      </Provider>
    </>
  )
}
