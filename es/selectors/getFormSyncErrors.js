export default function createGetFormSyncErrors(_ref) {
  var getIn = _ref.getIn,
    empty = _ref.empty
  return function(form, getFormState) {
    return function(state) {
      var nonNullGetFormState =
        getFormState ||
        function(state) {
          return getIn(state, 'form')
        }

      return getIn(nonNullGetFormState(state), form + '.syncErrors') || empty
    }
  }
}
