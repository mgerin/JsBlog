class UserController {
    constructor (userView, requester, baseUrl, appKey) {
        this._userView = userView;
        this._requster = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl;
    }
}