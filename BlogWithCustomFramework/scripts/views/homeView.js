class HomeView {
    constructor (wrapperSelector, mainContentSelector) {
        this _wrapperSelector = wrapperSelector;
        this _mainContentSelector = mainContentSelector;
    }

    showGuestPage (sideBarData, mainData) {
        let _that = this;

        $.get('templates/welcome-guest.html', function (template) {
            let renderedWrapper = Mustache.render(template, null);

            $(_that._wrapperSelector).html(renderedWrapper);
        })
    }

    showUserPage (sideBarData, mainData) {

    }


}