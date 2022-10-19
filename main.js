

// var cookie = require('cookie');

// header.setHeader('set-cookie', [
//     'cookie1=value1; SameSite=Lax',
//     'cookie2=value2; SameSite=None; Secure',
// ]);

// const inputText = document.querySelector("#input")

// inputText.addEventListener("mouseover", () => {
//     const inputKeyboard = document.querySelector("#keyboard")
//     inputKeyboard.style.display = "block";
// })


// ㅡㅡㅡㅡㅡㅡ 입력창에 키보드 나오게 하는거 ㅡㅡㅡㅡㅡㅡㅡ //

const inputText = document.querySelector("#input")

inputText.addEventListener("mouseover", () => {
    const inputKeyboard = document.querySelector("#keyboard")
    inputKeyboard.style.display = "block";
})

// ㅡㅡㅡㅡㅡㅡ 버거메뉴누르면 사이드바 나오게 하는거 ㅡㅡㅡㅡㅡㅡㅡ //

const burger = document.querySelector("#bg")

const clickSidebar = document.querySelector("#clickSidebar")


burger.addEventListener("click", () => {

    clickSidebar.classList.toggle("hidden")

})

burger.addEventListener("mousedown", () => {
    burger.classList.add("bgeffect")
})

burger.addEventListener("mouseup", () => {
    burger.classList.remove("bgeffect")
})

// ㅡㅡㅡㅡㅡㅡ 마우스 올렸을때 스크롤 나오게하고 범위벗어나면 없어지게하는 거 ㅡㅡㅡㅡㅡㅡㅡ //


clickSidebar.addEventListener("mouseover", () => {
    document.documentElement.style.setProperty('--webkit-scrollbar', 'visible')
})

clickSidebar.addEventListener("mouseout", () => {
    document.documentElement.style.setProperty('--webkit-scrollbar', 'hidden')
})


// 입력창 눌렀을때 아래 검색어들 나오게 하는 것 + 돋보기 같이 나오게 하고 다른 곳 누르면 사라지게하는거 //

const clickHeaderContent = document.querySelector(".clickHeaderContent")

const inputcontent = document.querySelector("#input")

const front_glass = document.querySelector(".front_glasses")

const input_keyboard = document.querySelector(".input_keyboard")

inputcontent.addEventListener("focus", () => {
    front_glass.style.visibility = "visible"
    clickHeaderContent.style.visibility = "visible"
    input_keyboard.style.border = "1px solid rgb(28, 98, 185)"

})

inputcontent.addEventListener("blur", () => {
    front_glass.style.visibility = "hidden"

    clickHeaderContent.style.visibility = "hidden"

    input_keyboard.style.border = 'none'

})

// navbar 색깔변경 //
const navbarbtn = document.querySelectorAll(".navbarbtn")


navbarbtn.forEach(e =>
    e.addEventListener("focus", () => {
        e.style.backgroundColor = "white"
        e.style.color = "#181818"
    })
)

navbarbtn.forEach(e =>
    e.addEventListener("blur", () => {
        e.style.backgroundColor = ""
        e.style.color = ""
    })
)



// 오른쪽 동그란거 누르면 오른쪽 사이드 바 나오게하는거 //

const rightHiddenBox = document.getElementById("rightHiddenBox")
const rightSideBtn = document.getElementById("rightSideBtn")
const rightSideBtnImg = document.getElementById("img")

rightSideBtn.addEventListener("focus", () => {
    rightHiddenBox.style.visibility = "visible"
})

rightSideBtn.addEventListener("blur", () => {

    rightHiddenBox.style.visibility = "hidden"

})

rightSideBtnImg.addEventListener("mousedown", () => {
    rightSideBtnImg.style.border = "1px solid #3EA6FF"
})

rightSideBtnImg.addEventListener("mouseup", () => {
    rightSideBtnImg.style.border = "";
})


const viewBox = document.querySelectorAll(".box")
const boxIframe = document.querySelectorAll(".iframe")


// boxIframe.forEach(e => e.addEventListener("mouseover", () => {
//     e.style.zIndex = "100";
//     viewBox.forEach(e => e.classList.add("hoverbox"))
// }))

// iframe에 hover했을때 부모요소가 hover 적용되도록 만든거 //

boxIframe.forEach(e => e.addEventListener("mouseover", (event) => {
    event.target.parentNode.classList.add("hoverbox")
}))

boxIframe.forEach(e => e.addEventListener("mouseout", () => {
    viewBox.forEach(e => e.classList.remove("hoverbox"))
}))

// boxIframe.addEventListener("mouseout", () => {
//     console.log("bye")
//     viewBox.classList.remove("hoverbox")
// })

// short에 x버튼 눌렀을 때 short 내용 사라지고 문구랑 다시 살리는 버튼 나오게 하는거 //

const shorts = document.querySelector(".shorts")
const shortCloseBtn = document.querySelector("#shortCloseBtn")
const shortsHidden = document.querySelector(".shortsHidden")
const cancelBtn = document.querySelector('#cancelBtn')


shortCloseBtn.addEventListener("click", () => {
    shorts.style.display = "none"
    shortsHidden.style.display = "block"
})

cancelBtn.addEventListener("click", () => {
    shorts.style.display = ""
    shortsHidden.style.display = "none"

})