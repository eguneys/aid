import { json, form } from 'common/xhr'
import main from './main'

let version = '1.0'

export function boot(opening: any) {

  let $el = document.querySelector('.opening') as HTMLElement
  main($el, opening)


  console.log(`Opening v${version}`)
}

export function boot_home() {


  const send_mine = document.getElementById('send-mine') as HTMLInputElement,
    send_featured = document.getElementById('send-featured') as HTMLInputElement


  send_mine && attach_send(send_mine, '/opening/add')
  send_featured && attach_send(send_featured, '/opening/addf')

}

function send_href(link: string, href: string) {
  if (link.length < 8) return
  json(href, {
    method: 'POST',
    body: form({link})
  }).then(res => chest.redirect(res.redirect))
}

function attach_send(element: HTMLInputElement, href: string) {
  element.addEventListener('change', event => {
    if (event.target) {
      send_href(element.value, href)
    }
  })
}
