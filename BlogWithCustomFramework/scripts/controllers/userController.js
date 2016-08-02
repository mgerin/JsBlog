class UserController {
    constructor (userView, requester, baseUrl, appKey) {
        this._userView = userView;
        this._requster = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl + "/user" + appKey + "/";
    }

    showLoginPage(isLoggedIn) {
        this._userView.showLoginPage(isLoggedIn);
    }

    showRegisterPage(isLoggedIn) {
        this._userView.showRegisterPage(isLoggedIn);
    }

    login(requestData) {

    }

    register(requestData) {
        if (requestData.username.length < 5) {
            showPopup('error', "Username must consist of at least 5 symbols.");
            return;
        }

        if (requestData.fullName.length < 8) {
            showPopup('error', "Fullname must consist of at least 8 symbols.");
            return;
        }

        if (requestData.password.length < 6) {
            showPopup('error', "Password must consist of at least 6 symbols.");
            return;
        }

        if (requestData.password !== requestData.confirmPassword) {
            showPopup('error', "Passwords do not match.");
            return;
        }
    }

    logout() {

    }
}