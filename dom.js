const heading = document.getElementById('hello')
const heading2 = document.querySelector('.h2-hello')
const heading3 = document.querySelector('.h3-hello')

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

setTimeout(() => {
    addStylesTo(heading2, 'Learn', 'lightBlue')
}, 3000)

setTimeout(() => {
    addStylesTo(heading3, 'Practice', 'yellow', '3rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'lightBlue') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'lightBlue'
        heading2.style.backgroundColor = '#000'
    }
})