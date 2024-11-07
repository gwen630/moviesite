const body = document.querySelector('body')
const aside = document.querySelector('aside')
const items = document.querySelectorAll('article')
const closeBtn = document.querySelector('.closeBtn')

// for( 배열의 아이템 of 배열 ){실행구}

for( let item of items ){ // 각 article(item)에 적용
  item.addEventListener('click',(e)=>{
    window.scrollTo(0,0) 
    
    body.classList.add('on') // body에 .on 적용 -> aside가 튀어나옴

    let title = e.currentTarget.querySelector('h2').innerText
    let txt = e.currentTarget.querySelector('p').innerText
    let vid = e.currentTarget.querySelector('video').getAttribute('src')
    aside.querySelector('h2').innerText = title
    aside.querySelector('p').innerText = txt
    aside.querySelector('video').setAttribute('src',vid)
    //aside 자식요소에 클릭한 article에서 가져온 변수를 적용

    aside.querySelector('video').play() // aside의 video롤 재생
  })

  item.addEventListener('mouseenter',(e)=>{ 
    // 현재 이벤트가 적용된 (e.currentTarget) 엘리먼트의 자식요소 (video)
    e.currentTarget.querySelector('video').play()
  })

  item.addEventListener('mouseleave',(e)=>{
    e.currentTarget.querySelector('video').pause()
  })
}

// aside 안의 닫기버튼 작동

closeBtn.addEventListener('click',()=>{
  body.classList.remove('on')
  aside.querySelector('video').pause()
})
