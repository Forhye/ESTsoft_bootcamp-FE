import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";

export default function Header() {
    return (
        <header>
            <div className={style["header-wrap"]}>
                <h1>
                    <Link to="./">
                        <img
                            className={style.logo}
                            src={logo}
                            alt="두근두근 비밀일기"
                        />
                    </Link>
                </h1>
                <div>
                    <Link to="./signup" className="btn-join">
                        회원가입
                    </Link>
                </div>
            </div>
        </header>
    );
}
