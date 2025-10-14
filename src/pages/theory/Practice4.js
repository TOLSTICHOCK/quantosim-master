import React from "react";
import "../theory/lecture.css";

const Practice3 = () => {
    return(
        <div className="div-lecture">
            <h3 align="center">Лабораторная работа №4</h3>
            <h4 align="center">Квантовые алгоритмы</h4>
            <h4 align="center">1. Цель работы</h4>
            <p><b>Целью</b> работы является получение навыков разработки квантовых алгоритмов в системе QSIM.</p>
            <h4 align="center">2. Программа работы</h4>
            <p>Выполните следующие пункты работы:</p>
            <p>1. Реализуйте квантовый алгоритм передачи цифр 0÷3 от Алисы к Бобу. Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>2. Реализуйте квантовый алгоритм передачи цифр 0÷3 от Алисы к Бобу с использованием гетов «if». Выполните симуляцию и обоснование результатов симуляции.</p>
            <p>3. Реализуйте алгоритм квантовой телепортации от Алисы к Бобу кубита в состоянии суперпозиции. Состояние кубита должно соответствовать варианту в таблице 1.</p>
            <p align="right"><i>Таблица 1. Варианты заданий</i></p>
            <table align="center">
                <tbody>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вариант</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вероятность состояния |0⟩</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вероятность состояния |1⟩</div>
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
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>95</div>
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
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>90</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>3</div>
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
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>40</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>60</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>6</div>
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
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>7</div>
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
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>8</div>
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
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>9</div>
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
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>10</div>
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
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>11</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>95</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>5</div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p>4. В системе QSIM реализуйте алгоритм Дойча для функций <i>f</i><sub>1</sub>(<i>x</i>)=0, <i>f</i><sub>2</sub>(<i>x</i>)=1, <i>f</i><sub>3</sub>(<i>x</i>)=<i>x</i> и <i>f</i><sub>3</sub>(<i>x</i>)=<i>х</i>. Выполните симуляцию для каждой функции и обоснование полученных результатов.</p>
            <p>5. В системе QSIM реализуйте оракул функции <i>f</i>(<i>x</i><sub>1</sub>,<i>x</i><sub>2</sub>)=<i>x</i><sub>1</sub> ⊕ <i>x</i><sub>2</sub>. Выполните симуляцию и убедитесь в корректности работы.</p>
            <p>6. В системе QSIM реализуйте алгоритм Дойча для функции <i>f</i>(<i>x</i><sub>1</sub>,<i>x</i><sub>2</sub>)=<i>x</i><sub>1</sub> ⊕ <i>x</i><sub>2</sub>. Выполните симуляцию и обоснование полученных результатов.</p>
        </div>
    );
};

export default Practice3;