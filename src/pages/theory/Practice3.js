import React from "react";
import "../theory/practice.css";

const Practice3 = () => {
    return(
        <div className="div-practice">
            <h3 align="center">Лабораторная работа №3</h3>
            <h4 align="center">Контролируемые гейты</h4>
            <h4 align="center">1. Цель работы</h4>
            <p><b>Целью</b> работы является получение навыков применения однокубитных гейтов и реализации квантовых алгоритмов на их основе.</p>
            <h4 align="center">2. Контролируемые гейты в системе QSIM</h4>
            <p>В таблице 1 представлены варианты контролируемых гейтов, которые есть в системе QSIM, и описание их работы. При этом контролируемые гейты получаются путем переноса символа «точка» на соответствующий гейт. Таким образом можно организовывать как двукубитные, так и многокубитные контролируемые гейты.</p>
            <p align="right"><i>Таблица 1. Контролируемые квантовые гейты в системе QSIM</i></p>
            <table align="center">
                <tbody>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Графическое обозначение</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Название гейта</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Описание</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Контролируемый гейт Адамара</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Преобразование Адамара применяется к кубиту q<sub>1</sub>, если кубит q<sub>0</sub> находится в состоянии <img className="state_1"></img></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Контролируемый гейт <b><i>X</i></b></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Инверсия (гейт <b><i>X</i></b>) применяется к кубиту q<sub>1</sub>, если кубит q<sub>0</sub> находится в состоянии <img className="state_1"></img></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Контролируемый гейт <b><i>Y</i></b></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Гейт <b><i>Y</i></b> применяется к кубиту q<sub>1</sub>, если кубит q<sub>0</sub> находится в состоянии <img className="state_1"></img></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Контролируемый гейт <b><i>Z</i></b></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Гейт <b><i>Z</i></b> применяется к кубиту q<sub>1</sub>, если кубит q<sub>0</sub> находится в состоянии <img className="state_1"></img></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Контролируемый гейт <b><i>Rx</i></b></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Гейт <b><i>Rx</i></b> применяется к кубиту q<sub>1</sub>, если кубит q<sub>0</sub> находится в состоянии <img className="state_1"></img></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Контролируемый гейт <b><i>Ry</i></b></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Гейт <b><i>Ry</i></b> применяется к кубиту q<sub>1</sub>, если кубит q<sub>0</sub> находится в состоянии <img className="state_1"></img></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Контролируемый гейт <b><i>Rz</i></b></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Гейт <b><i>Rz</i></b> применяется к кубиту q<sub>1</sub>, если кубит q<sub>0</sub> находится в состоянии <img className="state_1"></img></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Контролируемый гейт <b><i>U1</i></b></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Гейт <b><i>U1</i></b> применяется к кубиту q<sub>1</sub>, если кубит q<sub>0</sub> находится в состоянии <img className="state_1"></img></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Контролируемый гейт <b><i>U2</i></b></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Гейт <b><i>U2</i></b> применяется к кубиту q<sub>1</sub>, если кубит q<sub>0</sub> находится в состоянии <img className="state_1"></img></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Контролируемый гейт <b><i>U3</i></b></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Гейт <b><i>U3</i></b> применяется к кубиту q<sub>1</sub>, если кубит q<sub>0</sub> находится в состоянии <img className="state_1"></img></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Сдвоенный контролируемый гейт <b><i>X</i></b></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Гейт <b><i>X</i></b> применяется к кубиту q<sub>2</sub>, если оба кубита q<sub>0</sub> и q<sub>1</sub> находятся в состоянии <img className="state_1"></img></div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <h4 align="center">3. Программа работы</h4>
        </div>
    );

};

export default Practice3;