describe("텍스트 관리자 테스트", () => {
    const textManager = new TextManager();

    it("텍스트 관리자의 getValue를 테스트", () => {
        const initValue = textManager.getValue();

        expect(textManager.getValue()).toBe(initValue);
    });

    it("텍스트 관리자의 setValue를 테스트", () => {
        const newValue = { data: "helloooooow" };
        textManager.setValue(newValue);

        expect(textManager.getValue()).toBe(newValue.data);
    });
});
