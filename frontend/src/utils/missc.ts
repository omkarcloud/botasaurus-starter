export function readNumber(r) { if ("" === r || "number" != typeof r && "string" != typeof r) return null; var t = Number(r); return Number.isNaN(t) ? null : t }

export function isEmpty(x: any) {
  return (
    x === null ||
    x === undefined ||
    x === '' ||
    (typeof x == 'string' && x?.trim() === '')
  )
}

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}
