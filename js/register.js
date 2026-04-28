document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取表单数据
    let username = document.querySelector('input[name="username"]').value.trim();
    let password = document.querySelector('input[name="password"]').value.trim();
    let email = document.querySelector('input[name="email"]').value.trim();
    let phone = document.querySelector('input[name="phone"]').value.trim();
    
    // 简单校验
    let usernameError = document.getElementById('usernameError');
    let passwordError = document.getElementById('passwordError');
    let isValid = true;
    
    if (username.length < 3) {
        usernameError.innerText = '用户名至少3位！';
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }
    
    if (password.length < 6) {
        passwordError.innerText = '密码至少6位！';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }
    
    if (!isValid) return;

    // 本地测试：用 localStorage 存储用户数据
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let isExist = users.some(user => user.username === username);
    
    if (isExist) {
        usernameError.innerText = '用户名已存在！';
        usernameError.style.display = 'block';
        return;
    }
    
    // 添加新用户
    users.push({ username, password, email, phone });
    localStorage.setItem('users', JSON.stringify(users));
    
    // 服务器环境：需后端接口写入 userdata.txt
    // fetch('../api/register.php', {
    //     method: 'POST',
    //     body: JSON.stringify({ username, password }),
    //     headers: { 'Content-Type': 'application/json' }
    // }).then(res => res.text()).then(data => {
    //     if (data === 'success') {
    //         alert('注册成功！即将跳转到登录页');
    //         window.location.href = 'login.html';
    //     }
    // });

    alert('注册成功！即将跳转到登录页');
    window.location.href = '../website/login.html';
});