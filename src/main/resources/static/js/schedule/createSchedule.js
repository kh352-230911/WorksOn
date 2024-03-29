/**
 * 시작 / 종료 시간에 현재시간 입력, 종료시간이 시작시간보다 늦어야만 하게 설정
 */
const startTime = document.getElementById('startTime');
const endTime = document.getElementById('endTime');
function endTimeChecker(){
    if(startTime > endTime){
        alert("종료 시간은 시작 시간보다 늦어야합니다.")
        return;
    }
}
const currentTime = new Date();
const formattedTime = currentTime.toISOString().slice(0, 16);
startTime.value = formattedTime;
endTime.value = formattedTime;

/**
 * 체크박스 1개만 선택하게 하기
 */
function checkOnlyOne(element){
    const checkboxes = document.getElementsByName("scheduleCategoryId");
    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
    element.checked = true;
}


/**
 * 체크박스 값 넘기기
 */
// document.createScheduleFrm.onsubmit = (e) =>{
//     const checkedValue = $("input[name=categoryId]:checked").val()
//     console.log(checkedValue);
//
// }
/**
 * 목록 중 하나 클릭 시 입력처리
 */
const createClickDelete = (empId) => {
    console.log(empId);
    const selected = document.getElementById(`create${empId}`);
    selected.outerHTML = '';
};

/**
 * 목록 중 하나 클릭 시 입력처리
 */
const createClickEvent = () => {
    document.querySelectorAll(".searchResult").forEach((emp) => {
        emp.addEventListener('click', (e) => {

            const input = document.querySelector("#create-search-input");
            input.value = '';
            const searchList = document.querySelector("#create-search-list");
            searchList.innerHTML = '';

            const {empId, empName, empPosition} = e.target.dataset;
            const selectArea = document.querySelector("#createSelectArea");

            selectArea.innerHTML += `
        <div id="create${empId}"
        class="selected flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
        <div class="text-sm font-normal leading-none max-w-full flex-initial">${empName}${empPosition}</div>
            <input type="hidden" readonly value="${empId}" name="createEmp">
            <div class="flex flex-auto flex-row-reverse">
                <div onclick="createClickDelete(${empId})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-red-400 rounded-full w-4 h-4 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
        `;
        });
    })}

/**
 * 참여사원 목록 요청
 */
document.querySelector("#create-search-input").addEventListener('keyup', (e) => {
    const input = e.target;
    console.log(input.value);
    const searchList = document.querySelector("#create-search-list");
    searchList.innerHTML = '';

    if(input.value !== ''){
        $.ajax({
            url: `${contextPath}employee/searchEmployee.do`,
            headers: {
                [csrfHeaderName] : csrfToken
            },
            data: {
                name: input.value
            },
            success(response) {
                console.log(response);
                searchList.innerHTML = '';

                response.forEach((e) => {
                    const {id, name, department: {name : deptName}, position: {name: positionName}} = e;

                    searchList.innerHTML += `
                <div class="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-blue-100 text-sm" onclick="javascript:createClickEvent();">
                    <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-blue-100">
                        <div data-emp-id="${id}" data-emp-name="${name}" data-emp-position="${positionName}"
                        class="searchResult w-full items-center flex">
                            <span class="mx-2">${name}</span>
                            <span class="mx-2">${positionName}</span>
                            <span class="mx-2">${deptName}</span>
                        </div>
                    </div>
                </div>
               `;
                });
            }
        })
    }
});