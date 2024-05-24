import { EVENTS } from '../consts';

export function navigateTo(path) {
  window.history.pushState({}, '', path)

  const navigationEvent = new Event(EVENTS.pushState);
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    
    // Checking for primary click
    const isMainEvent = event.button === 0
    // Looking for additional keys fired along with mouse click
    const isModifiedEvent = event.ctrlKey || event.shiftKey
    // and last, for the target propertie
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      // Now we are sure is a primary click targeting inside the page, lets navigate
      event.preventDefault()
      navigateTo(to)
    }

  }

  return <a onClick={handleClick} href={to} target={target} {...props} /> // sending ...props for additional attributes
}