const middleware = {}

middleware['authComplete'] = require('../middleware/authComplete.ts')
middleware['authComplete'] = middleware['authComplete'].default || middleware['authComplete']

middleware['authFilter'] = require('../middleware/authFilter.ts')
middleware['authFilter'] = middleware['authFilter'].default || middleware['authFilter']

export default middleware
