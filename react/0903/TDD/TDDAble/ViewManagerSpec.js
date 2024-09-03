describe("클릭 이벤트 처리 및 view를 담당하는 함수", () => {
    // 예외처리
    it("viewManager에 textManager가 잘 전달되었는지 확인한다", () => {
        const textManager = null;
        const elements = {
            btnEl: document.createElement("button"),
            viewerEl: document.createElement("div"),
            inpEl: document.createElement("input"),
        };

        const actual = () => new ViewManager(textManager, elements);

        // toThorwError를 사용하여 에러가 발생하는지 확인
        expect(actual).toThrowError();
    });

    it("viewManager에 필요한 요소 3가지가 잘 전달되었는지 확인한다", () => {
        const textManager = new TextManager();
        const elements = {
            inpEl: null,
            btnEl: null,
            viewerEl: null,
        };

        const actual = () => new ViewManager(textManager, elements);

        // toThorwError를 사용하여 에러가 발생하는지 확인
        expect(actual).toThrowError();
    });

    const textManager = new TextManager();
    const elements = {
        btnEl: document.createElement("button"),
        viewerEl: document.createElement("div"),
        inpEl: document.createElement("input"),
    };
    const viewManager = new ViewManager(textManager, elements);

    it("clcick 이벤트가 발생했을 때 changeVlaue 함수가 잘 실행되는가", () => {
        // 특정 객체의 함수를 감시한다.
        spyOn(viewManager, "changeValue");
        elements.btnEl.click();

        expect(viewManager.changeValue).toHaveBeenCalled();
    });

    it("chageVlaue 함수가 호출되었을 때, updateView 함수가 호출되는지 확인합니다.", () => {
        spyOn(viewManager, "updateView");
        viewManager.changeValue();

        expect(viewManager.updateView).toHaveBeenCalled();
    });
});
