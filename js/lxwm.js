// 1. 表单验证（示例：检查邮箱格式）  
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// 2. 输入字段焦点时添加样式  
var inputs = document.querySelectorAll('.biaodan input, .biaodan textarea');
inputs.forEach(function (input) {
    input.addEventListener('focus', function () {
        this.classList.add('focused');
    });
    input.addEventListener('blur', function () {
        this.classList.remove('focused');
    });
});

// 3. 提交后显示一个感谢信息  
var form = document.querySelector('.biaodan form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // 阻止表单的默认提交行为  

    // 这里可以添加自定义验证，例如：  
    var emailInput = document.getElementById('email');
    if (!validateEmail(emailInput.value)) {
        alert('请输入有效的邮箱地址！');
        return;
    }

    // 假设您已经通过Ajax提交了表单，现在显示感谢信息  
    alert('感谢您的留言，我们将尽快回复您！');

     this.reset();  
}); 

