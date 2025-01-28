import { url } from "inspector"
import pako from "pako"

export default function encodeUml(data: string): string {
  // compress the data
  data = uriEncode(data) // encode the data\
  var compressed = pako.deflate(data) // encode the compressed data
  return encode64(Buffer.from(compressed).toString("binary"))
}

export function encode64(data: string): string {
  let r = ""
  for (let i = 0; i < data.length; i += 3) {
    if (i + 2 == data.length) {
      r += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1), 0)
    } else if (i + 1 == data.length) {
      r += append3bytes(data.charCodeAt(i), 0, 0)
    } else {
      r += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1), data.charCodeAt(i + 2))
    }
  }
  return r
}

function uriEncode(data: string): string {
  return decodeURI(data)
}

function append3bytes(b1: number, b2: number, b3: number): string {
  let c1 = b1 >> 2
  let c2 = ((b1 & 0x3) << 4) | (b2 >> 4)
  let c3 = ((b2 & 0xf) << 2) | (b3 >> 6)
  let c4 = b3 & 0x3f
  let r = ""
  r += encode6bit(c1 & 0x3f)
  r += encode6bit(c2 & 0x3f)
  r += encode6bit(c3 & 0x3f)
  r += encode6bit(c4 & 0x3f)
  return r
}

function encode6bit(b: number): string {
  if (b < 10) {
    return String.fromCharCode(48 + b)
  }
  b -= 10
  if (b < 26) {
    return String.fromCharCode(65 + b)
  }
  b -= 26
  if (b < 26) {
    return String.fromCharCode(97 + b)
  }
  b -= 26
  if (b == 0) {
    return "-"
  }
  if (b == 1) {
    return "_"
  }
  return "?"
}
