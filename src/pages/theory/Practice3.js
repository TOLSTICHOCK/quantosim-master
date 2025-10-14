import React from "react";
import "../theory/lecture.css";

const Practice3 = () => {
    return(
        <div className="div-lecture">
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
            <p>Выполните следующие пункты работы:</p>
            <p>1. Реализуйте схему получения запутанного состояния двух кубитов <i className="imgP3_1"></i>. Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>2. Реализуйте схему получения запутанного состояния двух кубитов {" 01 + 10"}. Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>3. Реализуйте схему получения запутанного состояния двух кубитов {" 00 - 11"}. Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>4. Реализуйте схему получения запутанного состояния двух кубитов {" 01 - 10"}. Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>5. Реализуйте схему получения запутанного состояния двух кубитов согласно вашему варианту в таблице 2. Выполните симуляцию и обоснование результатов симуляции.</p>
            <p align="right"><i>Таблица 2. Варианты заданий</i></p>
            <table align="center">
                <tbody>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вариант</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Состояние</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вероятность |α|<sup>2</sup></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вероятность |β|<sup>2</sup></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>1</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|00⟩ + β|11⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>5</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>95</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>2</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|00⟩ + β|11⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>10</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>90</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>3</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|00⟩ + β|11⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>20</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>80</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>4</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|00⟩ + β|11⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>30</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>70</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>5</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|00⟩ + β|11⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>80</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>20</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>6</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|00⟩ + β|11⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>90</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>10</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>7</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|00⟩ + β|11⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>95</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>5</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>8</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|00⟩ + β|11⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>5</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>95</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>9</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|01⟩ + β|10⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>40</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>60</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>10</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|01⟩ + β|10⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>55</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>45</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>11</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|01⟩ + β|10⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>60</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>40</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>12</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|01⟩ + β|10⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>70</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>30</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>130</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|01⟩ + β|10⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>10</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>90</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>14</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|01⟩ + β|10⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>20</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>80</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>15</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|01⟩ + β|10⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>30</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>70</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>16</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>α|01⟩ + β|10⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>70</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>30</div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p>6. Реализуйте схему получения запутанного состояния двух кубитов α|00⟩ + β|01⟩ + γ|11⟩, согласно варианту в таблице 3. Выполните симуляцию и обоснование результатов симуляции.</p>
            <p align="right"><i>Таблица 3. Варианты заданий</i></p>
            <table align="center">
                <tbody>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вариант</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вероятность |α|<sup>2</sup></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вероятность |β|<sup>2</sup></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вероятность |γ|<sup>2</sup></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>1</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>5</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>45</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>2</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>10</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>40</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>3</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>15</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>35</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>4</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>20</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>30</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>5</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>25</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>25</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>6</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>30</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>20</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>7</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>35</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>15</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>8</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>40</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>10</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>1</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>45</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>5</div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p>7. Реализуйте схему получения запутанного состояния двух кубитов α|01⟩ + β|10⟩ + γ|11⟩, согласно варианту в таблице 4. Выполните симуляцию и обоснование результатов симуляции.</p>
            <p align="right"><i>Таблица 4. Варианты заданий</i></p>
            <table align="center">
                <tbody>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вариант</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вероятность |α|<sup>2</sup></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вероятность |β|<sup>2</sup></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вероятность |γ|<sup>2</sup></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>1</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>5</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>45</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>2</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>10</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>40</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>3</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>15</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>35</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>4</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>20</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>30</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>5</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>25</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>25</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>6</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>30</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>20</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>7</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>35</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>15</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>8</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>40</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>10</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>9</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>45</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>50</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>5</div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p>8. Реализуйте схему получения запутанного состояния двух кубитов α|00⟩ + β|01⟩ + γ|11⟩ с вероятностями |α|<sup>2</sup>=|β|<sup>2</sup>=|γ|<sup>2</sup>=33.33..%. Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>9. Реализуйте схему получения запутанного состояния двух кубитов (формула). Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>10. Реализуйте схему получения запутанного состояния двух кубитов (формула). Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>11. Реализуйте схему получения запутанного состояния двух кубитов (формула). Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>12. Реализуйте схему получения запутанного состояния двух кубитов (формула). Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>13. Реализуйте схему получения запутанного состояния двух кубитов (формула). Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>14. Реализуйте схему получения запутанного состояния трех кубитов (формула). Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>15. Реализуйте схему получения запутанного состояния трех кубитов (формула). Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>16.Реализуйте схему получения запутанного состояния трех кубитов (формула). Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>17.Реализуйте схему получения запутанного состояния трех кубитов α|010⟩ + β|111⟩ с вероятностями согласно таблице 2. Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>18.Оформите отчёт по лабораторной работе. Отчет включает в себя скриншоты всех схем и результатов симуляции по программе работы, выводы.</p>
        </div>
    );

};

export default Practice3;