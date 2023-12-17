import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/Counter/counterSlice'
import registerSlice from './features/RegisterUser/registerSlice'
import  setNavigationTabBar  from './features/TabBar/tabBar'
import setTheme  from './features/Theme/theme'

export const store = configureStore({
  reducer: {
    counter: registerSlice,
    navbar: setNavigationTabBar,
    theme: setTheme
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch