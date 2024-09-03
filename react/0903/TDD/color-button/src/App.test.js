// jest는 테스트 러너
// 리액트에서는 TDD를 하려면 테스팅 라이브러리, jest가 필요하다
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("버튼이 작동하냐", () => {
    render(<App />);

    const button = screen.getByRole("button", {
        name: "helloooooooooooooow royalblue",
    });
    expect(button).toHaveStyle({ backgroundColor: "tomato" });

    fireEvent.click(button);
    expect(button).toHaveStyle({ backgroundColor: "royalblue" });
    expect(button.textContent).toBe("helloooooooooooooow tomato");
});
