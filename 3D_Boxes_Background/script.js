const boxesContainer = document.getElementById('boxes') // Get the div element by its ID
const btn = document.getElementById('btn')

btn.addEventListener(
    'click',
    () => boxesContainer.classList.toggle('big')
    // classList 是 DOM 元素的一个属性，用于操作元素的 class 属性。
    // toggle() 方法用于在元素之间切换类名。
)

function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box)
        }
    }
}

createBoxes()


