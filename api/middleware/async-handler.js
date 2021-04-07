/**
 * Async function to wrap around route handlers and forward errors to global error handler
 * @param {*} cb
 */
function asyncHandler (cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

exports.asyncHandler = asyncHandler
