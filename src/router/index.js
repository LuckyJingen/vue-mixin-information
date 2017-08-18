import { router } from '../util'
import Hello from '@/components/Hello'

let configure = [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]

router.addRoutes(configure)


export default router
