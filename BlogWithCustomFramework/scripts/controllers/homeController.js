class HomeController {
    constructor (homeView, requester, baseUrl, appKey) {
        this._homeView = homeView;
        this._requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl; // TODO
    }
}