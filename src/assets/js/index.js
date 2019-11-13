let body = document.querySelector('body');
let anchors = document.querySelectorAll('a');

window.addEventListener('load', () => {
    window.setInterval(() => {
        body.classList.remove('is-preload');
    }, 100);
});

anchors.forEach((anchor) => {
    let indent = Math.max(0, anchor.getParents('li').length - 1);
    let href = anchor.getAttribute('href');
    let target = anchor.getAttribute('target');

    b.push(`
        <a class="link depth-${indent}"
        ${( (typeof target !== 'undefined' && target != '') ? `target="${target}"` : `` ) }
        ${( (typeof href !== 'undefined' && href != '') ? `href="${href}"` : `` ) }>
        <span class="indent-${indent}"></span>
        ${anchor.textContent}
        </a>
    `)

    return b.join('');
});

let navList = () => {
    let b = [];

    anchors.forEach((anchor) => {
        let indent = Math.max(0, anchor.getParents('li').length - 1);
        let href = anchor.getAttribute('href');
        let target = anchor.getAttribute('target');
    
        b.push(`
            <a class="link depth-${indent}"
            ${( (typeof target !== 'undefined' && target != '') ? `target="${target}"` : `` ) }
            ${( (typeof href !== 'undefined' && href != '') ? `href="${href}"` : `` ) }>
            <span class="indent-${indent}"></span>
            ${anchor.textContent}
            </a>
        `)

        return b.join('');
    })

    return b;
}

navList()

let getParents = (node) => {
    let currentNode = node;
    let list = [];

    while(currentNode.parentNode != null && currentNode.parentNode != document.documentElement) {
        list.push(currentNode.parentNode);
        currentNode = currentNode.parentNode;
    }

    return list;
}

