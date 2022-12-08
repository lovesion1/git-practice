// document.getElementById()

// html 'id' 속성(Attributes) 값으로 검색한 요소를 반환
// 여러요소가 검색되면, 가장 먼저 찾은 요소만 반환
// 검색 결과 없으면 'null을 반환'

const el = document.getElementById('child2')
console.log(el)


// document.querySelector()

// CSS선택자로 검색한 요소를 하나 반환함
// 여러 요소가 검색되면 가장 먼저 찾은 요소만 반환 없으면 null 반환

const e2 = document.querySelector('.child:first-child')
const e3 = document.querySelector('.child')
console.log(e2)
console.log(e3)


// document.querySelectorAll()
// css 선택자로 검색한 모든 요소를 'NodeList'로 반환
// NodeList객체는  .forEach()를 사용할수 있다


const nodeList = document.querySelectorAll('.child')
console.log(nodeList)
nodeList.forEach(el=>console.log(el.textContent))

console.log(Array.from(nodeList).reverse())


// N.parentElement

// 노드의 부모 요소를 반환

const e5=document.querySelector('.child')
console.log(e5.parentElement)

const e6=document.querySelector('.parent')
console.log(e6.parentElement)


// E.closet()
// 자신을 포함한 조상 요소중 'CSS선택자'와 일치하는 
// 가장 가까운 요소를 반환

const eclo = document.querySelector('.child')

console.log(eclo.closest('div'))
console.log(eclo.closest('body'))
console.log(eclo.closest('.hello'))
