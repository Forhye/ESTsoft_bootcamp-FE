class ViewManager {
    constructor(textManager, elements) {
        if (textManager.constructor !== TextManager) {
            throw new Error("textManager 객체가 전달되지 않음");
        }

        if (!elements.btnEl || !elements.viewerEl || !elements.inpEl) {
            throw new Error("세가지 요소중 누락된것이 있습니다.");
        }

        this.inpEl = elements.inpEl;
        this.viewerEl = elements.viewerEl;
        this.textManager = textManager;

        elements.btnEl.addEventListener("click", () => {
            this.changeValue();
        });
    }

    // constructor 안에서 사용하려면 앞에 function 을 붙여줘야한다
    changeValue() {
        this.textManager.setValue({ data: this.inpEl.vlaue });
        this.updateView();
    }

    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }
}
