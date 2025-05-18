function showDropDown(button) {
    document.querySelectorAll('.dropdown-content').forEach(drop => {
            drop.style.display = 'none';
        });
    
    const dropdown = button.nextElementSibling;
    dropdown.style.display = 'block';
}

function hideDropDown(elementCurrent, idElementSet, idDropDown) {
    const elementSet = document.getElementById(idElementSet);
    elementSet.setAttribute("value", elementCurrent.innerText);
    document.getElementById(idDropDown).style.display = 'none';
}

document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(drop => {
            drop.style.display = 'none';
        });
    }
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown-filter')) {
        document.querySelectorAll('.dropdown-content').forEach(drop => {
            drop.style.display = 'none';
        });
    }
});


function loadFeedback(element)
{
    var elementName = element.innerText;
    indexSlideFeedback = list_customer.indexOf(elementName);
    
    SlideFeedback(); 
}
function loadFeedback2(element)
{
    var elementName = element.innerText;
    indexSlideFeedback2 = list_customer2.indexOf(elementName);
    
    SlideFeedback2(); 
}

var indexSlideFeedback = 0;
var list_customer = ["Chị Thu Hà", "Anh Khánh", "Chị Linh - Anh Dũng", "Bạn Minh Hoàng", "Cô Thanh và bạn"];
var list_title = ["Du thuyền Heritage Bình Chuẩn", "Du thuyền Stellar of the Seas", "", "", "", ""];
var list_content = ["Chị rất cảm ơn team đã tư vấn cho chị chọn du thuyền Heritage Bình Chuẩn. Bố mẹ chị rất ưng í em ạ!Tàu đẹp, mang đậm phong cách Á Đông. Đồ ăn hợp khẩu vị. Các bạn nhân viên trên tàu nhiệt tình và chu đáo.",
    "Anh chọn ngày đi tàu trùng với sinh nhật vợ anh. Muốn là món quà tặng vợ. Với lại, vợ anh thích chụp ảnh nữa. Anh thấy bạn bè bảo đặt tàu này hơi khó vì rất hot, hay kín phòng. May quá bên em lại có phòng tàu này.\nCảm ơn dịch vụ của bên em nhé!\nTàu đẹp, sang trọng, rất ổn! Tối sinh nhật vợ anh thì tàu có tặng 1 bánh sinh nhật nhỏ. Nói chung, cả gia đình anh rất hài lòng về chuyến đi cũng như dịch vụ tư vấn của bên em.",
    "Tour du thuyền 2 ngày 1 đêm rất tuyệt vời,tôi đc ngắm vẻ đẹp cả vịnh Hạ Long,khám phá các hang động.\nNhân viên tư vấn nhiệt tình,phục vụ chu đáo. Đồ ăn ngon,phòng ốc đẹp.\nĐây thực sự là trải nghiệm đáng nhớ,mình sẽ tiếp tục ủng hộ và giới thiệu cho bạn bè. Cảm ơn du thuyền!",
    "Cảm ơn team đã cho mình trải nghiệm quá ưng ý.\nĐi đúng hôm thời tiết đẹp,ngắm cảnh vịnh Hạ Long đẹp tuyệt vời.\nNhân viên tư vấn nhiệt tình còn note lại khách dị ứng món gì,phục vụ chu đáo, buffet hải sản tươi ngon,phòng ốc đẹp\nTuyệt vời lắm !!!",
    "Du thuyền 5 sao và sự trải nghiệm tuyệt vời. Tour của chúng tôi đi rất đầy đủ như theo chương trình đã thông báo trước. Đồ ăn khá đa dạng, nấu vừa với khẩu vị của tất cả mọi độ tuổi từ bé đến các bác U80.\nChúng tôi được trải nghiệm gần như đầy đủ các hoạt động chèo kayak,thăm hang,thăm vịnh.... và loại hải sản tươi ngon\nRất đáng nhớ !!!"
]

