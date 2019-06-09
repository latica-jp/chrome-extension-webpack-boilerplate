const getFieldByLabel = label => {
  return getField(field => field.label === label)
}

const getFieldByCode = code => {
  return getField(field => field.var === code)
}

const getFieldById = id => {
  return getField(field => Number.parseInt(field.id) === id)
}

const getFieldBySome = some => {
  const num = typeof some === 'number' ? Number(some) : -1
  return getFieldByCode(some) || getFieldByLabel(some) || getFieldById(num)
}

const getField = finder => {
  return Object.values(cybozu.data.page.FORM_DATA.schema.table.fieldList).find(finder)
}

const inspectFieldBySome = some => {
  const field = getFieldBySome(some)
  if (field) inspectField(field)
  return field
}

const inspectField = field => {
  inspect(document.querySelector(getFieldSelector(field.id)))
}

const getFieldSelector = id => {
  return `.value-${id}`
}

if (window.cybozu.data.page.FORM_DATA) {
  Object.assign(window, {
    f: getFieldBySome,
    i: inspectFieldBySome,
  })
}
