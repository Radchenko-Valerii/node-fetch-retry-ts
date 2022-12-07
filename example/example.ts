import fetch from '../index'

const url = 'https://my.target.url.com/'
const retryOpts = {
  retry: 5,           //retry attempts (count), for default - 3
  pause: 500,         //pause for retries (ms), for default - 0 ms
  increasePause: 2,   //increasing the pause on each retries, for default - 1, no increase
  silent: false       //silence pause messages, for default - false
}

const example = async () => {
  try {
    const response: any = await fetch(url, retryOpts)
    console.log(await response.json())
  } catch (e){
    console.log(e)
  }
}

example()