function SlideFeedback()
{
    if (indexSlideFeedback >= 5)
        indexSlideFeedback = 0;
    
    var title = document.getElementsByClassName("feedback-title-duthuyen")[0];
    var content = document.getElementsByClassName("feedback-content-duthuyen")[0];
    var customer = document.getElementsByClassName("feedback-customer-duthuyen")[0];

    title.innerText = list_title[indexSlideFeedback];
    content.innerText = list_content[indexSlideFeedback];
    customer.innerText = list_customer[indexSlideFeedback] + " -";

    indexSlideFeedback += 1;
}
if (document.getElementsByClassName("feedback-content-duthuyen")[0] != null)
{
    setInterval(SlideFeedback, 5000);
}

var indexSlideFeedback2 = 0;
var list_customer2 = ["Chị Lê Thuỷ", "Cô Minh Hoà", "Anh Quang Anh", "Chị Giang", "Bạn Chu Huyền", "Cô Giang"];
var list_title2 = ["", "", "", "", "", ""];
var list_content2 = ["Chuyến bay của chị và gia đình đi chơi rất thuận lợi em ạ. May là chị đặt vé bên em. Bên em tư vấn chọn chuyến cho chị xong lại check in online cho chị nữa nên cả nhà được ngồi gần nhau. Bạn lớn nhà chị được ngồi cạnh cửa sổ nhìn ngắm lúc cất cánh thích lắm! Nhà chị cũng thường xuyên đi chơi nên chị sẽ đặt vé bên em nhiều nhiều!",
    "Cô vừa về đến nhà. Chuyến bay tốt lắm cháu ạ! Chuẩn giờ, bay máy bay to. Con cô bảo đặt được vé giá tốt mà giờ bay cũng rất đẹp. Lần sau lại đặt vé cho cô nhé!",
    "Mọi khi anh hay đi Vietnamairlines. Vừa rồi bên em tư vấn, anh bay thử Bamboo thấy khá ổn em ạ. Chất lượng dịch vụ tốt, làm thủ tục nhanh. Với lại, đợt rồi cũng máy bay Bamboo vì nhà anh nhiều vali. Bamboo tính cân nên cũng tiện. Anh hài lòng về chuyến bay!",
    "Lần đầu chị đặt vé bay đi nước ngoài bên em và cảm thấy vô cùng hài lòng! Chị rất cảm ơn bên em tư vấn cho chị chuyến bay, giờ bay đẹp, thời gian nối chuyến hợp lý, không bị mệt. Chắc chắn chị sẽ đặt vé bên em nhiều nhiều.",
    "Alo, mình và gia đình vừa về. Cảm ơn bên bạn đặt vé cho mình nhé! Cả nhà đi vui lắm bạn ạ. May là bạn tư vấn cho mình giờ vì nhà mình có trẻ nhỏ. Chuyến bay chuẩn giờ, chỗ ngồi đẹp. Lần sau, mình lại nhờ bạn đặt vé nhé!",
    "Cô bị đau chân nên hay phải chọn chỗ ngồi thoải mái. Bên cháu tư vấn tốt lắm! Bạn đặt vé chọn cho cô máy bay to, thân rộng. Cô rất ưng í! Mấy hôm nữa cô lại bay tiếp nên nhờ bên cháu kiểm tra vé và đặt chỗ cho cô nhé!"
]

function SlideFeedback2()
{
    if (indexSlideFeedback2 >= 6)
        indexSlideFeedback2 = 0;
    
    var content = document.getElementsByClassName("feedback-content-maybay")[0];
    var customer = document.getElementsByClassName("feedback-customer-maybay")[0];

    content.innerText = list_content2[indexSlideFeedback2];
    customer.innerText = list_customer2[indexSlideFeedback2] + " -";

    indexSlideFeedback2 += 1;
}

if (document.getElementsByClassName("feedback-content-maybay")[0] != null)
{
    setInterval(SlideFeedback2, 5000);
}

function showKhuHoi()
{
    var khuHoi = document.getElementById("khu-hoi");
    var ngayVe = document.getElementById("ngay-ve");
    var labelNgayVe = document.getElementsByClassName("flight-input-label")[3];
    if (khuHoi.checked)
    {
        labelNgayVe.style.display = 'block';
        ngayVe.style.display = 'block';
    }
    else
    {
        labelNgayVe.style.display = 'none';
        ngayVe.style.display = 'none';
    }
}

function showMenu() {
    document.querySelector('.navbar ul').classList.toggle('active');
}