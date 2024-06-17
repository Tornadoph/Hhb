
function validateForm(form) {
    var name = form.name.value;
    var paswd = form.paswd.value;
    var repaswd = form.repaswd.value;
    var tel = form.tel.value;
    var email = form.email.value;
    var isValid = true;

    // 清除之前的错误消息  
    document.getElementById('errorMsg').textContent = '';

    // 验证账号  
    if (!name || !name.match(/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/)) {
        alert('账号格式不正确或为空');
        isValid = false;
    }

    // 验证密码  
    if (!paswd || !paswd.match(/^[a-zA-Z]\w{5,17}$/)) {
        alert('密码格式不正确或为空');
        isValid = false;
    }

    // 验证确认密码  
    if (paswd !== repaswd) {
        alert('两次输入的密码不一致');
        isValid = false;
    }

    // 验证手机号码  
    if (!tel || !tel.match(/^\d{11}$/)) {
        alert('手机号码格式不正确或为空');
        isValid = false;
    }

    // 验证邮箱  
    if (!email || !email.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
        alert('邮箱格式不正确或为空');
        isValid = false;
    }

    // 如果存在错误，阻止表单提交  
    return isValid;
}  