// Toggle Password Visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const icon = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        icon.textContent = '👁️';
    }
}

// Form Submission Handler
// Wrap DOM interactions to avoid errors when the script runs before elements exist
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const loginBtn = e.target.querySelector('.login-btn');
            const emailEl = document.getElementById('email');
            const passwordEl = document.getElementById('password');
            const email = emailEl ? emailEl.value : '';
            const password = passwordEl ? passwordEl.value : '';

            // Add loading state (guarded)
            if (loginBtn) {
                loginBtn.classList.add('loading');
                loginBtn.disabled = true;
                loginBtn.textContent = 'Logging in...';
            }

            try {
                // Simulate API call - Replace with actual API endpoint
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Validation
                if (!email || !password) {
                    throw new Error('Email and password are required');
                }

                if (!isValidEmail(email)) {
                    throw new Error('Please enter a valid email');
                }

                if (password.length < 6) {
                    throw new Error('Password must be at least 6 characters');
                }

                // Success
                if (loginBtn) {
                    loginBtn.classList.remove('loading');
                    loginBtn.classList.add('success');
                    loginBtn.textContent = '✓ Login Successful';
                }

                // Log success (replace with actual login logic)
                console.log('Login successful:', { email });

                // Redirect after delay (optional)
                setTimeout(() => {
                    // window.location.href = '/dashboard';
                    console.log('Redirecting to dashboard...');
                }, 1500);

            } catch (error) {
                // Error handling
                if (loginBtn) {
                    loginBtn.classList.remove('loading');
                    loginBtn.disabled = false;
                    loginBtn.textContent = 'Login';
                }

                showError((error && error.message) ? error.message : 'An unexpected error occurred');
                console.error('Login error:', error);
            }
        });
    }

    // Input animations on focus
    const inputs = document.querySelectorAll('.form-group input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            const group = this.closest('.form-group');
            if (group && group.parentElement) {
                group.parentElement.style.animation = 'none';
            }
        });
    });

    // Social button handlers
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const provider = btn.classList.contains('google') ? 'Google' : (btn.classList.contains('github') ? 'GitHub' : 'Provider');
            console.log(`Logging in with ${provider}...`);
        });
    });

    // Add keyframe animations via style tag
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Console greeting
    console.log('%c🌟 Welcome to Premium Login Screen 🌟', 'color: #6366f1; font-size: 20px; font-weight: bold;');
    console.log('%cDesigned with ❤️ for amazing experiences', 'color: #ec4899; font-size: 14px;');
});

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Error notification
function showError(message) {
    // Create error element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-notification';
    errorDiv.textContent = message;
    
    // Add styling
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ef4444, #dc2626);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
    `;
    
    document.body.appendChild(errorDiv);
    
    // Remove after 4 seconds
    setTimeout(() => {
        errorDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => errorDiv.remove(), 300);
    }, 4000);
}
