import { RequestInit } from 'node-fetch'

export interface Options extends RequestInit {
  retry?: number //retry attempts (count)
  pause?: number //pause for retries (ms)
  increasePause?: number //increasing the pause on each retries
  silent?: boolean //silence pause messages
}