
//create a vElement
function createVElement(tag, config, children = null) {
    const { className } = config;

    return {
        tag: tag,
        props: {
            children: children,
        },
        className: className,
        dom: null,
    }
}
function mountVElement(vElement, parentDOMNode) {
    const { tag, className, props } = vElement;

    //create a native DOM node
    const domNode = document.createElement(tag);

    //for later reference save the DOM node
    //on our vElement
    vElement.dom = domNode;

    if (props.children) {
        //Important: we pass the parentDOMnode 
        //again and again
        props.children.forEach((child) => {
            mountVElement(child, domNode)
        });
    }
    //add className to native node
    if (className !== undefined) {
        domNode.className = className;
    }


    //Append domNode to the DOM
    parentDOMNode.appendChild(domNode)
}

//get native DOM, For now let's use the body;
const root = document.body;
//create vElement
const myApp = createVElement('div', { className: 'my-class' }, [
    createVElement('h1', { className: 'my-header' }),
    createVElement('div', { className: 'my-container' }, [
        createVElement('div', { className: 'my-sub-container' }, [
            createVElement('div', { className: 'my-sub-sub-container' }, [
                createVElement('div', { className: 'my-sub-sub-sub-container' }, [
                    createVElement('div', { className: 'my-sub-sub-sub-sub-container' }, [
                        createVElement('div', { className: 'my-sub-sub-sub-sub-sub-container' }, []),
                        createVElement('h1', { className: 'my-sub-sub-sub-sub-sub-header' }, [])
                    ])
                ])
            ])
        ]),
    ])
]);
//mount in DOM

mountVElement(myApp, root);

global.myGlobalApp = myApp
console.log(myGlobalApp.className)// returns "my-class"

//let's try something weird:
myGlobalApp.dom.style = 'height: 100px; width: 100px; background-color: red';

