import { Middleware, Context } from '@nuxt/types'

const authFilter: Middleware = ({ store, redirect }: Context) => {
  if (!store.state.auth.loggedIn) {
    return redirect('/')
  }
}

export default authFilter
