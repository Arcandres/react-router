import { EVENTS } from '../consts';

export function navigateTo(path) {
  window.history.pushState({}, '', path)

  const navigationEvent = new Event(EVENTS.pushState);
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    event.preventDefault()
    navigateTo(to)
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}