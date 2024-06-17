function validateForm(event) {
    event.preventDefault(); // 阻止表单默认提交行为  
    var errorMsg = document.getElementById('errorMsg');
    var isValid = true;

    // 清除之前的错误消息  
    errorMsg.textContent = '';
    errorMsg.classList.remove('error');

    // 获取输入值  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 假设的验证逻辑（这里只是模拟）  
    var correctUsername = 'admin';
    var correctPassword = 'password123';

    if (username !== correctUsername || password !== correctPassword) {
        // 如果账号或密码不正确，显示错误消息  
        errorMsg.textContent = '账号密码出错，请重新输入';
        errorMsg.classList.add('error');
        isValid = false;
    } else {
        // 如果验证通过，显示登录成功弹窗  
        alert('登录成功！');
        // 这里你可以添加其他逻辑，比如重定向到另一个页面  
        // window.location.href = 'success_page.html';  
    }

    // 返回表单是否有效，如果无效则阻止表单提交  
    return isValid;
}

// 如果需要，还可以添加“重置”按钮的事件监听器来清除输入和错误消息  
document.querySelector('input[type="reset"]').addEventListener('click', function () {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('errorMsg').textContent = '';
    document.getElementById('errorMsg').classList.remove('error');
});  