import { Middleware, Context } from '@nuxt/types'

const authComplete: Middleware = ({ store, redirect }: Context) => {
  if (store.state.auth.loggedIn) {
    return redirect('/')
  }
}

export default authComplete
