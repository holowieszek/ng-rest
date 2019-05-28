const asyncWrapper = promise =>
  promise.then(result => ({ result, error: null })).catch(error => ({ error, result: null }));

export default asyncWrapper;
