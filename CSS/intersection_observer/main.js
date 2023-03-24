const element = document.getElementById('section3');
console.log(element);

let options = {
  root: null, // by default root is null and it represents the viewport and viewport will work really nice in most use cases
  rootMargin: '0px',
  threshold: 1, // at what threshold ration you want to invoke the callback
};

function callback(entries, observer) {
  /**entries will give you all the entries/element for which our observer is observing*/
  /**In our case we are only observing the single element and we can pick it out by entries[0]*/

  let entry = entries[0]; // this will represent our element
  console.log(entry); // this target will represent the actual node

  if (entry.boundingClientRect.y <= 0) {
    entry.target.classList.toggle('color');
  }

  //entry.target.classList.add('fixed');
}

let observer = new IntersectionObserver(callback, options);
observer.observe(element); // we have started observing the element
