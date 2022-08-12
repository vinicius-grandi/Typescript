
(function(modules) {
  // Define runtime
  const installedModules = {}; // id/index + exports
  function _our_require_(moduleId) {
    // Module in cache?
    if (installedModules[moduleId]) {
      // return function exported in module
      return installedModules[moduleId].exports;
    }

    // Build module, store exports against this ref.
    const module = {
      i: moduleId,
      exports: {},
    };

    // Execute module template function. Add exports to ref.
    console.log(moduleId)
    modules[moduleId].call({}, module, _our_require_);

    // cache exports of module
    const exports = module.exports;
    installedModules[moduleId] = exports;

    // Return exports of module
    return exports;
  }
  // Load entry module via id + return exports
  return _our_require_(3)
})
/* Dep tree */
([

/* index/id 0 */
(function(module, _ourRequire) {
  "use strict";
  module.exports = returnDateTime;

})
,
/* index/id 1 */
(function(module, _ourRequire) {
  "use strict";
  module.exports = logger;

})
,
/* index/id 2 */
(function(module, _ourRequire) {
  "use strict";
  const logger = _ourRequire(-1);
module.exports = logDate;

})
,
/* index/id 3 */
(function(module, _ourRequire) {
  "use strict";
  const returnDateTime = _ourRequire(-1);
const logDate = _ourRequire(-1);
const main = () => {
  const date = returnDateTime();
  logDate(date);
};
main();

})

])
