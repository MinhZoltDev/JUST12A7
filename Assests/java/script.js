function flipCard(cardElement) {
  const innerCard = cardElement.querySelector('.card-inner');
  
  // Nếu card chưa bị lật thì mới thực hiện
  if (!innerCard.classList.contains('is-flipped')) {
    innerCard.classList.add('is-flipped');

    // Sau 5 giây (5000ms) thì quay lại mặt trước
    setTimeout(() => {
      innerCard.classList.remove('is-flipped');
    }, 5000);
  }
}
// JAVA CHO MEMBER
// 1. Danh sách dữ liệu 48 thành viên (Bạn điền tiếp vào đây nhé)
const memberData = [
    { name: "TRAN MINH QUAN 1", title: "A GOOD BOY", desc: "Lorem ipsum dolor sit amet...", img: "Assests/img/MINH QUAN.png" },
    { name: "TRAN MINH QUAN 2", title: "A GOOD BOY", desc: "Lorem ipsum dolor sit amet...", img: "Assests/img/MINH QUAN.png" },
    { name: "TRAN MINH QUAN 3", title: "A GOOD BOY", desc: "Lorem ipsum dolor sit amet...", img: "Assests/img/MINH QUAN.png" },
    { name: "TRAN MINH QUAN 4", title: "A GOOD BOY", desc: "Lorem ipsum dolor sit amet...", img: "Assests/img/MINH QUAN.png" },
    { name: "TRAN MINH QUAN 5", title: "A GOOD BOY", desc: "Lorem ipsum dolor sit amet...", img: "Assests/img/MINH QUAN.png" },
    { name: "TRAN MINH QUAN 6", title: "A GOOD BOY", desc: "Lorem ipsum dolor sit amet...", img: "Assests/img/MINH QUAN.png" },
    // ... thêm cho đủ 48 người
];

let currentPage = 0;
const membersPerPage = 6;
const container = document.querySelector('.container');

function renderMembers(page) {
    // Hiệu ứng ẩn đi trước khi đổi dữ liệu
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.innerHTML = ""; // Xóa các box cũ
        
        const start = page * membersPerPage;
        const end = start + membersPerPage;
        const currentMembers = memberData.slice(start, end);

        currentMembers.forEach(member => {
            // Tạo cấu trúc đúng như ảnh HTML bạn gửi
            const boxHTML = `
                <div class="box">
                    <img src="${member.img}" alt="avatar">
                    <div class="desc">
                        ${member.name} <br>
                        ${member.title} <br>
                        ${member.desc} <br>
                        <div class="box-btn">
                            <a href="#">Know More!</a>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', boxHTML);
        });
        
        // Hiện lại sau khi đã render
        container.style.opacity = '1';
    }, 300);
}
function renderMembers(page) {
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.innerHTML = ""; 
        const start = page * membersPerPage;
        const end = start + membersPerPage;
        const currentMembers = memberData.slice(start, end);

        currentMembers.forEach(member => {
            const boxHTML = `
                <div class="box">
                    <img src="${member.img}" alt="avatar">
                    <div class="desc">
                        <b>${member.name}</b> <br>
                        <i>${member.title}</i> <br>
                        <p>${member.desc}</p>
                        <div class="box-btn">
                            <a href="#">Know More!</a>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', boxHTML);
        });
        
        container.style.opacity = '1';
        
        // Cập nhật số trang hiển thị
        document.getElementById('page-number').innerText = `Trang ${page + 1}`;
    }, 300);
}

// Hàm chuyển trang
function changePage(direction) {
    const maxPage = Math.ceil(memberData.length / membersPerPage) - 1;
    
    if (direction === 'next' && currentPage < maxPage) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 0) {
        currentPage--;
    }
    renderMembers(currentPage);
}

// Gọi hàm chạy lần đầu
renderMembers(currentPage);