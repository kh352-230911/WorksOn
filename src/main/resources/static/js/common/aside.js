window.addEventListener('DOMContentLoaded', () =>{
    const lis = document.querySelectorAll("#nav-ul li");
    lis.forEach((li, i) => {
        li.classList.add("cursor-pointer")
    });
});

// approval-nav-ul li 마우스 커서 포인트 추가 - 우진
window.addEventListener('DOMContentLoaded', () =>{
    const lis = document.querySelectorAll(".approval-nav-ul li");
    lis.forEach((li, i) => {
        li.classList.add("cursor-pointer")
    });
});

window.addEventListener('DOMContentLoaded', () => {
    // const indexLi = document.querySelector("#indexLi");
    // const projectLi = document.querySelector("#projectLi");
    // const boardLi = document.querySelector("#boardLi");
    const focusBar = document.querySelector("#focus-bar");
    const lis = [...document.querySelectorAll("#nav-ul li")];


    console.log(window.location);
    console.log(window.location.pathname === "/WorksOn/");

    if(window.location.pathname === "/WorksOn/"){
        removeStyle(lis);
        lis[0].classList.add("bg-blue-500");
        focusBar.classList.remove("opacity-0");
        focusBar.style.top = `${lis[0].offsetTop}px`;
    }
    else if(window.location.pathname.startsWith("/WorksOn/schedule")){
        removeStyle(lis);
        lis[1].classList.add("bg-blue-500");
        focusBar.classList.remove("opacity-0");
        focusBar.style.top = `${lis[1].offsetTop}px`;
    }
    else if(window.location.pathname.startsWith("/WorksOn/chat")){
        removeStyle(lis);
        lis[2].classList.add("bg-blue-500");
        focusBar.classList.remove("opacity-0");
        focusBar.style.top = `${lis[2].offsetTop}px`;
    }
    else if(window.location.pathname.startsWith("/WorksOn/project")){
        removeStyle(lis);
        lis[3].classList.add("bg-blue-500");
        focusBar.classList.remove("opacity-0");
        focusBar.style.top = `${lis[3].offsetTop}px`;
    }
    else if(window.location.pathname.startsWith("/WorksOn/approval")){
        removeStyle(lis);
        lis[4].classList.add("bg-blue-500");
        focusBar.classList.remove("opacity-0");
        focusBar.style.top = `${lis[4].offsetTop}px`;
    }
    else if(window.location.pathname.startsWith("/WorksOn/attend")){
        removeStyle(lis);
        lis[5].classList.add("bg-blue-500");
        focusBar.classList.remove("opacity-0");
        focusBar.style.top = `${lis[5].offsetTop}px`;
    }
    else if(window.location.pathname.startsWith("/WorksOn/board")){
        removeStyle(lis);
        lis[6].classList.add("bg-blue-500");
        focusBar.classList.remove("opacity-0");
        focusBar.style.top = `${lis[6].offsetTop}px`;
    }
    else if(window.location.pathname.startsWith("/WorksOn/reservation")){
        removeStyle(lis);
        lis[7].classList.add("bg-blue-500");
        focusBar.classList.remove("opacity-0");
        focusBar.style.top = `${lis[7].offsetTop}px`;
    }
    else if(window.location.pathname.startsWith("/WorksOn/employee/employeeCreate")){
        removeStyle(lis);
        lis[8].classList.add("bg-blue-500");
        focusBar.classList.remove("opacity-0");
        focusBar.style.top = `${lis[8].offsetTop}px`;
    }
});

const removeStyle = (lis) => {lis.forEach((li, i) => {
    const focusBar = document.querySelector("#focus-bar");

    const h = 58;
    for(let i = 0; i < lis.length; i++) {
        lis[i].classList.remove("bg-blue-500")
    }}
)}