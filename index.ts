//Use this module for fetch data with retries. Based on node-fetch
import { Options } from './types/options'

const importDynamic = new Function('modulePath', 'return import(modulePath)')
type Fetch = typeof import('node-fetch').default
const fetchPromise: Promise<Fetch> = importDynamic('node-fetch').then(
  (mod: typeof import('node-fetch')) => mod.default
)
const fetch = (url: string, init?: Options) => fetchPromise.then(fetch => fetch(url, init))

export default async (url: string, opts: Options) => {
  let retry = (opts && opts.retry) || 3             // 3 retries
  let pause = (opts && opts.pause) || 0             // no pause
  let increase = (opts && opts.increasePause) || 1  // no increase

  while (retry > 0) {
    try {
      return await fetch(url, opts)
    } catch (e) {
      console.warn(e)

      retry -= 1
      if (retry === 0) {
        throw e
      }
      if (pause) {
        if (opts && !opts.silent)
          console.debug(
            url,
            `Attempt ${
              opts && opts.retry ? opts.retry - retry : 3 - retry
            }, pausing for ${pause}ms...`
          )
        await sleep(pause)
        pause *= increase
        if (opts && !opts.silent) console.debug({ url }, 'Done pausing...')
      }
    }
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}